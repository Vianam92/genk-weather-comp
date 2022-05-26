import { html } from 'lit';
import '../genk-weather-comp.js';

export default {
  title: 'GenkWeatherComp',
  component: 'genk-weather-comp',
  argTypes: {
    weather : {control: 'object'},
  },
};

function Template({weather}) {
  return html`
    <genk-weather-comp
      .weather=${weather}
    >
    </genk-weather-comp>
  `;
}

export const Regular = Template.bind({});

export const CustomWeather = Template.bind({});
CustomWeather.args = {
 weather: {}
}