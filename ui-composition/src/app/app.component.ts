import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-composition';

  onLoginSuccess(data: any) {
    console.log("onLoginSuccess", data);
  }

  onLoginFail(data: any) {
    console.log("onLoginFail", data);
  }
}
