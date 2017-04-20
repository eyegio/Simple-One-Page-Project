import { Component, OnInit } from '@angular/core';
import { User }    from './user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  newUser: User = new User('');
  submitted = false;

  onSubmit(){
    console.log(this.newUser);
  }

  constructor( ) { }

  ngOnInit() {

  }

}
