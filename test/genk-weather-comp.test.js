import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../genk-weather-comp.js';

describe('GenkWeatherComp', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html`<genk-weather-comp></genk-weather-comp>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
