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
      console.log(data);
    });
  }

constructor ( private dbMovie : DbmovieService) {
  console.log('one');
}


ngOnInit() {
    
  console.log('two');

  }
  

}
