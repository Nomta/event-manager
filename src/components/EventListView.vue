<template>
  <UiContainer>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <UiRadioGroup v-model="filter.date" :options="$options.dateFilterOptions" />
      </div>
      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <UiInput v-model="filter.search" class="form-control_sm" left-icon="search" placeholder="Поиск" type="search" />
        </div>
        <div class="form-group form-group_inline">
          <UiSwitcher v-model="view" :options="$options.switcherViewOptions" type="primary" />
        </div>
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
import UiContainer from '@/components/ui/UiContainer'
import EventList from '@/components/EventList'
import EventCalendar from '@/components/EventCalendar'
import UiAlert from '@/components/ui/UiAlert'
import UiRadioGroup from '@/components/ui/UiRadioGroup'
import UiSwitcher from '@/components/ui/UiSwitcher'
import UiIcon from '@/components/ui/UiIcon'
import UiInput from '@/components/ui/UiInput'
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

  components: {
    // EventList,
    // EventCalendar,
    UiInput,
    UiRadioGroup,
    UiSwitcher,
    UiContainer,
    UiAlert,
    UiIcon,
  },

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
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 32px 0;
}

.filters-panel__col {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline+.form-group.form-group_inline {
  margin-left: 16px;
}

.form-group__label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}


.input-group {
  position: relative;
}

.input-group .form-control {
  width: 100%;
}

.input-group.input-group_icon .form-control {
  padding-left: 50px;
}

.input-group.input-group_icon .input-group__icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.input-group.input-group_icon.input-group_icon-left .input-group__icon {
  left: 16px;
}

.input-group.input-group_icon.input-group_icon-right .input-group__icon {
  right: 16px;
}

@media all and (max-width: 767px) {
  .filters-panel {
    flex-direction: column;
  }

  .filters-panel__col+.filters-panel__col {
    margin-top: 16px;
  }
}
</style>