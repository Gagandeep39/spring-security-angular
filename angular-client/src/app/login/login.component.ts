/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-05-01 22:51:49
 * @modify date 2020-05-01 22:51:49
 * @desc [description]
 */
import { Component, OnInit } from "@angular/core";
import { AppService } from "../service/app.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};

  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router
  ) {
    // this.credentials = new Credential();
  }

  // Redirects o home screen on successfull login
  login() {
    this.app.authenticate(this.credentials, () => {
      console.log(this.credentials);
      this.router.navigateByUrl("/");
    });
    return false;
  }

  ngOnInit() {}
}
