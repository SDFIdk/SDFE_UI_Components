<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>

export default {
  name: 'UiTransitionCollapse',
  methods: {
    isIE () {
      const ua = navigator.userAgent
      return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1
    },
    enter (element) {
      if (this.isIE()) {
        return
      }
      const width = getComputedStyle(element).width

      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height

      // Trigger the animation.
      // We use `setTimeout` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      setTimeout(function () {
        element.style.height = height
      })
    },
    afterEnter (element) {
      if (this.isIE()) {
        return
      }
      element.style.height = 'auto'
    },
    leave (element) {
      if (this.isIE()) {
        return
      }
      const height = getComputedStyle(element).height

      element.style.height = height

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height

      setTimeout(function () {
        element.style.height = 0
      })
    }
  }
}
</script>
