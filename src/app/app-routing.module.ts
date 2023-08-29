import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'preview', component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
