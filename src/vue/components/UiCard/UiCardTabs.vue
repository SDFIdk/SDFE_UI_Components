<template>
  <div class="ui-card__tabs">
    <nav class="ui-card__tabs-nav">
      <button 
        v-for="(tab, index) in tabs" 
        :key="`tab-${ index }`"
        @click="onTabClick(tab)"
        class="ui-card__tabs-btn"
        :class="{ 'is-active': tab.isActive }"
      >
      {{ tab.title }}
      </button>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiCardTabs',
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