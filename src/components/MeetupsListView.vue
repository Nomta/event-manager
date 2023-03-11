<template>
  <UiContainer>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <UiRadioGroup v-model="filter.date" :options="$options.dateFilterOptions" />
      </div>
      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <div class="input-group input-group_icon input-group_icon-left">
            <div class="input-group__icon">
              <UiIcon name="search" alt="search" />
            </div>
            <input class="form-control form-control_rounded form-control_sm" placeholder="Поиск" type="search"
              v-model.trim="filter.search" />
          </div>
        </div>
        <div class="form-group form-group_inline">
          <UiSwitcher v-model="view" :options="$options.switcherViewOptions" type="primary" />
        </div>
      </div>
    </div>
    <template v-if="meetups">
      <component v-if="filteredMeetups.length" :is="currentViewComponent" :meetups="filteredMeetups" />
      <UiAlert v-else>Митапов по заданным условиям не найдено...</UiAlert>
    </template>
    <UiAlert v-else text="Загрузка..." />
  </UiContainer>
</template>

<script>
import UiContainer from '@/components/ui/UiContainer'
import MeetupsList from '@/components/MeetupsList'
import MeetupsCalendar from '@/components/MeetupsCalendar'
import UiAlert from '@/components/ui/UiAlert'
import UiRadioGroup from '@/components/ui/UiRadioGroup'
import UiSwitcher from '@/components/ui/UiSwitcher'
import UiIcon from '@/components/ui/UiIcon'
import meetups from '@/api/meetups'

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
    label: 'Meetup list',
  }, {
    icon: 'calendar',
    value: 'calendar',
    label: 'Meetup calendar',
  }
]

const viewComponents = {
  list: MeetupsList,
  calendar: MeetupsCalendar,
}

export default {
  name: 'MeetupsListView',

  components: {
    // MeetupsList,
    // MeetupsCalendar,
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
      meetups: null,

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
    filteredMeetups() {
      const dateFilter = (meetup) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && meetup.organizing) ||
        (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.meetups.filter((meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup));
    },
  },

  mounted() {
    fetchMeetups().then((meetups) => {
      this.meetups = meetups
    });
  },
}

/**
 * Получение списка митапов с API
 * @return {Promise<Object>} - Список митапов
 * @throws {Error} - Ошибка получения списка митапов
 */
function fetchMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(meetups), TESTING_TIMEOUT)
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