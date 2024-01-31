# Flightline

auro-flightline represents any layovers and/or stopovers a guest may encounter throughout their journey.

For mobile, the number of stops is automatically calculated by the number of layovers and/or stopovers added in the DOM via the `auro-flight-segment` element.

## Component use cases

Use the auro-flightline element to:
* Flying from SEA (Seattle, WA) to AVP (Scranton, PA) will require a *layover* in ORD (Chicago, IL)
* Flying from [ANC (Anchorage, AK) to ADK (Adak Island, AK) will have a *stopover* in CDB (Cold Bay, AK)](https://onemileatatime.com/alaska-airlines-adak-cold-bay/). These passengers will not deplane in Cold Bay.
Stopover duration cannot be predicted due to variants in passenger and cargo loads.

## Nonstop

The following illustrates a flight with no layovers or stopovers, for example, SEA to EWR.

<div class="exampleWrapper">
  <auro-flightline></auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline></auro-flightline>
  ```
</auro-accordion>

## Canceled

The following illustrates a canceled flight with no layovers or stopovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <auro-flightline canceled></auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline canceled></auro-flightline>
  ```
</auro-accordion>

If the canceled flightline has segments, they will all be shown as canceled. To cancel individual segments, see examples below.

<div class="exampleWrapper">
  <auro-flightline canceled>
     <auro-flight-segment iata="EWR" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline canceled>
     <auro-flight-segment iata="EWR" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with a single layover

The following illustrates flight with one layover, for example, SEA to AVP.

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

The following illustrates flight with one layover, that occurs on the following calendar day.

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Canceled with single layover

The following illustrates a canceled flight with layovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <auro-flightline>
     <auro-flight-segment canceled iata="EWR" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
     <auro-flight-segment canceled iata="EWR" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with a single stopover

The following illustrates a flight with one stopover, for example, ANC to ADK.


<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with a stopover and a layover

The following illustrates flight with a stopover and a layover, for example, ADK to SEA.

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with layovers and stopovers

The following illustrates an international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
    <auro-flight-segment iata="ANC" duration="1h 30m"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="SFO" duration="1h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Canceled with layovers and stopovers

The following illustrates a cancellation of international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment canceled destinationCanceled iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment canceled destinationCanceled iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Container query

The `auro-flightline` element is reactive to its parent container's `width` value versus a `@media` query based on the device `width`. This allows for greater control over the shape of the element when in constrained spaces.

The default container query is a min-width of `320px`, or `var(--ds-grid-breakpoint-xs)`.

The first example illustrates a `auro-flightline` element with a container width of `300px`. The next `auro-flightline` element is within a container set at `100%` for context. Notice when the container reaches a width of < `320px`, the container query switches the UI.

<style>
  .flightline-width {
    width: 100%;
  }

  @media (min-width: 576px) {
    .flightline-width {
      width: 300px;
    }
  }
</style>

<div class="exampleWrapper">
  <auro-flightline class="flightline-width">
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<div class="exampleWrapper">
  <auro-flightline style="width: 60%">
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline style="width: 300px">
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>

  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>

  <auro-flightline style="width: 75%">
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>
