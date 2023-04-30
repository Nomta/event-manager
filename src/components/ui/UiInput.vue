<template>
  <div class="input-group" :class="iconClass">
    <textarea v-if="multiline" ref="input" class="form-control form-control_rounded textarea" v-model.trim="value"
      v-bind="$attrs"></textarea>
    <template v-else>
      <div v-if="leftIcon" class="input-group__icon">
        <UiIcon :name="leftIcon" />
      </div>
      <input ref="input" class="form-control form-control_rounded" v-model.trim="value" v-bind="$attrs" />
      <div v-if="!leftIcon && rightIcon" class="input-group__icon">
        <UiIcon :name="rightIcon" />
      </div>
    </template>
  </div>
</template>

<script>
import UiIcon from '@/components/ui/UiIcon'

export default {
  name: 'UiInput',

  components: {
    UiIcon,
  },

  props: {
    leftIcon: String,
    rightIcon: String,
    modelValue: String,
    multiline: Boolean,
    focus: Boolean,
  },

  events: ['update:modelValue'],

  inheritAttrs: false,

  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    iconClass() {
      if (this.leftIcon && !this.multiline) {
        return 'input-group_icon input-group_icon-left'
      }

      if (this.rightIcon && !this.multiline) {
        return 'input-group_icon input-group_icon-right'
      }
    }
  },

  mounted() {
    if (this.focus) {
      this.$refs.input.focus()
    }
  },
}
</script>

<style scoped>
.input-group {
  --height: 2.6em;
  --padding-x: 0.6em;
  --padding-y: 0.8em;
  --padding-icon: 2.5em;
  --margin-icon: 0.8em;

  position: relative;
}

.form-control {
  height: var(--height);
  padding: var(--padding-y) var(--padding-x);
  border-radius: var(--border-radius);
  border: 2px solid var(--blue-light);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.4em;
  color: var(--body-color);
  transition: var(--transition-duration) border-color;
  background-color: var(--white);
  outline: none;
  box-shadow: none;
}

.form-control::placeholder {
  font-weight: 400;
  color: var(--blue-2);
}

.form-control:focus {
  border-color: var(--blue);
}

.form-control.textarea {
  width: 100%;
  height: auto;
  min-height: 6em;
}

.form-control.form-control_sm {
  --height: 2.2em;
  --padding-x: 0.4em;
  --border-radius: 4px;
}

.form-control.form-control_rounded {
  --border-radius: calc(var(--height) / 2);
}

.input-group .form-control {
  width: 100%;
}

.input-group.input-group_icon .form-control {
  padding-left: var(--padding-icon);
}

.input-group.input-group_icon .input-group__icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.input-group.input-group_icon.input-group_icon-left .input-group__icon {
  left: var(--margin-icon);
}

.input-group.input-group_icon.input-group_icon-right .input-group__icon {
  right: var(--margin-icon);
}
</style>