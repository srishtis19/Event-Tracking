import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})


export class AnalyticsService {

  constructor() { }
  public eventEmmiter(
    eventName:string
  ){
    gtag('event', eventName)
  }
}
