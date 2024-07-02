import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = "";                     // search text ka data isme ayega

  /// creat an event
  @Output()
  searchTextChanged: EventEmitter<string>=new EventEmitter<string>();    

  @ViewChild('searchInput') searchInputEl:ElementRef;

  onSearchTextChanged(){                      // raising event
    // this.searchTextChanged.emit(this.searchText);           //  value stored in search text will be emitted
  }

  updateSearchText(){
    // this.searchText=event.target.value;
    //console.log(inputEL.value);                   // on button click we have value whatuser typed

    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

  

}
