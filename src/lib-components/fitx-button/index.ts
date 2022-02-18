import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';
import FitxButton from './src/fitx-button.vue';

/* istanbul ignore next */
FitxButton.install = (app: App): void => {
  app.component(FitxButton.name, FitxButton);
};

export default FitxButton as SFCWithInstall<App, typeof FitxButton>;
