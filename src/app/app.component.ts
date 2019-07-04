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

  title = ' Mon Youtube-like';
constructor ( private dbMovie : DbmovieService , private sanitizer : DomSanitizer){
}
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
          this.resultVideo= data.results[0].key;
          this.video= `https://www.youtube.com/embed/${this.resultVideo}`; 
          this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.video);
       var urlYoutube = this.trustedUrl
         console.log(urlYoutube)

        }
      });

    }
  ,)}
}




