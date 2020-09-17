# Forms

## Base inputs

<div class="custom"> 
  <label class="ui-form-label" for="example_input_1">Email address</label>
  <input type="email" class="ui-form-input" id="example_input_1" placeholder="name@example.com">
</div>

<div class="custom"> 
  <label class="ui-form-label" for="example_input_2">Example select</label>
  <select class="ui-form-input" id="example_input_2">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>

<div class="custom"> 
  <label class="ui-form-label" for="example_input_3">Example multiple select</label>
  <select multiple class="ui-form-input" id="example_input_3">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>

<div class="custom"> 
  <label class="ui-form-label" for="example_input_4">Example textarea</label>
  <textarea class="ui-form-input" id="example_input_4" rows="3"></textarea>
</div>


```html
<label class="ui-form-label" for="example_input_1">Email address</label>
<input type="email" class="ui-form-input" id="example_input_1" placeholder="name@example.com">
```
```html
<label class="ui-form-label" for="example_input_2">Example select</label>
<select class="ui-form-input" id="example_input_2">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```
```html
<label class="ui-form-label" for="example_input_3">Example multiple select</label>
<select multiple class="ui-form-input" id="example_input_3">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```
```html
<label class="ui-form-label" for="example_input_4">Example textarea</label>
<textarea class="ui-form-input" id="example_input_4" rows="3"></textarea>
```

## Range input

<div class="custom"> 
  <div class="ui-form-range">
    <label class="ui-form-label" for="example_input_5">Example Range input</label>
    <input type="range" class="ui-form-range__input" id="example_input_5">
  </div>
</div>

```html
<div class="ui-form-range">
  <label class="ui-form-label" for="example_input_5">Example Range input</label>
  <input type="range" class="ui-form-range__input" id="example_input_5">
</div>
```

## Checkboxes and radios

<div class="custom"> 
  <div class="ui-form-check">
    <input class="ui-form-check__input" type="checkbox" value="" id="example_check_1">
    <label class="ui-form-check__label" for="example_check_1">
      Default checkbox
    </label>
  </div>
  <div class="ui-form-check">
    <input class="ui-form-check__input" type="checkbox" value="" id="example_check_2" disabled>
    <label class="ui-form-check__label" for="example_check_2">
      Disabled checkbox
    </label>
  </div>
</div>

```html
<div class="ui-form-check">
  <input class="ui-form-check__input" type="checkbox" value="" id="example_check_1">
  <label class="ui-form-check__label" for="example_check_1">
    Default checkbox
  </label>
</div>
<div class="ui-form-check">
  <input class="ui-form-check__input" type="checkbox" value="" id="example_check_2" disabled>
  <label class="ui-form-check__label" for="example_check_2">
    Disabled checkbox
  </label>
</div>
```


<div class="custom">
  <div class="ui-form-check">
    <input class="ui-form-check__input" type="radio" name="example_radios_1" id="example_radios_1_1" value="option1" checked>
    <label class="ui-form-check__label" for="example_radios_1_1">
      Default radio
    </label>
  </div>
  <div class="ui-form-check">
    <input class="ui-form-check__input" type="radio" name="example_radios_1" id="example_radios_1_2" value="option2">
    <label class="ui-form-check__label" for="example_radios_1_2">
      Second default radio
    </label>
  </div>
  <div class="ui-form-check">
    <input class="ui-form-check__input" type="radio" name="example_radios_1" id="example_radios_1_3" value="option3" disabled>
    <label class="ui-form-check__label" for="example_radios_1_3">
      Disabled radio
    </label>
  </div>
</div>


```html
<div class="ui-form-check">
  <input class="ui-form-check__input" type="radio" name="example_radios_1" id="example_radios_1_1" value="option1" checked>
  <label class="ui-form-check__label" for="example_radios_1_1">
    Default radio
  </label>
</div>
<div class="ui-form-check">
  <input class="ui-form-check__input" type="radio" name="example_radios_1" id="example_radios_1_2" value="option2">
  <label class="ui-form-check__label" for="example_radios_1_2">
    Second default radio
  </label>
</div>
<div class="ui-form-check">
  <input class="ui-form-check__input" type="radio" name="example_radios_1" id="example_radios_1_3" value="option3" disabled>
  <label class="ui-form-check__label" for="example_radios_1_3">
    Disabled radio
  </label>
</div>
```

## Nested form inputs

