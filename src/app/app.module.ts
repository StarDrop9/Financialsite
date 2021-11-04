import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrianglespointerComponent } from './components/trianglespointer/trianglespointer.component';
import { SvgComponent } from './components/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    TrianglespointerComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
