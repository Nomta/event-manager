<template>
  <div class="form-group" :class="{ 'form-group_inline': this.inline }">
    <label v-if="label" class="form-group__label">{{ label }}</label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiFormGroup',
  props: {
    inline: Boolean,
    label: String
  },
}
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline+.form-group.form-group_inline {
  margin-left: 1rem;
}

.form-group__label {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 0.625rem;
  display: block;
}
</style>
