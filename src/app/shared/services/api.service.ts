import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {
  communitiesList:any;
  communityData:any = [];
  communityslugs:any=[];
  homes:any;
  homeData:any=[];
  homeIds:any=[];
  events:any;
  eventData:any=[];
  eventIds:any=[];
  constructor(
    private http: Http
  ) {}

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.apiBase}${path}`, { headers: this.setHeaders() })
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiBase}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiBase}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiBase}${path}`,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  getCommunitiesList(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    if(this.communitiesList){
      return Observable.of(this.communitiesList);
    } else{
      return this.http.get(`${environment.apiBase}${path}`, { headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .do((data) => {this.communitiesList = data});
    }
  }

  getCommunitiesDetail(path: string, body: any = {}): Observable<any> {
    if(this.communityslugs.indexOf(body.community.short_name) != -1){
      for(var i=0;i<this.communityData.length;i++){
        if(this.communityData[i][0].community.slug == body.community.short_name){
          return Observable.of(this.communityData[i][0]);
        }
      }
    }else{
      return this.http.post(
        `${environment.apiBase}${path}`,
        JSON.stringify(body),
        { headers: this.setHeaders() }
      )
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .do((data)=>{
        this.communityData.push([data]);
        if(this.communityslugs.indexOf(data.community.slug) == -1){
          this.communityslugs.push(data.community.slug);
        }
      });
    }
  }

  getHomesList(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
   if(this.homes){
      return Observable.of(this.homes);
    } else{
      return this.http.get(`${environment.apiBase}${path}`, { headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .do((data) => {this.homes = data});
    } 
  }

  getHomeDetail(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    let ind = parseInt(path.substring(path.lastIndexOf('/')+1));
    if(this.homeIds.indexOf(ind) != -1){
      for(var i=0;i<this.homeData.length;i++){
        if(this.homeData[i][0].home_for_sale.id == ind){
          return Observable.of(this.homeData[i][0]);
        }
      }
    }else{
      return this.http.get(`${environment.apiBase}${path}`, { headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .do((data)=>{
        this.homeData.push([data]);
        if(this.homeIds.indexOf(data.home_for_sale.id) == -1){
          this.homeIds.push(data.home_for_sale.id);
        }
      });
    }
  }

  getEventsList(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    if(this.events){
      return Observable.of(this.events);
    } else{
      return this.http.get(`${environment.apiBase}${path}`, { headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .do((data) => {this.events = data});
    }
  }

  getEventDetail(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    let ind = parseInt(path.substring(path.lastIndexOf('/')+1));
    if(this.eventIds.indexOf(ind) != -1){
      for(var i=0;i<this.eventData.length;i++){
        if(this.eventData[i][0].id == ind){
          return Observable.of(this.eventData[i][0]);
        }
      }
    }else{
      return this.http.get(`${environment.apiBase}${path}`, { headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .do((data)=>{
        this.eventData.push([data]);
        if(this.eventIds.indexOf(data.id) == -1){
          this.eventIds.push(data.id);
        }
      });
    }
  }
}
