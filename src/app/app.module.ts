import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AComponentTemplateComponent} from './a-component-template/a-component-template.component';
import {BClickComponent} from './b-click/b-click.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CNgIfForStyleClassComponent} from './c-ng-if-for-style-class/c-ng-if-for-style-class.component';
import {PipesComponent} from './d-pipes/pipes.component';
import {DataTransferComponentComponent} from './e-data-transfer-component/data-transfer-component.component';
import {AChildrenComponent} from './e-data-transfer-component/a-children/a-children.component';
import {GetComponentDataComponent} from './f-get-component-data/get-component-data.component';
import {FChildrenComponent} from './f-get-component-data/f-children/f-children.component';
import {FFormComponent} from './f-get-component-data/f-form/f-form.component';
import {GDirectiveComponent} from './g-directive/g-directive.component';
import {BaseDirectiveDirective} from './001_directives/base-directive.directive';
import {ParametersDirectivesDirective} from './001_directives/parameters-directives.directive';
import {BasePipePipe} from './002_pipes/base-pipe.pipe';
import {FilterPipePipe} from './002_pipes/filter-pipe.pipe';
import {HServicesBaseComponent} from "./h-services/01_base/h-services-base/h-services-base.component";
import {ServiceCarComponent} from './h-services/01_base/h-services-base/service-car/service-car.component';
import {ServiceCarAddComponent} from './h-services/01_base/h-services-base/service-car-add/service-car-add.component';
import {DataService} from "./003_services/data.service";
import {LogService} from "./003_services/log.service";
import {IFormsComponent} from './i-forms/i-forms.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AComponentTemplateComponent,
    BClickComponent,
    CNgIfForStyleClassComponent,
    PipesComponent,
    DataTransferComponentComponent,
    AChildrenComponent,
    GetComponentDataComponent,
    FChildrenComponent,
    FFormComponent,
    GDirectiveComponent,
    BaseDirectiveDirective,
    ParametersDirectivesDirective,
    BasePipePipe,
    FilterPipePipe,
    HServicesBaseComponent,
    ServiceCarComponent,
    ServiceCarAddComponent,
    IFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ DataService, LogService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
