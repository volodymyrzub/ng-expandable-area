import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableAreaComponent } from './expandable-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpandableAreaComponent],
  exports: [ExpandableAreaComponent]
})
export class ExpandableAreaModule { }
