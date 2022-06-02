import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
