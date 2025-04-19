import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routes";


@NgModule({
    imports: [
        HomeComponent,
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        RouterModule.forChild(homeRoutes)
    ]
})
export class HomeModule {}