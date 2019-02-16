import { AppEffects } from './store/app.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, META_REDUCERS } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { environment } from 'src/environments/environment';
import { logMetaReducer } from './store/log.metareducer';
import { userPrefernceMetaReducer } from './store/user-preferences.metareducer';
import { UserPreferencesService } from './user-preferences.service';

export function getMetaRedcuers(userPreferencesService: UserPreferencesService,
  keys: string[]) {
  return [userPrefernceMetaReducer(userPreferencesService, keys)];
}

export const UserPreferencesKeys = new InjectionToken<string[]>('User preferencses keys');


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CartComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers: [logMetaReducer] }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [
    {
      provide: META_REDUCERS,
      useFactory: getMetaRedcuers,
      deps: [UserPreferencesService, UserPreferencesKeys],
    },
    {
      provide: UserPreferencesKeys,
      useValue: ['app.shoppingCart']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
