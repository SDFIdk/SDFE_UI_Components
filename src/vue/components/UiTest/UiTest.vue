<template>
  <div>
    Test Component
    <!-- <img svg-inline class="icon" src="../../../assets/icons/icon-user.svg" alt="example" /> -->
    <icon-user />
  </div>
</template>

<script>
export default {
  name: 'UiTest',
  components: {
    // 'icon-user': () => import('../../../assets/icons/icon-user.svg')
    // IconUser
  },
  props: {
    name: String
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.ready = true
  //   })
  // }
}
</script>
