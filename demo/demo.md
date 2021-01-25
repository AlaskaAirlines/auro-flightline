# auro-flightline

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.

## auro-flightline use cases

The `auro-flightline` element should be used in situations where users may:

* egestas bibendum mauris cursus
* quis euismod felis mollis
* consectetur ipsum risus sed tortor

> Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum libero ipsum, ac tempor sapien blandit in. Nam tincidunt non felis molestie varius.

|convallis|tristique|nisl dignissim|eleifend|
|---|---|---|---|
|√|√|||
|||√|√|


<h2>Nonstop</h2>
<div class="exampleWrapper">    
  <auro-flightline>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
  </auro-flightline>
  ```
</auro-accordion>

<h2>1 Connection</h2>

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment layover iata="SEA" duration="0h 40m"/>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment layover iata="SEA" duration="0h 40m"/>
  </auro-flightline>
  ```
</auro-accordion>

<h2>1 Stopover</h2>

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
  </auro-flightline>
  ```
</auro-accordion>

<h2>2 Stopovers</h2>

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
    <auro-flight-segment stopover iata="WRG"/>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
    <auro-flight-segment stopover iata="WRG"/>
  </auro-flightline>
  ```
</auro-accordion>

<h2>Stopover + Layover</h2>

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
    <auro-flight-segment layover iata="SEA" duration="0h 40m"/>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
    <auro-flight-segment layover iata="SEA" duration="0h 40m"/>
  </auro-flightline>
  ```
</auro-accordion>

<h2>Stopover Layover International Flight</h2>

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
    <auro-flight-segment stopover iata="WRG"/>
    <auro-flight-segment layover iata="SEA" duration="0h 40m"/>
    <auro-flight-segment layover iata="BOS" duration="1h 40m"/>
    <auro-flight-segment layover iata="DUB" duration="13h 40m"/>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"/>
    <auro-flight-segment stopover iata="WRG"/>
    <auro-flight-segment layover iata="SEA" duration="0h 40m"/>
    <auro-flight-segment layover iata="BOS" duration="1h 40m"/>
    <auro-flight-segment layover iata="DUB" duration="13h 40m"/>
  </auro-flightline>
  ```
</auro-accordion>

## Then there is more

Aenean at blandit lorem. Fusce imperdiet mi nec gravida maximus. Quisque nisl libero, condimentum in nisi a, imperdiet lacinia arcu.

```javascript
toggleDialog = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = 'hidden';
  dialog.removeAttribute("open");
  dialog.setAttribute("open", true);
}

toggleDialogClose = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = '';
  dialog.removeAttribute("open");
}
```
