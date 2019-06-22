import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @Input() movie: String;
  title = 'youtube-like';
  onSubmit(event: any) {
    const movieInput= event.target.movie.value;
    return console.log( movieInput);
 }
}
