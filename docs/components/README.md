# Components

## Cards

### Default

<div class="custom example-pattern"> 
<UiCard>
  <UiCardBody>
  <h1>Card header</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </UiCardBody>
  <UiCardFooter>Card footer with <a href="#">link</a>.</UiCardFooter>
</UiCard>
</div>


```html
<UiCard>
  <UiCardBody>
    <h1>Card header</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </UiCardBody>
  <UiCardFooter>
    Card footer with <a href="#">link</a>.
  </UiCardFooter>
</UiCard>
```


### Card with tabs

<div class="custom example-pattern"> 
<UiCard>
  <UiTabs>
  <UiTabsItem title="Tab 1">Lorem ipsum dolor sit amet</UiTabsItem>
  <UiTabsItem active title="Tab 2">Consectetur adipiscing elit</UiTabsItem>
  <UiTabsItem title="Tab 3">Integer malesuada nulla leo</UiTabsItem>
  </UiTabs>
</UiCard>
</div>

```html
<UiCard>
  <UiTabs>
    <UiTabsItem title="Tab 1">
      Lorem ipsum dolor sit amet
    </UiTabsItem>
    <UiTabsItem active title="Tab 2">
      Consectetur adipiscing elit
    </UiTabsItem>
    <UiTabsItem title="Tab 3">
      Integer malesuada nulla leo
    </UiTabsItem>
  </UiTabs>
</UiCard>
```

<div class="custom example-pattern"> 
<UiCard>
  <UiCardBody>
  <h1>Card header</h1>
  <UiTabs>
  <UiTabsItem title="Tab 1">Lorem ipsum dolor sit amet</UiTabsItem>
  <UiTabsItem title="Tab 2">Consectetur adipiscing elit</UiTabsItem>
  <UiTabsItem title="Tab 3">Integer malesuada nulla leo</UiTabsItem>
  </UiTabs>
  </UiCardBody>
</UiCard>
</div>

```html
<UiCard>
  <UiCardBody>
    <h1>Card header</h1>
    <UiTabs>
      <UiTabsItem active title="Tab 1">
        Lorem ipsum dolor sit amet
      </UiTabsItem>
      <UiTabsItem title="Tab 2">
        Consectetur adipiscing elit
      </UiTabsItem>
      <UiTabsItem title="Tab 3">
        Integer malesuada nulla leo
      </UiTabsItem>
    </UiTabs>
  </UiCardBody>
</UiCard>
```

### Card with accordion

<div class="custom example-pattern"> 
<UiCard>
<UiAccordion>
  <UiAccordionItem title="Tab 1">Lorem ipsum dolor sit amet</UiAccordionItem>
  <UiAccordionItem active title="Tab 2">Consectetur adipiscing elit</UiAccordionItem>
  <UiAccordionItem title="Tab 3">Integer malesuada nulla leo</UiAccordionItem>
</UiAccordion>
</UiCard>
</div>

```html
<UiCard>
  <UiAccordion>
    <UiAccordionItem title="Tab 1">
      Lorem ipsum dolor sit amet
    </UiAccordionItem>
    <UiAccordionItem active title="Tab 2">
      Consectetur adipiscing elit
    </UiAccordionItem>
    <UiAccordionItem title="Tab 3">
      Integer malesuada nulla leo
    </UiAccordionItem>
  </UiAccordion>
</UiCard>
```

## Tabs
<div class="custom"> 
  
<UiTabs>
  <UiTabsItem title="Tab 1">Lorem ipsum dolor sit amet</UiTabsItem>
  <UiTabsItem active title="Tab 2">Consectetur adipiscing elit</UiTabsItem>
  <UiTabsItem title="Tab 3">Integer malesuada nulla leo</UiTabsItem>
</UiTabs>
</div>


```html
<UiTabs>
  <UiTabsItem title="Tab 1">
    Lorem ipsum dolor sit amet
  </UiTabsItem>
  <UiTabsItem active title="Tab 2">
    Consectetur adipiscing elit
  </UiTabsItem>
  <UiTabsItem title="Tab 3">
    Integer malesuada nulla leo
  </UiTabsItem>
</UiTabs>
```


## Accordion
<div class="custom"> 
<UiAccordion>
  <UiAccordionItem title="Tab 1">Lorem ipsum dolor sit amet</UiAccordionItem>
  <UiAccordionItem active title="Tab 2">Consectetur adipiscing elit</UiAccordionItem>
  <UiAccordionItem title="Tab 3">Integer malesuada nulla leo</UiAccordionItem>
</UiAccordion>
</div>


```html
<UiAccordion>
  <UiAccordionItem title="Tab 1">
    Lorem ipsum dolor sit amet
  </UiAccordionItem>
  <UiAccordionItem active title="Tab 2">
    Consectetur adipiscing elit
  </UiAccordionItem>
  <UiAccordionItem title="Tab 3">
    Integer malesuada nulla leo
  </UiAccordionItem>
</UiAccordion>
```

