<template>
  <UiContainer>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <UiRadioGroup v-model="filter.date" :options="$options.dateFilterOptions" />
      </div>
      <div class="filters-panel__col">
        <UiFormGroup inline>
          <UiInput v-model="filter.search" class="form-control_sm" left-icon="search" placeholder="Поиск" type="search"
            rounded />
        </UiFormGroup>
        <UiFormGroup inline>
          <UiSwitcher v-model="view" :options="$options.switcherViewOptions" type="primary" rounded />
        </UiFormGroup>
      </div>
    </div>
    <template v-if="events">
      <component v-if="filteredEvents.length" :is="currentViewComponent" :events="filteredEvents" />
      <UiAlert v-else>Событий не найдено</UiAlert>
    </template>
    <UiAlert v-else text="Загрузка..." />
  </UiContainer>
</template>

<script>
import EventList from '@/components/EventList'
import EventCalendar from '@/components/EventCalendar'
import events from '@/api/events'

const TESTING_TIMEOUT = 500

const dateFilterOptions = [
  { text: 'Все', value: 'all' },
  { text: 'Прошедшие', value: 'past' },
  { text: 'Ожидаемые', value: 'future' },
]

const switcherViewOptions = [
  {
    icon: 'list',
    value: 'list',
    label: 'Event list',
  }, {
    icon: 'calendar',
    value: 'calendar',
    label: 'Event calendar',
  }
]

const viewComponents = {
  list: EventList,
  calendar: EventCalendar,
}

export default {
  name: 'EventListView',

  dateFilterOptions,
  switcherViewOptions,

  data() {
    return {
      events: null,

      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },

      view: 'list',
    }
  },

  computed: {
    currentViewComponent() {
      return viewComponents[this.view]
    },
    filteredEvents() {
      const dateFilter = (event) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(event.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(event.date) > new Date());

      const participationFilter = (event) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && event.organizing) ||
        (this.filter.participation === 'attending' && event.attending);

      const searchFilter = (event) =>
        [event.title, event.description, event.place, event.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.events.filter((event) => dateFilter(event) && participationFilter(event) && searchFilter(event));
    },
  },

  mounted() {
    fetchEvents().then((events) => {
      this.events = events
    });
  },
}

/**
 * Получение списка событий с API
 * @return {Promise<Object>} - Список событий
 * @throws {Error} - Ошибка получения списка событий
 */

function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(events), TESTING_TIMEOUT)
  })
}
</script>

<style scoped>
.filters-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2.5rem 0 2rem 0;
}

.filters-panel__col {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.filters-panel__col:not(:first-of-type) {
  margin-top: 1rem;
}

@media all and (min-width: 768px) {
  .filters-panel {
    flex-direction: row;
  }

  .filters-panel__col:not(:first-of-type) {
    margin-top: 0;
  }
}
</style>