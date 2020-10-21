<template>
  <div class="ui-form-control ui-form-range">
    <label
      v-if="label"
      class="ui-form-label"
      :for="id"
    >{{ label }}</label>
    <div
      :id="`${ id }_value_tip`"
      class="ui-form-range__value"
    >
      <div
        class="ui-form-range__value-tip"
        :style="tipStyles"
      >
        <span class="ui-form-range__value-tip-val">
          {{ tiptext }}
        </span>
      </div>
    </div>
    <input
      :id="id"
      type="range"
      class="ui-form-range__input"
      :min="min"
      :max="max"
      :value="model"
      @input="onDrag"
    >
  </div>
</template>

<script>
export default {
  name: 'UiFormRange',
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default () {
        return []
      },
      validator (options) {
        let isValid = true
        options.forEach(option => {
          if (typeof (option) !== 'object') {
            isValid = false
          }
          if (typeof option.value === 'undefined' || typeof option.label === 'undefined') {
            isValid = false
          }
        })
        return isValid
      }
    }
  },
  data () {
    return {
      id: `ui_form_range_${this._uid}`,
      model: 1,
      tipOffset: 0,
      tiptext: ''
    }
  },
  computed: {
    min () {
      return 1
    },
    max () {
      return this.options.length
    },
    tipStyles () {
      return {
        left: `${this.tipOffset}%`
      }
    }
  },
  watch: {
    value (newVal, oldVal) {
      this.setModelValue(newVal)
    }
  },
  created () {
    this.setModelValue(this.value)
    this.setTipOffset(this.model)
    this.setTipText(this.model)
  },
  methods: {
    setModelValue (searchValue) {
      const currentIndex = this.options.findIndex(({ value }) => value === searchValue)
      this.model = currentIndex + 1
    },
    onDrag ($event) {
      const value = $event.target.value
      const index = value - 1

      this.setTipOffset(value)
      this.setTipText(value)

      this.$emit('change', this.options[index].value)
    },
    setTipOffset (value) {
      this.tipOffset = (value - 1) / (this.max - 1) * 100
    },
    setTipText (value) {
      const currentIndex = value - 1
      this.tiptext = this.options.find((option, index) => index === currentIndex).label
    }
  }
}
</script>
