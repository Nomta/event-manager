<template>
  <ul class="program">
    <li class="program__item" v-for="programItem in program" :key="programItem.id">
      <EventProgramItem :programItem="programItem" />
    </li>
  </ul>
</template>

<script>
import EventProgramItem from './EventProgramItem'

export default {
  name: 'EventProgram',

  components: {
    EventProgramItem,
  },

  props: {
    program: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.program {
  margin: 0;
  padding: 0;
  list-style: none;
}

.program__item {
  border-top: 1px solid var(--grey-3);
}

.program__item:first-child {
  border-top: none;
}
</style>