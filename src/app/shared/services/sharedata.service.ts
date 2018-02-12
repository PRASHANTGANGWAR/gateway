import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private caseNumber = new Subject<any>();

  caseNumber$ = this.caseNumber.asObservable(); 

  publishData(data: any){
    this.caseNumber.next(data);
  }
}
