import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-block',
  templateUrl: './event-block.component.html'
})


export class EventBlockComponent { 
    comunitylatestDetail : Object = {};

	 @Input()
  set config(config) {
      if (config) {
       this.comunitylatestDetail = config
    }
  }
	
}