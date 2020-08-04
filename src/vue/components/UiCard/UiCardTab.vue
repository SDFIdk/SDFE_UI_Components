<template>
  <button class="ui-card__tab">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiCardTab',
  computed: {
    _isTab() {
      // For parent sniffing of child
      return true
    }
  }
}
</script>