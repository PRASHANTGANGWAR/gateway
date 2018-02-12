import { Component, Input } from '@angular/core';

@Component({
  selector: 'facility-block',
  templateUrl: './facility-block.component.html'
})
export class FacilityBlockComponent { 
	 Name : String = "";

	 @Input()
  set config(config) {
      if (config) {
       this.Name = config
    }
  }
}