# Airline information, DoT compliance

Below are example markets searchable in ITA and Sabre for availability.

[Change of Gauge flights](https://www.travelweekly.com/Mark-Pestronk/Agents-must-identify-change-of-gauge-services)  are flights with the same flight number, but with an equipment swap at an intermediate stop.

<auro-alerts information>Change of Gauge flights are a pain point for guests with physical disabilities who may not expect to need to depart the aircraft. Even with the physical change of planes, these flights are still considered Direct. Qantas runs a COG JFK-SYD.</auro-alerts>

## Nonstop (SEAEWR)

<div class="exampleWrapper">
  <auro-flightline></auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline></auro-flightline>
  ```

  Sabre output for this flight

  ```
      10FEB  WED   SEA/PST     EWR/EST¥3
    1      8 F7 D7 P7 I7 U5*SEAEWR 066  730A  355P 73J S 0 /E
            A2 Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
  ```

</auro-accordion>

## Flight with a Change of Gauge

Ask a TPO to load a CERT flight for you

<div class="exampleWrapper">
  <auro-flightline>
    <auro-flight-segment iata="LAX"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment iata="LAX"></auro-flight-segment>
  </auro-flightline>
  ```

</auro-accordion>

## Flight with a single layover (SEAAVP)

The following illustrates a flight with one layover, for example, SEA to AVP.

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

Sabre output for this flight

```
   10FEB  WED   SEA/PST     AVP/EST¥3
  1     34 F7 D7 P7 A0 Y7 Z7*SEAORD 080  810A  208P 73J S 0 /E
           S7 B7 M7 H7 Q7 L7 V7 K7 G7
  2  *4121 Y7 S7 B7 M7 H7 Q7    AVP   N  455P  752P ERJ 0 XJS /E
           L7 V7 K7 G7 T7 R7
  OPERATED BY /ENVOY AIR AS AMERICAN EAGLE
```

</auro-accordion>

## Flight with a single stopover (ANCADK)

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

  Sabre output for this flight

```
   14FEB  SUN   ANC/Z-9     ADK/HST-1
  1   184 F7 D7 P7 I7 U4 A2*ANCADK 000 -1 1000A 1255P 73G 1 WJ /E
          Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
  2   184 F7 D7 P7 I7 U6 A3*ANCADK 000  3¥1000A 1255P 73G 1 WJ /E
          Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
```

</auro-accordion>

## Flight with a stopover and a layover (ADKSEA)

The following illustrates a flight with a stopover and a layover, for example, ADK to SEA.


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

  Sabre output for this flight

```
     10FEB  WED   ADK/HST     SEA/PST¥2
  1   187 F7 D7 P7 I7 U4 A3*ADKANC 016    205P  725P 73H 1 WJ /E
          Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
  2   114 F1 D1 P0 I0 U0 A0*   SEA 100 1¥ 225A  650A 73G 0 /E
          Y7 Z7 S7 B7 M7 H6 Q6 L5 V4
```

</auro-accordion>

## Flight with layovers and stopovers (ADKBCN)

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
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  ```

  Sabre output for this flight

```
     14FEB  SUN   ADK/HST     BCN/¥11
  1    187 F6 D6 P6 I6*ADKANC 016  - 155P  715P   73G 1 WJ /E
           U0 A2 Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
  2     82 F6 D6 P5 I2*   SEA 085 1¥ 600A 1025A   73J S 0 /E
           U0 A0 Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
  3  *2352 F3 D3 P2 I0*   SFO 066    355P  603P   E75 S 0 /E
           U0 A0 Y7 Z7 S7 B7 M7 H7 Q7 L7 V7
  OPERATED BY /HORIZON AIR AS ALASKAHORIZON
  4LV*2622 W4 E4 T4 Y4*   BCN        800P  430P¥1 332 DS/G 0 QS
           B4 H4 K4 M4 L4 F4 V4 S4 Z4 N4 Q4
  OPERATED BY IBERIA FOR LEVEL SPAIN
```

</auro-accordion>
