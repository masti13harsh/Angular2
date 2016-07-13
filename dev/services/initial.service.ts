import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class InitialService {
  private data:any;
  private url:string = "https://api.github.com/users/mralexgray/repos";

  constructor(private http : Http) {
    this.callApi();
  }

  callApi() {
    if(this.data) {
      return Observable.of(this.data);
    }
    else {
      console.log("made an external api request");
      return this.http.get(this.url)
                 .map(res => res.json())
                 .do(res => this.data = res);
    }
  }

}
