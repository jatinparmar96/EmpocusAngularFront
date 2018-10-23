import { NgModule } from '@angular/core';
 import { CommonModule } from "@angular/common";
 import { RouterModule } from "@angular/router";

 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';



@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        NgbModule,
        SpeedDialFabComponent,
    ],
    imports:[
        RouterModule,
        CommonModule,
        NgbModule,
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        SpeedDialFabComponent,
        ]
})
export class SharedModule { }
