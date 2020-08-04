<template>
  <div class="ui-card__tabs">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiCardTabs',
  data() {
    return {
      tabs: []
    }
  },
  created() {
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created
    this.$nextTick(() => {
      this.tabs = this.$children.filter(t=>t._isTab);
    });
  }
}
</script>