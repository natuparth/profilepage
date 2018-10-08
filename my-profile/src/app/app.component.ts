import { Component, OnInit } from '@angular/core';
import {Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-profile';
  constructor(private router: Router) {}
  ngOnInit() {
  this.router.navigate(['index/home']);
  }
}
