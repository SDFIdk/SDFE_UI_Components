<template>
  <div
    :class="{ 'is-active': isActive }" 
    class="ui-card__tab-content"
    >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiCardTab',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    _isTab() {
      // For parent sniffing of child
      return true
    }
  },
  created() {
    this.isActive = this.active;
  },
  watch: {
    isActive(val) {
      if (val) {
        // Emit event when tab is selected
        this.$emit('onSelect');
      }
    }
  }
}
</script>