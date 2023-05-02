<template>
  <div class="program-item">
    <div class="program-item__col">
      <UiIcon v-if="iconName" :name="iconName" />
    </div>
    <div class="program-item__col">{{ programItem.startsAt }} - {{ programItem.endsAt }}</div>
    <div class="program-item__col">
      <h3 class="program-item__title">{{ title }}</h3>
      <p v-if="programItem.type === 'talk'" class="program-item__talk">
        <span>{{ programItem.speaker }}</span>
        <span class="program-item__dot"></span>
        <span class="program-item__lang">{{ programItem.language }}</span>
      </p>
      <p v-if="programItem.description">Description</p>
    </div>
  </div>
</template>

<script>
import { AGENDA_TYPES } from '@/services/app.config'

export default {
  name: 'EventProgramItem',

  props: {
    programItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    programType() {
      return AGENDA_TYPES[this.programItem.type]
    },
    title() {
      return this.programItem.title ?? this.programType?.title
    },
    iconName() {
      return this.programType?.icon
    }
  },
}
</script>

<style scoped>
.program-item {
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  line-height: 28px;
}

.program-item__col:nth-child(1) {
  flex: 1 0 48px;
  max-width: 48px;
}

.program-item__col:nth-child(2) {
  flex: 115px;
  max-width: 115px;
  color: var(--main-color);
  white-space: nowrap;
}

.program-item__col:nth-child(3) {
  flex: 1 0 calc(100% - 48 - 115);
  max-width: calc(100% - 48 - 115);
  padding-left: 24px;
}

.program-item__title {
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
}

.program-item__lang {
  font-style: italic;
}

.program-item__dot::before {
  content: '•';
  color: var(--grey);
  padding: 0 1ch;
}

.program-item__talk {
  margin-top: 16px;
  margin-bottom: 0;
}

@media all and (min-width: 992px) {
  .program-item {
    padding: 40px 0;
  }
}
</style>