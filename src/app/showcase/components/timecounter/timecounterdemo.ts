import {Component, OnDestroy, OnInit} from '@angular/core';
import {TerminalService} from '../../../components/terminal/terminalservice';
import {Subscription}   from 'rxjs';

@Component({
    templateUrl: './timecounterdemo.html',
})
export class TimeCounterDemo implements OnInit {
    
    endDate:string;
    ngOnInit(): void {
        let endingDate = new Date();
        endingDate.setDate(endingDate.getDate() + 7);
        this.endDate = endingDate.toDateString();
    }
}
