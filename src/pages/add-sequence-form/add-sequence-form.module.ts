import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSequenceFormPage } from './add-sequence-form';

@NgModule({
  declarations: [
    AddSequenceFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSequenceFormPage),
  ],
})
export class AddSequenceFormPageModule {}
