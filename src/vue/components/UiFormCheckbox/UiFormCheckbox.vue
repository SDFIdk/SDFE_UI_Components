<template>
  <div class="ui-form-check">
    <input
      :id="id"
      v-model="model"
      class="ui-form-check__input"
      type="checkbox"
      @change="$emit('change', $event.target.checked)"
    >
    <label
      class="ui-form-check__label"
      :for="id"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiFormCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      id: `ui_form_checkbox_${this._uid}`,
      model: this.checked
    }
  },
  watch: {
    checked (newVal, oldVal) {
      this.model = newVal
    }
  }
}
</script>
