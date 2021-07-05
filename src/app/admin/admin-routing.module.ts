import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const routes: Routes = [
  {path:'' , component : AdminComponent ,children:[
    {path:'',redirectTo:'admin-page',pathMatch:'full'},
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'feedbacks', component: FeedbacksComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
