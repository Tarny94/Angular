import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-employee-page',
  templateUrl: './header-employee-page.component.html',
  styleUrls: ['./header-employee-page.component.scss']
})
export class HeaderEmployeePageComponent {

  filterName: string = "";

  @Output() filterByName : EventEmitter<string> = new EventEmitter<string>();

  onSelected() {
    this.filterByName.emit(this.filterName)
  }
}
