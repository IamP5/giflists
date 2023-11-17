import { Component, Input, inject } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from "./gif-player.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { WINDOW } from '../../shared/utils/injection-tokens';

@Component({
    selector: 'app-gif-list',
    standalone: true,
    template: `
    @for (gif of gifs; track gif.permalink){
      <div>
        <app-gif-player
          [src]="gif.src"
          [thumbnail]="gif.thumbnail"
          data-testid="gif-list-item"
        ></app-gif-player>

        <mat-toolbar>
          <span>{{ gif.title }}</span>
        </mat-toolbar>
      </div>
    } @empty {
      <p>Can't find any gifs 🤷</p>
    }
    `,
    styles: `
      div {
        margin: 1rem;
        filter: drop-shadow(0px 0px 6px #0e0c1ba8);
      }
      
      span {
        font-size: 0.6em;
        line-height: 1.2em;
      }

      mat-toolbar {
        white-space: break-spaces;
        background-color: hsv(0, 0%, 20%) !important;
      }
  
      p {
        font-size: 2em;
        width: 100%;
        text-align: center;
        margin-top: 4rem;
      }
    `,
    imports: [GifPlayerComponent, MatToolbarModule, MatIconModule]
})
export class GifListComponent {
  @Input({ required: true }) gifs!: Gif[];

  window = inject(WINDOW);
}
