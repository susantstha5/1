import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {HeaderComponent} from '../../shared/components/header/header.component';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import { ContentLayoutComponent } from './content-layout.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ServiceComponent } from 'src/app/modules/service/service.component';


@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [HeaderComponent,FooterComponent],
    declarations: [ContentLayoutComponent,HeaderComponent,FooterComponent,HomeComponent,ServiceComponent],
    providers: [],
})
export class ContentLayoutModule { }
