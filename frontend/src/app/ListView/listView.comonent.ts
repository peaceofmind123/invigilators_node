
import {Component} from "@angular/core";
import {ListTablesService} from "../services/listTables.service";

@Component({
  templateUrl:'./listView.component.html',
  selector:'inv-list'
})
export class ListViewComponent
{
  headings:string[];
  errorMessage:string;
  constructor(private listTablesService:ListTablesService)
  {

  }
  ngOnInit():void {
    this.listTablesService.getList().subscribe(
      headings=>this.headings = headings,
      error => this.errorMessage = <any>error
    )
  }

}
