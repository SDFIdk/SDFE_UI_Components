<template>
  <div class="ui-card">
    <div class="ui-card__inner">
      <slot name="header" />
      <slot />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCard'
}
</script>
