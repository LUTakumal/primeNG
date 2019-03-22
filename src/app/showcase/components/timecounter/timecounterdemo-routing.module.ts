import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {TimeCounterDemo} from './timecounterdemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: TimeCounterDemo}
		])
	],
	exports: [
		RouterModule
	]
})
export class TimecounterdemoRoutingModule {}
