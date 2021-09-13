import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-time-difference',
  templateUrl: './time-difference.component.html',
  styleUrls: ['./time-difference.component.css']
})
export class TimeDifferenceComponent implements OnInit {

  timeDifference = {
    'year':0,
    'month':0,
    'day':0,
    'hour':0,
    'minute':0,
    'second':0
  };
  seen=false;
  @Input('time') public time = new Date;
  constructor(private cookieService: CookieService){
  }
  ngOnInit(): void {
    if ((this.cookieService.get('seen'))){
      this.seen=true;
      this.timeDifference['year'] = this.time.getFullYear() - Number(this.cookieService.get('year'));
      this.timeDifference['month'] = this.time.getMonth() - Number(this.cookieService.get('month'));
      if(this.timeDifference['month']<0){
        this.timeDifference['month']=12+this.timeDifference['second'];
        this.timeDifference['year']--;
      }
      this.timeDifference['day'] = this.time.getDate() - Number(this.cookieService.get('day'));
      if(this.timeDifference['day']<0){
        this.timeDifference['day']=30+this.timeDifference['second'];
        this.timeDifference['month']--;
      }
      this.timeDifference['hour'] = this.time.getHours() - Number(this.cookieService.get('hour'));
      if(this.timeDifference['hour']<0){
        this.timeDifference['hour']=24+this.timeDifference['second'];
        this.timeDifference['day']--;
      }
      this.timeDifference['minute'] = this.time.getMinutes() - Number(this.cookieService.get('minute'));
      if(this.timeDifference['minute']<0){
        this.timeDifference['minute']=60+this.timeDifference['minute'];
        this.timeDifference['hour']--;
      }
      this.timeDifference['second'] = this.time.getSeconds()-Number(this.cookieService.get('second'));
      if(this.timeDifference['second']<0){
        this.timeDifference['second']=60+this.timeDifference['second'];
        this.timeDifference['minute']--;
      }
    }
    else
      this.cookieService.set('seen','true')

    this.cookieService.set('year', ''+this.time.getFullYear());
    this.cookieService.set('month', ''+this.time.getMonth());
    this.cookieService.set('day', ''+this.time.getDate());
    this.cookieService.set('hour', ''+this.time.getHours());
    this.cookieService.set('minute', ''+this.time.getMinutes());
    this.cookieService.set('second', ''+this.time.getSeconds());
  }
}

// if (this.timeDifference['second']<=0) {
//   this.timeDifference.second=60-this.timeDifference.second;
//   this.timeDifference['minute'] = this.time.getMinutes() - Number(this.cookieService.get('minute'));
//   if (this.timeDifference['minute'] <= 0) {
//     this.timeDifference.minute=60-this.timeDifference.minute;
//     this.timeDifference['hour'] = this.time.getHours() - Number(this.cookieService.get('hour'));
//     if (this.timeDifference['hour'] <= 0) {
//       this.timeDifference.hour=24-this.timeDifference.hour;
//       this.timeDifference['day'] = this.time.getDate() - Number(this.cookieService.get('day'));


//       if (this.timeDifference['day'] <= 0) {
//         this.timeDifference.day=30-this.timeDifference.day;
//         this.timeDifference['month'] = this.time.getMonth() - Number(this.cookieService.get('month'));
//         if (this.timeDifference['month'] <= 0) {
//
//          this.timeDifference['year'] = this.time.getFullYear() - Number(this.cookieService.get('year'));
//          //         this.timeDifference['month'] = this.time.getMonth() - Number(this.cookieService.get('month'));
//           this.timeDifference.month=12-this.timeDifference.month;
//         }
//       }
//     }
//   }
// }
