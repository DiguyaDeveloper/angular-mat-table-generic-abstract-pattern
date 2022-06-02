import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CellComponent } from "./cell.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [CellComponent],
  imports: [CommonModule, MatTableModule],
  exports: [CellComponent],
})
export class CellModule {}
