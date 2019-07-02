import { Component } from '@angular/core';
import {DbmovieService} from './services/dbmovie.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = ' Mon Youtube-like';
  onSubmit(form: NgForm){
    var movieInput=  form.value['movie'];
    console.log(movieInput);
    this.dbMovie.getMoviesid(movieInput).subscribe((data) =>{
      if(data.results)
      {
        console.log(data.results[0].id)
        var id= data.results[0].id;
      }
      
    this.dbMovie.getMovie(id).subscribe((data)=>{
        if(data.results)
        {
          var resultVideo= data.results[0].key;
          var urlYoutube= `https://www.youtube.com/embed/${resultVideo}`;

          console.log(urlYoutube);

        }
      });

    }
  ,)}
  

constructor ( private dbMovie : DbmovieService) {
  }
}

