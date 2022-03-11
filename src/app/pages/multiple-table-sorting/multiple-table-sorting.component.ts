import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface PeriodicElement2 {
  name2: string;
  position2: number;
  weight2: number;
  symbol2: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  {position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H'},
  {position2: 2, name2: 'Helium', weight2: 4.0026, symbol2: 'He'},
  {position2: 3, name2: 'Lithium', weight2: 6.941, symbol2: 'Li'},
  {position2: 4, name2: 'Beryllium', weight2: 9.0122, symbol2: 'Be'},
  {position2: 5, name2: 'Boron', weight2: 10.811, symbol2: 'B'},
  {position2: 6, name2: 'Carbon', weight2: 12.0107, symbol2: 'C'},
  {position2: 7, name2: 'Nitrogen', weight2: 14.0067, symbol2: 'N'},
  {position2: 8, name2: 'Oxygen', weight2: 15.9994, symbol2: 'O'},
  {position2: 9, name2: 'Fluorine', weight2: 18.9984, symbol2: 'F'},
  {position2: 10, name2: 'Neon', weight2: 20.1797, symbol2: 'Ne'},
];


@Component({
  selector: 'table-sorting-example',
  styleUrls: ['multiple-table-sorting.component.css'],
  templateUrl: 'multiple-table-sorting.component.html',
})
export class MultipleTableSortingComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  displayedColumns2: string[] = ['position2', 'name2', 'weight2', 'symbol2'];
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);

  constructor() {}

  @ViewChild('datasource', { read: MatSort, static: true }) sort: MatSort = new MatSort;
  @ViewChild('datasource2', { read: MatSort, static: true }) sort2: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource2.sort = this.sort2;
  }
}