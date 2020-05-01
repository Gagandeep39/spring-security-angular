import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppService } from './service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Demo";
  greeting = {};
  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router
  ) {
    this.app.authenticate(undefined, undefined);
  }
  ngOnInit(): void {
  }
  logout() {
    this.http
      .post("http://localhost:8080/logout", {})
      .subscribe(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl("/login");
      });
  }
}
