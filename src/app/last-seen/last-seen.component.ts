import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-last-seen',
  templateUrl: './last-seen.component.html',
  styleUrls: ['./last-seen.component.css']
})
export class LastSeenComponent implements OnInit {

  lastSeen = {
    'year':"",
    'month':"",
    'day':"",
    'hour':"",
    'minute':"",
    'second':""
  };
  seen=false;
  @Input('time') public time = new Date;
  constructor(private cookieService: CookieService){
  }
  ngOnInit(): void {
    if ((this.cookieService.get('seen'))){
      this.seen=true;
      this.lastSeen['year'] = this.cookieService.get('year');
      this.lastSeen['month'] = this.cookieService.get('month');
      this.lastSeen['day'] = this.cookieService.get('day');
      this.lastSeen['hour'] = this.cookieService.get('hour');
      this.lastSeen['minute'] = this.cookieService.get('minute');
      this.lastSeen['second'] = this.cookieService.get('second');
    }
  }

}
