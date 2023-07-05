import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: firebase.User | null;

  constructor(private authService: AuthService, private router: Router) {
    this.user = null;
  }

  ngOnInit(): void {
    this.authService.userChanged.subscribe((user: firebase.User | null) => {
      this.user = user;
    });
  }

  logOut() {
    this.authService.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
