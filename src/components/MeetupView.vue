<template>
  <div>
    <MeetupCover :title="meetup.title" :image="meetup.image" />
    <UiContainer>
      <div class="meetup">
        <div class="meetup__content">
          <h3>Описание</h3>
          <MeetupDescription :description="meetup.description" />
          <h3>Программа</h3>
          <MeetupAgenda v-if="meetup.agenda" :agenda="meetup.agenda" />
          <UiAlert v-else>Программа пока пуста...</UiAlert>
        </div>
        <div class="meetup__aside">
          <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script>
import UiAlert from '@/components/ui/UiAlert'
import UiContainer from '@/components/ui/UiContainer'
import MeetupDescription from '@/components/MeetupDescription'
import MeetupCover from '@/components/MeetupCover'
import MeetupInfo from '@/components/MeetupInfo'
import MeetupAgenda from '@/components/MeetupAgenda'

export default {
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.meetup {
  display: flex;
  flex-direction: column;
  margin: 48px 0 0;
}

.meetup__aside {
  margin: 40px 0;
}

@media all and (min-width: 992px) {
  .meetup {
    flex-direction: row;
  }

  .meetup__content {
    flex: 1 0 calc(100% - 350px);
  }

  .meetup__aside {
    flex: 1 0 350px;
    padding: 50px 0 0 44px;
    margin: 0;
  }
}
</style>