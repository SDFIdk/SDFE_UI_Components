<template>
  <UiFormCheckbox
    label="My checkbox"
    :checked="false"
    @change="onChange"
  />
</template>

<script>
export default {
  name: 'Example_UiFormCheckbox',
  methods: {
    onChange(active) {
      console.log('checkbox change', active)
    }
  }
}
</script>
