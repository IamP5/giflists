import { Component, inject } from '@angular/core';
import { GifListComponent } from "./ui/gif-list.component";
import { RedditService } from '../shared/data-access/reddit.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
      <app-gif-list 
        [gifs]="redditService.gifs()"
        infiniteScroll
        (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
        class="grid-container" 
      />`,
    styles: ``,
    imports: [GifListComponent, InfiniteScrollModule]
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
