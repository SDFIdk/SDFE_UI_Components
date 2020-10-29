<template>
  <div>
    <button @click="onClick">
      Toggle content
    </button>
    <UiTransitionCollapse>
      <div v-if="isActive">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis sem sodales neque malesuada tempus. Praesent aliquam semper lectus at mollis. Maecenas et elit eget turpis porta lobortis non sed elit. Morbi in tellus lobortis, sodales sapien nec, facilisis metus. Pellentesque nec lorem consequat, sagittis sem ac, venenatis urna. 
      </div>
    </UiTransitionCollapse>
  </div>
</template>

<script>
export default {
  name: 'Example_UiTransitionCollapse',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>
