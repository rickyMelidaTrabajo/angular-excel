import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-excel';

  /*data =
    [
      [
        { name: 'Ricky', lastname: 'Melida', age: 29 },

        { name: 'Anahi', lastname: 'Encina', age: 25 },

        { name: 'Mariela', lastname: 'Ruiz Diaz', age: 29 },

        { name: 'Debora', lastname: 'Melida', year: 29 },

        { name: 'Claudia', lastname: 'Fernandez', year: 29 },
      ],

      [
        { name: 'Ricky', lastname: 'Melida', age: 29 },

        { name: 'Anahi', lastname: 'Encina', age: 25 },

        { name: 'Mariela', lastname: 'Ruiz Diaz', age: 29 },

        { name: 'Debora', lastname: 'Melida', year: 29 },

        { name: 'Claudia', lastname: 'Fernandez', year: 29 },
      ],
    ];*/

  data = [
    ['name', 'lastname', 'age'],
    ['Ricardo', 'Melida', 29],
    ['Anahi', 'Encina', 25],
    ['Debora', 'Melida', 0]
  ]
  constructor(private _http: HttpClient) { }

  OnInit() {
    console.log('sale');

  }

  loadData() {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');

    this._http.get('https://rickandmortyapi.com/api/character/85').toPromise()
      .then((res: any) => {
        console.log(res);

      })
      .catch((err: any) => {
        console.log(err);

      })
  }
}
