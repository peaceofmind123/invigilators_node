import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn:'root' // provided in the root service injector
})
export class ListTablesService
{
  private listTablesUrl="localhost:8000/api/getListTables";
  constructor(private http:HttpClient){

  }
  getList():Observable<string[]> {
    return this.http.get<string[]>(this.listTablesUrl);
  }
}
