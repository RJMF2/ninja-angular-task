import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FirebaseService} from './app/firebase.service';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// @ts-ignore
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
