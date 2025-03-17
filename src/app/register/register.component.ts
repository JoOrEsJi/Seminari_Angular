import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor() {}

  onSubmit() {
    console.log('Usuario registrado:', this.user);
    // Aquí puedes agregar la lógica para enviar los datos a una API
  }
}