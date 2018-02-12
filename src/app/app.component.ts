import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
  	private Meta:Meta,
	private title: Title
  ) {}
  communities: Array<string> = [];
  ngOnInit() {
  	this.title.setTitle('Gateway Lifestyle | Over 50s Residential Communities');
    this.Meta.updateTag({ name: 'description', content: 'Gateway' });
  }
}
