<template>
  <div class="ui-tabs">
    <div class="ui-tabs__header">
      <nav class="ui-tabs__nav">
        <button 
          v-for="(tab, index) in tabs" 
          :key="`tab-${ index }`"
          @click="onTabClick(tab)"
          class="ui-tabs__btn"
          :class="{ 'is-active': tab.isActive }"
        >
        {{ tab.title }}
        </button>
      </nav>
    </div>
    <div class="ui-tabs__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiTabs',
  data() {
    return {
      tabs: [],
      currentTab: null
    }
  },
  created() {
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created
    this.$nextTick(() => {
      this.tabs = this.$children.filter(t => t._isTab);
      this.currentTab = this.tabs.find(t => t.isActive);

      // Set the fist tab to active if none predefined
      if (!this.currentTab && this.tabs.length > 0) {
        this.currentTab = this.tabs[0];
        this.currentTab.isActive = true;
      }
    });
  },
  methods: {
    onTabClick(tab) {
      if (tab === this.currentTab) {
        return;
      }

      if (this.currentTab) {
        this.currentTab.isActive = false;
      }

      this.currentTab = tab;
      this.currentTab.isActive = true;
    }
  }
}
</script>