import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  singleSelectionList = [];
  singleSelectionselectedItems = [];
  singleSelectionSettings = {};

  basicExampleList = [];
  basicExampleSelectedItems = [];
  basicExampleSettings = {};

  selectedItems3 = [];
  dropdownSettings3 = {};
  isLoading: boolean = false;
  limitSelectionSelectedItems = [];
  limitSelectionSettings = {};

  disableModeSelectedItems = [];
  disableModeSettings = {};

  placeholderExampleList = [];
  placeholderExampleSelectedItems = [];
  placeholderExampleSettings = {};

  dynamicExampleList = [];

  dynamicExampleSelectedItems = [];
  dynamicExampleSettings = {};
  searchTerm: string = 'select2';
  pageNo: number = 0;

  resetExampleList = [];
  resetExampleSelectedItems = [];
  resetExampleSettings = {};

  groupByExampleList = [];
  groupByExampleSelectedItems = [];
  groupByExampleSettings = {};

  constructor(private _http: Http) {

  }
  ngOnInit() {
    this.getAndMapReposData(this.pageNo, this.searchTerm);
    this.singleSelectionList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" }
    ];

    this.singleSelectionselectedItems = [
      { "id": 2, "itemName": "Singapore" }];
    this.singleSelectionSettings = { singleSelection: true, text: "Select Country" };

    this.basicExampleList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Brazil" }
    ];

    this.basicExampleSelectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];
    this.basicExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };

    this.selectedItems3 = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" }];


    this.dropdownSettings3 = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.limitSelectionSelectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];
    this.limitSelectionSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      limitSelection: 4
    };
    this.disableModeSelectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];
    this.disableModeSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      limitSelection: 2,
      disabled: true
    };

    this.placeholderExampleList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" }
    ];

    this.placeholderExampleSelectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];
    this.placeholderExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      searchPlaceholderText: "Custom Placeholder text"
    };


    this.dynamicExampleSettings = {
      text: "Select Repository Item",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      searchPlaceholderText: "Dynamic search text"
    };
    this.resetExampleList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" }
    ];

    this.resetExampleSelectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];
    this.resetExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class"
    };
    this.groupByExampleList = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" }
    ];

    this.groupByExampleSelectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Germany" },
      { "id": 4, "itemName": "France" }];
    this.groupByExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      groupBy: "category"
    };

    this.groupByExampleSettings = {
      singleSelection: false,
      text: "Select Fields",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 5,
      groupBy: "category"
    };

  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  showModel() {
    console.log(this.singleSelectionselectedItems);
  }
  changeData() {
    this.resetExampleSelectedItems = [];
  }

  public loadMoreData(pageNo: number) {
    console.log(pageNo);
    this.getAndMapReposData(pageNo, this.searchTerm)

  }

  public loadSearchData(searchTerm: string) {
    console.log(searchTerm);
    this.searchTerm = searchTerm;
    this.getAndMapReposData(this.pageNo, this.searchTerm)
  }


  private getRepos(pageNo: number, search: string): Observable<any> {

    var url = `https://api.github.com/search/repositories?page=${pageNo}&q=${search}`
    //this._http.get(url).map((response: Response => response.json());
    return this._http.get(url)
      .map((response: Response) => <any>response.json())
    //.do(data => console.log('All: ' + JSON.stringify(data)));

  }

  public getAndMapReposData(pageNo: number, search: string) {
    this.isLoading = true;
    this.getRepos(pageNo, search).subscribe(x => {
      if (x.items) {
        for (var i = 0; i < x.items.length; i++) {
          this.dynamicExampleList.push({
            id: x.items[i].id,
            itemName: x.items[i].full_name
          })
        }
      }
      this.isLoading = false;
    });

  }
}
