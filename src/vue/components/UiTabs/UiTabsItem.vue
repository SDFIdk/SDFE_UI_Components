<template>
  <div
    :class="{ 'is-active': isActive }"
    class="ui-tabs__item"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiTabsItem',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    _isTab () {
      // For parent sniffing of child
      return true
    },
    id () {
      return this.$vnode.key || `UiTabsItem_${this._uid}`
    }
  },
  watch: {
    isActive (val) {
      if (val) {
        // Emit event when tab is selected
        this.$emit('onSelect', this.id)
      }
    }
  },
  created () {
    this.isActive = this.active
  }
}
</script>
