import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email:'',
    password:''
  }

  constructor(private authService: AuthService) {

  }


  Ingresar(){
    console.log(this.usuario)
    const{email,password}=this.usuario
    this.authService.login(email,password).then(res=>{
      console.log("se registro: ",res);
    })
  }

  IngresarConGoogle(){
    const{email,password}=this.usuario
    this.authService.loginWithGoogle(email,password).then(res=>{
      console.log("se registro: ",res);
    })
  }

  ngOnInit(): void {
  }

}
