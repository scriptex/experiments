import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleTableSortingComponent } from './pages/multiple-table-sorting/multiple-table-sorting.component';

const routes: Routes = [
  {
    path: 'multiple-table-sorting',
    component: MultipleTableSortingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
