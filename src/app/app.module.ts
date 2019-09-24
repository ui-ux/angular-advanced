import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponentTemplateComponent } from './a-component-template/a-component-template.component';
import { BClickComponent } from './b-click/b-click.component';
import { FormsModule } from '@angular/forms';
import { CNgIfForStyleClassComponent } from './c-ng-if-for-style-class/c-ng-if-for-style-class.component';
import { PipesComponent } from './d-pipes/pipes.component';
import { DataTransferComponentComponent } from './e-data-transfer-component/data-transfer-component.component';
import { AChildrenComponent } from './e-data-transfer-component/a-children/a-children.component';
import { GetComponentDataComponent } from './f-get-component-data/get-component-data.component';
import { FChildrenComponent } from './f-get-component-data/f-children/f-children.component';
import { FFormComponent } from './f-get-component-data/f-form/f-form.component';
import { GDirectiveComponent } from './g-directive/g-directive.component';
import { BaseDirectiveDirective } from './001_directives/base-directive.directive';
import { ParametersDirectivesDirective } from './001_directives/parameters-directives.directive';
import { BasePipePipe } from './002_pipes/base-pipe.pipe';

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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
