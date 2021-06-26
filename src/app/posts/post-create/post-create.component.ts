import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredValue = '';
  enteredValue1 = '';
  enteredValue2 = '';

  title = ' ';
  author = ' ';
  blogInput = ' ';


  onAddPost(){
  this.title = this.enteredValue;
   this.author = this.enteredValue1;
   this.blogInput = this.enteredValue2;

  }
}
