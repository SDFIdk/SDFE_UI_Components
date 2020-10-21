<template>
  <div>
    <UiFormSelect
      :value="value"
      :options="options"
      @change="onChange"
    />
    <span>Value: {{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'Example_UiFormSelect',
  data() {
    return {
      value: 'second_val',
      options: [
        {
          label: 'First',
          value: 'first_val'
        },
        {
          label: 'Second',
          value: 'second_val'
        },
        {
          label: 'Third',
          value: 'third_val'
        }
      ]
    }
  },
  methods: {
    onChange(value) {
      this.value = value
    }
  }
}
</script>
