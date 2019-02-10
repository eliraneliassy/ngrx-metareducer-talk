import { FeedService } from './../feed.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromApp from '../store';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private feedService: FeedService) { }

  @Effect()
  fetchFeed$ = this.actions$.pipe(
    ofType(fromApp.AppActionTypes.FETCH_FEED),
    switchMap(() =>
      this.feedService.getFeed(0)
        .pipe(
          map((items: Item[]) => new fromApp.FetchFeedSuccess(items))
        )
    )
  );
}

