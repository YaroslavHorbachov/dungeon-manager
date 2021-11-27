import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Action, StoreModule } from '@ngrx/store';
import { RECOMPUTE, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxStoreIdbModule } from 'ngrx-store-idb';
import { environment } from '../environments/environment';

const blacklistActions = [RECOMPUTE] as string[];

function syncCondition(_: unknown, action: Action) {
  const isBlacklistedAction = blacklistActions.includes(action.type);

  return !isBlacklistedAction;
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    NgrxStoreIdbModule.forRoot({
      debugInfo: false,
      concurrency: { allowed: true, failInitialisationIfNoLock: false },
      syncCondition,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
})
export class AppStoreModule {}
