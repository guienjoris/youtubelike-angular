import { Component, Input } from '@angular/core';
import {DbmovieService} from './services/dbmovie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = ' Mon Youtube-like';
  @Input() movie : String;
  onSubmit(event: any ){
    const movieInput= event.target.movie.value ;
    console.log(movieInput);
  }

constructor ( private dbMovie : DbmovieService) {
  this.dbMovie.getMoviesid().subscribe((data)=> {
    console.log(data);
  })
}


ngOnInit() {
    
    
  }
  

}
