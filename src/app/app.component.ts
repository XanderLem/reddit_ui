import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit_ui';
  test: string = "hi";
  data: any = []
  num : number = 1;
 constructor(private http: HttpClient) {
   
 }

 getData() {
  //const url = 'https://wsb-ticker-api.apps.okd4.postave.us/hot/?subreddit=wallstreetbets&hot=100' 
  //const url ='https://flask-service.bg7bq3bnlj1de.us-east-1.cs.amazonlightsail.com/subreddit-hour/?subreddit=stocks&hours=24'
   const url = 'http://wsb-ticker-api-reddit-ticker-api.apps.okd4.csh.rit.edu/'
   //const url = 'https://reqres.in/api/users/' + this.num;
   this.test = this.num.toString();
   this.data = [];
   return this.http.get(url).subscribe((res)=>{
     this.data.push(res);
     console.log(this.data.content)
   })
 }


 getuser_list() {
  //const url = 'https://wsb-ticker-api.apps.okd4.postave.us/hot/?subreddit=wallstreetbets&hot=100' 
  //const url ='https://flask-service.bg7bq3bnlj1de.us-east-1.cs.amazonlightsail.com/subreddit-hour/?subreddit=stocks&hours=24'
   const url = 'https://reqres.in/api/users?page=' + this.num;
   this.test = this.num.toString();
   this.data = [];
   return this.http.get(url).subscribe((res)=>{
     this.data.push(res);
     console.log(this.data.content)
   })
 }

 sayHi(){
   this.test = "hi";
 }
  
}
