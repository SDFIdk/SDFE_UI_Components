# Components

## Cards

### Default

<UiCard>
  <UiCardBody>
  <h1>Card header</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </UiCardBody>
  <UiCardFooter>Card footer with <a href="#">link</a>.</UiCardFooter>
</UiCard>

### Card with tabs

<UiCard>
  <UiCardTabs>
  <UiCardTab active title="Tab 1">
  <UiCardBody>
  <p>Tab content 1</p>
  </UiCardBody>
  </UiCardTab>
  <UiCardTab title="Tab 2">
  <UiCardBody>
  <p>Tab content 2</p>
  </UiCardBody>
  </UiCardTab>
  <UiCardTab title="Tab 3">
  <UiCardBody>
  <p>Tab content 3</p>
  </UiCardBody>
  </UiCardTab>
  </UiCardTabs>
  <UiCardBody>
    <p>test</p>
  </UiCardBody>
  <UiCardFooter>Card footer</UiCardFooter>
</UiCard>

```html
<UiCard>
  <UiCardTabs>
    <UiCardTab class="selected">Tab 1</UiCardTab>
    <UiCardTab>Tab 2</UiCardTab>
    <UiCardTab>Tab 3</UiCardTab>
  </UiCardTabs>
  <UiCardBody>
    <p>test</p>
  </UiCardBody>
  <UiCardFooter>Footer test</UiCardFooter>
</UiCard>
```

## Component 2

## Component 3