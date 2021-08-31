import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-flightline.js';
import '../src/auro-flight-segment.js';

describe('auro-flightline', () => {

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-flightline>
      </auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('with canceled status', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
      </auro-flightline>
    `);

    await expect(el.classList.contains("canceled"));
  });

  it('with canceled status do not display a layover', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
        <auro-flight-segment iata="SEA"></auro-flight-segment>
        <auro-flight-segment iata="LAX"></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el.shadowRoot.querySelectorAll('auro-flight-segment').length).to.equal(0);
  });

  it('with canceled status do not display a stopover', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
        <auro-flight-segment iata="SEA" stopover></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el.shadowRoot.querySelectorAll('auro-flight-segment').length).to.equal(0);
  });

  it('with a layover', async () => {
    const el = await fixture(html`
      <auro-flightline>
        <auro-flight-segment iata="SEA"></auro-flight-segment>
        <auro-flight-segment iata="LAX"></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flightline"));

    await expect(el).to.be.true;
  });
});

describe('auro-flight-segment', () => {  
  it('with a layover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" duration="1h 2m"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->SEA<!---->');
    await expect(el.shadowRoot.querySelectorAll('auro-badge').length).to.equal(1);
  });

  it('with a layover no duration', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="2 Stops"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->2 Stops<!---->');
    await expect(el.shadowRoot.querySelectorAll('auro-badge').length).to.equal(0);
  });

  it('with a stopover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" stopover></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->SEA<!---->');
  });
})
