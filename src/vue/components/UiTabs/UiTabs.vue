<template>
  <div class="ui-tabs">
    <div class="ui-tabs__header">
      <nav class="ui-tabs__nav">
        <button
          v-for="(item, index) in items"
          :key="`${ id }_item_${ index }`"
          class="ui-tabs__btn"
          :class="{ 'is-active': item.isActive }"
          @click="onClick(item)"
        >
          {{ item.title }}
        </button>
      </nav>
    </div>
    <div
      v-show="hasTabContent"
      class="ui-tabs__body"
    >
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
        this.currentItem.select()
      }

      if (this.currentItem) {
        this.hasTabContent = this.componentHasSlotContent(this.currentItem)
      }
    })
  },
  methods: {
    componentHasSlotContent (tabComponent) {
      return tabComponent && !!tabComponent.$slots.default
    },
    onClick (clickedItem) {
      this.items.forEach(item => {
        if (clickedItem === item) {
          item.select()
        } else {
          item.unSelect()
        }
      })

      this.currentItem = clickedItem

      this.hasTabContent = this.componentHasSlotContent(this.currentItem)
    }
  }
}
</script>
