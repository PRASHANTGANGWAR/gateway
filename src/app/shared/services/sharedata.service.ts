import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private caseNumber = new Subject<any>();
  private pageInfo = new Subject<any>();

  caseNumber$ = this.caseNumber.asObservable(); 
  pageInfo$ = this.pageInfo.asObservable(); 

  publishData(data: any){
    this.caseNumber.next(data);
  }

  publishPage(data: any){
    this.pageInfo.next(data);
  }
}
