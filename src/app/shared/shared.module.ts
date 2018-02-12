import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { FacilityBlockComponent,EventBlockComponent } from './community-helpers';
import { ListErrorsComponent } from './list-errors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    FacilityBlockComponent,
    EventBlockComponent,
    ListErrorsComponent,
  ],
  exports: [
    FacilityBlockComponent,
    EventBlockComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    RouterModule,
  ]
})
export class SharedModule {}
