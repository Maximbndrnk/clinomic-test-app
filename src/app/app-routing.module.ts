import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridDataViewComponent } from "./components/grid-data-view/grid-data-view.component";

const routes: Routes = [
  {
    path: "",
    component: GridDataViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
