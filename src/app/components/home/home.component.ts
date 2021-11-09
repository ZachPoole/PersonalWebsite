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
    console.log("button clicked");
    gtag("event", "user_login", {
      eventCategory: "General Site Data",
      eventLabel: "Successful User Login",
      value: 1,
    });
    gtag("event", "test_event_1234", {
      eventCategory: "General Site Data",
      eventLabel: "Successful User Login",
      value: 1,
    });
  }
}
