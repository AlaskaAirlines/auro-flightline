import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-flightline.js';
import '../src/auro-flight-segment.js';

describe('auro-flightline', () => {

  it('auro-flightline is accessible', async () => {
    const el = await fixture(html`
      <auro-flightline>
      </auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flightline with a layover', async () => {
    const el = await fixture(html`
      <auro-flightline>
        <auro-flight-segment iata="SEA"></auro-flight-segment>
        <auro-flight-segment iata="LAX"></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-segment with a layover', async () => {
    debugger;
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" duration="1h 2m"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->SEA<!---->');
    await expect(el.shadowRoot.querySelectorAll('auro-badge').length).to.equal(1);
  });

  it('auro-flight-segment with a layover no duration', async () => {
    debugger;
    const el = await fixture(html`
      <auro-flight-segment iata="2 Stops"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->2 Stops<!---->');
    await expect(el.shadowRoot.querySelectorAll('auro-badge').length).to.equal(0);
  });

  it('auro-flight-segment with a stopover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" stopover></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->SEA<!---->');
  });

  it('auro-flightline custom element is defined', async () => {
    const el = await !!customElements.get("auro-flightline");

    await expect(el).to.be.true;
  });
});
