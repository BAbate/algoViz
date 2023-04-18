import { BrowserModule } from '@angular/platform-browser';
import { SideNavComponent } from './../side-nav/side-nav.component';
import { ModuleCardComponent } from './module-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';



@NgModule({
  imports: [
    MatExpansionModule,
    BrowserModule
  ],
  exports:[
    ModuleCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    ModuleCardComponent,
    SideNavComponent,
  ]
})

export class ModuleCard {}