<div class="custom">
<ul class="ui-form-tree">
  <li class="ui-form-tree__item">
    <div class="ui-form-check">
      <input class="ui-form-check__input" type="radio" name="example_radios_2" id="example_radios_2_1" value="option1" checked>
      <label class="ui-form-check__label" for="example_radios_2_1">
        Default radio
      </label>
    </div>
    <ul class="ui-form-tree">
      <li class="ui-form-tree__item is-active">
        <div class="ui-form-check">
          <input class="ui-form-check__input" type="checkbox" value="" id="example_check_3" checked>
          <label class="ui-form-check__label" for="example_check_3">
            Nested checkbox 1
          </label>
        </div>
        <ul class="ui-form-tree">
          <li class="ui-form-tree__item">
            <div class="ui-form-check">
              <input class="ui-form-check__input" type="radio" name="example_radios_3" id="example_radios_3_1" value="option1" checked>
              <label class="ui-form-check__label" for="example_radios_3_1">
                Nested radio
              </label>
            </div>
          </li>
          <li class="ui-form-tree__item">
            <div class="ui-form-check">
              <input class="ui-form-check__input" type="radio" name="example_radios_3" id="example_radios_3_2" value="option1">
              <label class="ui-form-check__label" for="example_radios_3_2">
                Second nested radio
              </label>
            </div>
          </li>
        </ul>
      </li>
      <li class="ui-form-tree__item">
        <div class="ui-form-check">
          <input class="ui-form-check__input" type="checkbox" value="" id="example_check_4">
          <label class="ui-form-check__label" for="example_check_4">
            Nested checkbox 2
          </label>
        </div>
      </li>
      <li class="ui-form-tree__item">
        <div class="ui-form-check">
          <input class="ui-form-check__input" type="checkbox" value="" id="example_check_5">
          <label class="ui-form-check__label" for="example_check_5">
            Nested checkbox 3
          </label>
        </div>
      </li>
    </ul>
  </li>
  <li class="ui-form-tree__item">
    <div class="ui-form-check">
      <input class="ui-form-check__input" type="radio" name="example_radios_2" id="example_radios_2_2" value="option1">
      <label class="ui-form-check__label" for="example_radios_2_2">
        Second default radio
      </label>
    </div>
    <ul class="ui-form-tree">
      <li class="ui-form-tree__item">
        <label class="ui-form-label" for="example_input_6">Name field</label>
        <input type="text" class="ui-form-input" id="example_input_6" placeholder="Write your name here...">
      </li>
    </ul>
  </li>
</ul>
</div>

```html
<ul class="ui-form-tree">
  <li class="ui-form-tree__item">
    <div class="ui-form-check">
      <input class="ui-form-check__input" type="radio" name="example_radios_2" id="example_radios_2_1" value="option1" checked>
      <label class="ui-form-check__label" for="example_radios_2_1">
        Default radio
      </label>
    </div>
    <ul class="ui-form-tree">
      <li class="ui-form-tree__item is-active">
        <div class="ui-form-check">
          <input class="ui-form-check__input" type="checkbox" value="" id="example_check_3" checked>
          <label class="ui-form-check__label" for="example_check_3">
            Nested checkbox 1
          </label>
        </div>
        <ul class="ui-form-tree">
          <li class="ui-form-tree__item">
            <div class="ui-form-check">
              <input class="ui-form-check__input" type="radio" name="example_radios_3" id="example_radios_3_1" value="option1" checked>
              <label class="ui-form-check__label" for="example_radios_3_1">
                Nested radio
              </label>
            </div>
          </li>
          <li class="ui-form-tree__item">
            <div class="ui-form-check">
              <input class="ui-form-check__input" type="radio" name="example_radios_3" id="example_radios_3_2" value="option1">
              <label class="ui-form-check__label" for="example_radios_3_2">
                Second nested radio
              </label>
            </div>
          </li>
        </ul>
      </li>
      <li class="ui-form-tree__item">
        <div class="ui-form-check">
          <input class="ui-form-check__input" type="checkbox" value="" id="example_check_4">
          <label class="ui-form-check__label" for="example_check_4">
            Nested checkbox 2
          </label>
        </div>
      </li>
      <li class="ui-form-tree__item">
        <div class="ui-form-check">
          <input class="ui-form-check__input" type="checkbox" value="" id="example_check_5">
          <label class="ui-form-check__label" for="example_check_5">
            Nested checkbox 3
          </label>
        </div>
      </li>
    </ul>
  </li>
  <li class="ui-form-tree__item">
    <div class="ui-form-check">
      <input class="ui-form-check__input" type="radio" name="example_radios_2" id="example_radios_2_2" value="option1">
      <label class="ui-form-check__label" for="example_radios_2_2">
        Second default radio
      </label>
    </div>
    <ul class="ui-form-tree">
      <li class="ui-form-tree__item">
        <label class="ui-form-label" for="example_input_6">Name field</label>
        <input type="text" class="ui-form-input" id="example_input_6" placeholder="Write your name here...">
      </li>
    </ul>
  </li>
</ul>
```
