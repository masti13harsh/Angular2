import {Component} from 'angular2/core';
import {InitialService} from './services/initial.service';

@Component({
    selector: 'my-app',
    template: `
      <button (click)="onButtonClick()">Click Me</button>
      <ul>
        <li *ngFor="#item of result">{{item.id}}</li>
      </ul>
    `,
    directives: []
})

export class AppComponent {
  private result:any;
  constructor(private service: InitialService) {
    console.log("constructor initialized");
  }

  onButtonClick() {
    this.service.callApi()
        .subscribe(
          res => {
            this.result = res;
            console.log(res);
          },
          null,
          () => console.log("Call complete")
        )
  }
}
