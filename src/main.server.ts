import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideServerRendering } from '@angular/ssr';

// const bootstrap = () => bootstrapApplication(App, config);

// export default bootstrap;

export default function (context: BootstrapContext) {
  return bootstrapApplication(App, {
    ...config,
    providers: [
      provideServerRendering(),
      ...(config.providers || []),
    ]
  }, context);
}
