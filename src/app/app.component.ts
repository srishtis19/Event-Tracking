import { Component } from '@angular/core';
import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event-Tracking';
  constructor(public analytics:AnalyticsService){}
  onClick(){
    this.analytics.eventEmmiter("button_click");

  }
}
