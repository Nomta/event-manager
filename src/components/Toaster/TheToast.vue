<template>
  <div class="toast" :class="types.className">
    <UiIcon class="toast__icon" :name="types.icon" />
    <span>{{ message }}</span>
    <span v-if="closeBtn" @click="close" class="toast__close-button">
      &times;
    </span>
  </div>
</template>

<script>
const TOAST_TYPES = {
  success: {
    icon: 'check-circle',
    className: 'toast_success'
  },
  info: {
    icon: 'check-circle',
    className: 'toast_info'
  },
  warning: {
    icon: 'alert-circle',
    className: 'toast_warning'
  },
  error: {
    icon: 'alert-circle',
    className: 'toast_error'
  }
}

export default {
  name: 'TheToast',

  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => Object.keys(TOAST_TYPES).includes(value)
    },
    message: {
      type: String,
      required: true
    },
    closeBtn: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close'],

  computed: {
    types() {
      return TOAST_TYPES[this.type]
    },
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.toast {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background: #ffffff;
  box-shadow: var(--box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
  border-radius: var(--min-border-radius, 4px);
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_info {
  color: var(--blue);
}

.toast.toast_warning {
  color: var(--yellow);
}

.toast.toast_error {
  color: var(--red);
}

.toast__icon {
  margin-right: 0.75rem;
}

.toast__close-button {
  position: absolute;
  top: 0;
  right: -1.5rem;
  color: rgb(14, 13, 13);
  cursor: pointer;
}
</style>
