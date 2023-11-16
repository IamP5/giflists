import { Component, inject } from '@angular/core';
import { GifListComponent } from "./ui/gif-list.component";
import { RedditService } from '../shared/data-access/reddit.service';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `<app-gif-list [gifs]="redditService.gifs()" class="grid-container" />`,
    styles: ``,
    imports: [GifListComponent]
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
