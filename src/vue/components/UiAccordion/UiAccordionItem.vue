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
    _isAccordionItem() {
      // For parent sniffing of child
      return true
    }
  },
  created() {
    this.isActive = this.active;

    this.$parent.$on('onItemSelect', this.onItemSelect);
  },
  methods: {
    onSelect() {
      this.$parent.$emit('onItemSelect', this);
    },
    onItemSelect(item) {
      this.isActive = (item === this);
    }
  }
}
</script>