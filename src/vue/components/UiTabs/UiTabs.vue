<template>
  <div class="ui-tabs">
    <div class="ui-tabs__header">
      <nav class="ui-tabs__nav">
        <button
          v-for="(item, index) in items"
          :key="`${ id }_item_${ index }`"
          class="ui-tabs__btn"
          :class="{ 'is-active': item.isActive }"
          @click="onSelect(item)"
        >
          {{ item.title }}
        </button>
      </nav>
    </div>
    <div v-if="hasTabContent" class="ui-tabs__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiTabs',
  data () {
    return {
      id: `UiTabs_${Date.now()}`,
      items: [],
      currentItem: null,
      hasTabContent: true
    }
  },
  created () {
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created
    this.$nextTick(() => {
      this.items = this.$children.filter(t => t._isTab)
      this.currentItem = this.items.find(t => t.isActive)

      // Set the fist tab to active if none predefined
      if (!this.currentItem && this.items.length > 0) {
        this.currentItem = this.items[0]
        this.currentItem.isActive = true
      }
      
      if (this.currentItem) {
        this.hasTabContent = this.componentHasSlotContent(this.currentItem)
      }
    })
  },
  methods: {
    componentHasSlotContent (tabComponent) {
      return !!tabComponent.$slots.default
    },
    onSelect (item) {
      if (item === this.currentItem) {
        return
      }

      if (this.currentItem) {
        this.currentItem.isActive = false
      }

      this.currentItem = item
      this.currentItem.isActive = true

      this.hasTabContent = this.componentHasSlotContent(this.currentItem)
    }
  }
}
</script>
