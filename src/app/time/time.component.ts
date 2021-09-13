import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('time') public time = new Date;

}
