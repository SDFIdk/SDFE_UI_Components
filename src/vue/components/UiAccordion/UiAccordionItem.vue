<template>
  <div
    :class="{ 'is-active': isActive }"
    class="ui-accordion__item"
  >
    <button
      class="ui-accordion__btn"
      @click="onClick"
    >
      {{ title }}
    </button>
    <div class="ui-accordion__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiAccordionItem',
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
    id () {
      return this.$vnode.key || `UiAccordionItem_${this._uid}`
    }
  },
  watch: {
    active (val) {
      if (val) {
        // Emit event when tab is selected
        this.select()
      } else {
        this.unSelect()
      }
    }
  },
  created () {
    this.isActive = this.active

    this.$parent.$on('onItemSelect', this.onItemSelect)
  },
  methods: {
    select () {
      this.isActive = true
      // Internal event for selecting active item
      this.$parent.$emit('onItemSelect', this.id)
      // Emit event for use in implementation
      this.$parent.$emit('onSelect', this.id)
    },
    unSelect () {
      this.isActive = false
    },
    onClick () {
      if (this.isActive) {
        this.unSelect()
      } else {
        this.select()
      }
    },
    onItemSelect (id) {
      if (id !== this.id) {
        this.unSelect()
      }
    }
  }
}
</script>
