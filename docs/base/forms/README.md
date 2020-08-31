# Forms

## Base inputs

<div class="custom"> 
  <label for="example_1">Email address</label>
  <input type="email" class="form-input" id="example_1" placeholder="name@example.com">
</div>

<div class="custom"> 
  <label for="exampleFormControlSelect1">Example select</label>
  <select class="form-input" id="exampleFormControlSelect1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>

<div class="custom"> 
  <label for="exampleFormControlSelect2">Example multiple select</label>
  <select multiple class="form-input" id="exampleFormControlSelect2">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>

<div class="custom"> 
  <label for="exampleFormControlTextarea1">Example textarea</label>
  <textarea class="form-input" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


```html
<label for="example_1">Email address</label>
<input type="email" class="form-input" id="example_1" placeholder="name@example.com">
```
```html
<label for="exampleFormControlSelect1">Example select</label>
<select class="form-input" id="exampleFormControlSelect1">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```
```html
<label for="exampleFormControlSelect2">Example multiple select</label>
<select multiple class="form-input" id="exampleFormControlSelect2">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```
```html
<label for="exampleFormControlTextarea1">Example textarea</label>
<textarea class="form-input" id="exampleFormControlTextarea1" rows="3"></textarea>
```

## Range input

<div class="custom"> 
  <label for="formControlRange">Example Range input</label>
  <input type="range" class="form-input--range" id="formControlRange">
</div>

```html
<label for="formControlRange">Example Range input</label>
<input type="range" class="form-input--range" id="formControlRange">
```

## Checkboxes and radios

<div class="custom"> 
  <div class="form-check">
    <input class="form-check__input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check__label" for="defaultCheck1">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check__input" type="checkbox" value="" id="defaultCheck2" disabled>
    <label class="form-check__label" for="defaultCheck2">
      Disabled checkbox
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check__input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check__label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check__input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check__label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
```


<div class="custom">
  <div class="form-check">
    <input class="form-check__input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    <label class="form-check__label" for="exampleRadios1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check__input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    <label class="form-check__label" for="exampleRadios2">
      Second default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check__input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    <label class="form-check__label" for="exampleRadios3">
      Disabled radio
    </label>
  </div>
</div>


```html
<div class="form-check">
  <input class="form-check__input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check__label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check__input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check__label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check__input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check__label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
```

## Nested form inputs

<div class="custom">
<ul class="form-tree">
  <li>
    <div class="form-check">
      <input class="form-check__input" type="radio" name="exampleRadios_1" id="exampleRadios1_1" value="option1" checked>
      <label class="form-check__label" for="exampleRadios1_1">
        Default radio
      </label>
    </div>
    <ul class="form-tree">
      <li>
        <div class="form-check">
          <input class="form-check__input" type="checkbox" value="" id="defaultCheck1_1" checked>
          <label class="form-check__label" for="defaultCheck1_1">
            Nested checkbox 1
          </label>
        </div>
        <ul class="form-tree">
          <li>
            <div class="form-check">
              <input class="form-check__input" type="radio" name="exampleRadios_2" id="exampleRadios2_1" value="option1" checked>
              <label class="form-check__label" for="exampleRadios2_1">
                Nested radio
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check__input" type="radio" name="exampleRadios_2" id="exampleRadios2_2" value="option1">
              <label class="form-check__label" for="exampleRadios2_2">
                Second nested radio
              </label>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check__input" type="checkbox" value="" id="defaultCheck1_2">
          <label class="form-check__label" for="defaultCheck1_2">
            Nested checkbox 2
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check__input" type="checkbox" value="" id="defaultCheck1_3">
          <label class="form-check__label" for="defaultCheck1_3">
            Nested checkbox 3
          </label>
        </div>
      </li>
    </ul>
  </li>
  <li>
    <div class="form-check">
      <input class="form-check__input" type="radio" name="exampleRadios_1" id="exampleRadios1_2" value="option1">
      <label class="form-check__label" for="exampleRadios1_2">
        Second default radio
      </label>
    </div>
    <ul class="form-tree">
      <li>
        <label for="example_2">First field</label>
        <input type="text" class="form-input" id="example_2" placeholder="First field example">
      </li>
    </ul>
  </li>
</ul>
</div>

```html
<ul class="form-tree">
  <li>
    <div class="form-check">
      <input class="form-check__input" type="radio" name="exampleRadios_1" id="exampleRadios1_1" value="option1" checked>
      <label class="form-check__label" for="exampleRadios1_1">
        Default radio
      </label>
    </div>
    <ul class="form-tree">
      <li>
        <div class="form-check">
          <input class="form-check__input" type="checkbox" value="" id="defaultCheck1_1" checked>
          <label class="form-check__label" for="defaultCheck1_1">
            Nested checkbox 1
          </label>
        </div>
        <ul class="form-tree">
          <li>
            <div class="form-check">
              <input class="form-check__input" type="radio" name="exampleRadios_2" id="exampleRadios2_1" value="option1" checked>
              <label class="form-check__label" for="exampleRadios2_1">
                Nested radio
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check__input" type="radio" name="exampleRadios_2" id="exampleRadios2_2" value="option1">
              <label class="form-check__label" for="exampleRadios2_2">
                Second nested radio
              </label>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check__input" type="checkbox" value="" id="defaultCheck1_2">
          <label class="form-check__label" for="defaultCheck1_2">
            Nested checkbox 2
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check__input" type="checkbox" value="" id="defaultCheck1_3">
          <label class="form-check__label" for="defaultCheck1_3">
            Nested checkbox 3
          </label>
        </div>
      </li>
    </ul>
  </li>
  <li>
    <div class="form-check">
      <input class="form-check__input" type="radio" name="exampleRadios_1" id="exampleRadios1_2" value="option1">
      <label class="form-check__label" for="exampleRadios1_2">
        Second default radio
      </label>
    </div>
    <ul class="form-tree">
      <li>
        <label for="example_2">First field</label>
        <input type="text" class="form-input" id="example_2" placeholder="First field example">
      </li>
    </ul>
  </li>
</ul>
```
