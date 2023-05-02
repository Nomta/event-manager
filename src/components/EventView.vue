<template>
  <div>
    <EventCover :title="event.title" :image="event.image" />
    <UiContainer>
      <div class="event">
        <div class="event__content">
          <h3>Описание</h3>
          <EventDescription :description="event.description" />
          <h3>Программа</h3>
          <EventProgram v-if="event.program" :program="event.program" />
          <UiAlert v-else>Программа пока пуста...</UiAlert>
        </div>
        <div class="event__aside">
          <EventInfo :organizer="event.organizer" :place="event.place" :date="event.date" />
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script>
import EventDescription from '@/components/EventDescription'
import EventCover from '@/components/EventCover'
import EventInfo from '@/components/EventInfo'
import EventProgram from '@/components/EventProgram'

export default {
  name: 'EventView',

  components: {
    EventDescription,
    EventCover,
    EventInfo,
    EventProgram,
  },

  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.event {
  display: flex;
  flex-direction: column;
  margin: 48px 0 0;
}

.event__aside {
  margin: 40px 0;
}

@media all and (min-width: 992px) {
  .event {
    flex-direction: row;
  }

  .event__content {
    flex: 1 0 calc(100% - 350px);
  }

  .event__aside {
    flex: 1 0 350px;
    padding: 50px 0 0 44px;
    margin: 0;
  }
}
</style>