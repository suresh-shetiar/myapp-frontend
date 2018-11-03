import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchStr = null;
  vehicleObj = {};
  keysArray = [];
  httpResponse = false;
  invalidInput = false;
  constructor(private http:HttpClient)
  {
    console.log('searchStr : ', this.searchStr);
  }
  search() {
    // console.log('search : ', this.searchStr);
    // this.findByStr();
    if(this.searchStr.length === 0)
    {
      this.invalidInput = true;
    } else {
      this.invalidInput = false;
    }
  }

  findByStr()
  {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
    if(this.searchStr.length > 0)
    {
      this.invalidInput = false;
      this.httpResponse = true;
      this.http.get('http://13.127.167.171:3000/api/data?search=' + this.searchStr).subscribe((response) => {
       console.log('response : ', response);
       this.vehicleObj = response;
       this.keysArray = Object.keys(response);
      //  console.log('response : ', this.keysArray);
       this.httpResponse = false;
   }, (error) => {
     this.httpResponse = false;
    //  console.log('error : ', error);
   });
    } else {
      this.invalidInput = true;
    }


  }
}
