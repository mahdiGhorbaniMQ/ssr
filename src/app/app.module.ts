import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { LastSeenComponent } from './last-seen/last-seen.component';
import { TimeDifferenceComponent } from './time-difference/time-difference.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    LastSeenComponent,
    TimeDifferenceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
