import { Component } from '@angular/core';
import { CalendarController } from 'ion2-calendar';
/**
 * CalendarComponent
 */
@Component({
    selector: 'ion2-calendar',
    templateUrl: './calendar.html'
})
class CalendarComponent {
    constructor(protected calendarCtrl: CalendarController) {
        
    }
}