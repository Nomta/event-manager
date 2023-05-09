<template>
  <form class="form" @submit.prevent>
    <slot name="default"></slot>
    <div class="form__buttons">
      <slot name="buttons">
        <UiButton type="primary" class="button_block" @click="handleSubmit">{{ submitText }}</UiButton>
      </slot>
    </div>
    <div class="form__append">
      <slot name="append"></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'UiForm',

  props: {
    submitText: String,
  },

  emits: ['submit'],

  methods: {
    handleSubmit() {
      this.$emit('submit')
    },
  },
}
</script>

<style scoped>
.form {
  margin: 0;
}

.form__buttons {
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
  margin-top: 2.5rem;
}

.form__append {
  margin-top: 2.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.4;
}

.button.button_block {
  display: block;
  width: 100%;
}
</style>
