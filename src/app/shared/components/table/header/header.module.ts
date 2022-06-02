import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatSortModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
