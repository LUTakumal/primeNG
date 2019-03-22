import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewModule} from '../../../components/tabview/tabview';
import {TimeCounterDemo} from './timecounterdemo';
import {TimecounterModule} from '../../../components/timecounter/timecounter';
import {TimecounterdemoRoutingModule} from './timecounterdemo-routing.module';

@NgModule({
	imports: [
		CommonModule,
		TimecounterdemoRoutingModule,
        TabViewModule,
        TimecounterModule
	],
	declarations: [
        TimeCounterDemo
	]
})
export class TimecounterdemoModule {}
