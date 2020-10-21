<template>
  <div>
    <UiTabs>
      <UiTabsItem 
        v-for="tab in tabs"
        :key="`tab_${tab.id}`" 
        :active="tab.id === selectedTab"
        :title="tab.title"
        @onSelect="() => onTabSelect(tab.id)"
      >
        {{ tab.text }}
      </UiTabsItem>
    </UiTabs>
    
    <p>Selected id: {{ selectedTab }}</p>

    <!-- Example of programmatic navigation -->
    Select tab: 
    <a
      v-for="tab in tabs"
      :key="`link_${tab.id}`" 
      :title="tab.title"
      @click.prevent="() => onTabSelect(tab.id)" 
      >{{ tab.title }} </a>
  </div>
</template>

<script>
export default {
  name: 'Example_UiTabs',
  data() {
    return {
      tabs: [
        {
          id: 'tab1',
          title: 'Tab 1',
          text: 'Lorem ipsum dolor sit amet'
        },
        {
          id: 'tab2',
          title: 'Tab 2',
          text: 'Consectetur adipiscing elit'
        },
        {
          id: 'tab3',
          title: 'Tab 3',
          text: 'Integer malesuada nulla leo'
        }
      ],
      selectedTab: 'tab2'
    }
  },
  methods: {
    onTabSelect(id) {
      this.selectedTab = id
    }
  }
}
</script>
