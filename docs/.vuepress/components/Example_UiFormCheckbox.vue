<template>
  <div>
    <UiFormCheckbox
      label="My checkbox"
      :checked="false"
      @change="onChange"
    />
    <span>Checked: {{ checked }}</span>
  </div>
</template>

<script>
export default {
  name: 'Example_UiFormCheckbox',
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    onChange(checked) {
      this.checked = checked
    }
  }
}
</script>
