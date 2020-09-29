<template>
  <div class="ui-form-control">
    <label
      v-if="label"
      class="ui-form-label"
      :for="id"
    >{{ label }}</label>
    <select
      :id="id"
      v-model="model"
      class="ui-form-input"
      @change="$emit('change', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="`${ id }_option_${ index }`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'UiFormSelect',
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      id: `select_${this._uid}`,
      model: this.value
    }
  },
  watch: {
    value (newVal, oldVal) {
      this.model = newVal
    }
  }
}

</script>
