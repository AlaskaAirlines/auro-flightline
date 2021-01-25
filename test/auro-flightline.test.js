import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-flightline.js';

describe('auro-flightline', () => {
  it('sets the CSS class on auro-flightline > div element', async () => {
    const el = await fixture(html`
      <auro-flightline cssclass="testClass"></auro-flightline>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-flightline is accessible', async () => {
    const el = await fixture(html`
      <auro-flightline cssclass="testClass"></auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flightline custom element is defined', async () => {
    const el = await !!customElements.get("auro-flightline");

    await expect(el).to.be.true;
  });
});
