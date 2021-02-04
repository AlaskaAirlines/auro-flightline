# auro-flight-segment

auro-flight-segment is a standard for indicating stopovers and layovers.
Stopovers do not have duration information and are indicated differently.
Layovers contain duration information and are indicated with a solid fill.
For more information about the difference between a layover and a stopover,
[please see this article.](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/)

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `duration` | `duration` | `String`  | Displayed in the auro-badge, typically duration (1h 53m) |
| `iata`     | `iata`     | `String`  | Text to display, typically a station code (SEA, PVD, AVP) |
| `stopover` | `stopover` | `Boolean` | Indicates a stopover. Do not provide duration.   |


# auro-flightline

auro-flightline provides a responsive flight timeline experience by placing dots indicating stopovers and layovers on a timeline.

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `default` | fill in with <auro-flight-segment>s of a given leg. |
