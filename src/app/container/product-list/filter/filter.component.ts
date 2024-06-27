import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
all: number=0;

@Input()
instock: number=0;

@Input()
outofstock: number=0; 

@Output()          // by using this selectedFilterRadioButtonChanged is binded toparent comp 
selectedFilterRadioButtonChanged: EventEmitter<string>= new EventEmitter<string>();  // eventt created
selectedFilterRadioButton: string = 'all';

onSelectedFilterRadioButtonChanged(){                // event raised using method
  // console.log(this.selectedFilterRadioButton);
  this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);  /////// currently selected valued get using this
}

}


