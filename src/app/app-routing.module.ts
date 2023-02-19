import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { SumViewerComponent } from './sum-viewer/sum-viewer.component';

const routes: Routes = [
  { path: '', component: BasicComponentComponent },
  { path: 'sum-viewer', component: SumViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
