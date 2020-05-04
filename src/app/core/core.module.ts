import {NgModule} from "@angular/core";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";

@NgModule ({
    declarations: [
        NavBarComponent,
    ],
    imports: [
      RouterModule
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}