import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingViewComponent } from "./landing-view/landing-view.component";

const routes: Routes = [{ path: "", component: LandingViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
