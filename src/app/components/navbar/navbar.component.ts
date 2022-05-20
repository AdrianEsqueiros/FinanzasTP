import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login'])
  }
}
