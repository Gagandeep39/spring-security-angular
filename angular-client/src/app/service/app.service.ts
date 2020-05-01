/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-05-01 22:51:34
 * @modify date 2020-05-01 22:51:34
 * @desc [description]
 */
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppService {
  authenticated = false;
  headers;

  constructor(private http: HttpClient) {}

  authenticate(credentials, callback) {
    console.log(credentials);
    // Creating a header to be appendded to the request
    const headers = new HttpHeaders(
      credentials ? {
            authorization:
              "Basic " +
              btoa(credentials.username + ":" + credentials.password),
          }
        : {}
    );
    this.headers = headers;
    console.log(headers);

    // Appending header i nthe request 
    this.http
      .get("http://localhost:8080/resource", { headers: headers })
      .subscribe((response) => {
        console.log(response);
        
        // Fectching key: name from the resposne co taint a user's unique ID
        if (response["name"]) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
        return callback && callback();
      });
  }
}
