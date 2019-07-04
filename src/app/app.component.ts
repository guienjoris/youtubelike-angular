import { Component } from '@angular/core';
import {DbmovieService} from './services/dbmovie.service';
import { NgForm } from '@angular/forms';
import {DomSanitizer , SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  trustedUrl: SafeUrl
  video : string
  resultVideo : string
  results: any[]; 

  title = ' Mon Youtube-like';
constructor ( private dbMovie : DbmovieService , private sanitizer : DomSanitizer){
  this.video = ''
}
  onSubmit(form: NgForm){
    var movieInput=  form.value['movie'];
    console.log(movieInput);


    this.dbMovie.getMoviesid(movieInput).subscribe((data) =>{
      this.results = data['results'];
      if(this.results[0])
      {
        console.log(this.results)
        var id= this.results[0].id;
      }
    
    this.dbMovie.getMovie(id).subscribe((data)=>{
      this.results = data['results'];

        if(this.results[0])
        {
          console.log(this.results);
          this.resultVideo= this.results[0].key;
          this.video= `https://www.youtube.com/embed/${this.resultVideo}`; 
          

        }
      });
      
    }
  ,)
}
}




