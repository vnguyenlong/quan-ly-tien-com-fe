import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    NzModalModule,
    ReactiveFormsModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzDropDownModule,
    NzUploadModule,
    NzNotificationModule,
    DragDropModule,
    NzDividerModule,
    NzMenuModule,
  ],
  exports: [
    NzModalModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
    NzUploadModule,
    NzDropDownModule,
    NzButtonModule,
    NzNotificationModule,
    DragDropModule,
    NzDividerModule,
    NzMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ShareModule { }
