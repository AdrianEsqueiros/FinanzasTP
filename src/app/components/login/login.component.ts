import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

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

  constructor(private authService: AuthService, private router: Router) {

  }


  Ingresar(){
    console.log(this.usuario)
    const{email,password}=this.usuario
    this.authService.login(email,password).then(res=>{
      console.log("se registro: ",res);
      this.router.navigate(['/home'])
    })
  }

  IngresarConGoogle(){
    const{email,password}=this.usuario
    this.authService.loginWithGoogle(email,password).then(res=>{
      console.log("se registro: ",res);
      this.router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
  }

}
