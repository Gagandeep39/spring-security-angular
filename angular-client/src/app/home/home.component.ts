import { Component, OnInit } from "@angular/core";
import { AppService } from "../service/app.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  
  title = "Angular-Security";
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    console.log(app.headers);
    
    // Sends a request to /resource mapping in the server 
    // Will never be exected as it doesnt have any header containing user credentials
    http.get("http://localhost:8080/resource").subscribe((data) => (this.greeting = data));
  }

  // Called from HTML page 
  // Different eleemnt is shown based on boolean value
  authenticated() {
    return this.app.authenticated;
  }

  ngOnInit() {}
}
