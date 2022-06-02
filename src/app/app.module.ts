import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CeccoffMockApiModule } from './core/mocks/mock-api/mock-api.module';
import { mockApiServices } from './core/mocks';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExampleTableOnlineComponent } from './modules/example-table-online/example-table-online.component';
import { ExampleTableOfflineComponent } from './modules/example-table-offline/example-table-offline.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleTableOnlineComponent,
    ExampleTableOfflineComponent,
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CeccoffMockApiModule.forRoot(mockApiServices),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
