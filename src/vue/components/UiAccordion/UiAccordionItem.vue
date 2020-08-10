<template>
  <div
    :class="{ 'is-active': isActive }" 
    class="ui-accordion__item"
    >
    <button 
      @click="onSelect"
      class="ui-accordion__btn"
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
    id() {
      return this.key || `UiAccordionItem_${ this._uid }`
    }
  },
  created() {
    this.isActive = this.active;

    this.$parent.$on('onItemSelect', this.onItemSelect);
  },
  methods: {
    onSelect() {
      // Internal event for selecting active item
      this.$parent.$emit('onItemSelect', this.id);
      // Emit event for use in implementation
      this.$parent.$emit('onSelect', this.id);
    },
    onItemSelect(id) {
      this.isActive = (id === this.id);
    }
  }
}
</script>
