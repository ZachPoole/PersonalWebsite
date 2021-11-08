import { Component, OnInit } from "@angular/core";
declare let gtag: Function;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  sendAnalyticsEvent(): void {
    //prettier-ignore
    gtag('event', 'user_login', {
      'event_category': 'General Site Data',
      'event_label': 'Successful User Login',
      'value': 1,
    });
  }
}
