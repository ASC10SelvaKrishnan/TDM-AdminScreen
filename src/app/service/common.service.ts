import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Interface to represent the structure of the table data
interface tableData {
  id:string;
  name: string;
  designation: string;
  access: string;
}

// Interface to represent the structure of the table data for reserved data sets
interface ReservedData {
  title: string;
  createddate: string;
  group: string;
  status: string;
}

// Interface to represent the structure of the table data for unreserve data sets
interface UnreservedData {
  title: string;
  createddate: string;
  group: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  url ='http://localhost:3000/'

  constructor(private http:HttpClient) { }

  // methods for user control

  getAllForUserControl() {
    return this.http.get<tableData[]>('http://localhost:3000/tableData');
  }

  createNewUser(tableData: any) {
    return this.http.post("http://localhost:3000/tableData",tableData);
  }

  delete(id: any) {
    return this.http.delete<tableData>(`http://localhost:3000/tableData/${id}`);
  }

  getDataById(id: any) {
    return this.http.get<tableData>(`http://localhost:3000/tableData/${id}`);
  }

  saveData(tableData: any) {
    if (tableData.id) {
      // update existing data
      return this.http.put<tableData>(`http://localhost:3000/tableData/${tableData.id}`, tableData);
    } else {
      // create new data
      return this.http.post<tableData>(`http://localhost:3000/tableData`, tableData);
    }
  }


  // methods for data reservation

  getAllUnreservedDataSets() {
    return this.http.get<UnreservedData[]>(`http://localhost:3000/unreservedData`);
  }

  getAllReservedDataSets() {
    return this.http.get<ReservedData[]>(`http://localhost:3000/reservedData`);
  }

  deleteReservedData(projectid: any) {
    return this.http.delete<ReservedData>(`http://localhost:3000/reservedData/${projectid}`);
  }

  deleteUnreservedData(projectid: any) {
    return this.http.delete<UnreservedData>(`http://localhost:3000/unreservedData/${projectid}`);
  }

  getReservedDataById(id: string | null) {
    return this.http.get<ReservedData>(`http://localhost:3000/reservedData/${id}`);
  }

  getUnreservedDataById(id: string | null) {
    return this.http.get<UnreservedData>(`http://localhost:3000/unreservedData/${id}`);
  }

  saveReservedData(ReservedData: any) {
    return this.http.put<ReservedData>(`http://localhost:3000/reservedData/${ReservedData.id}`,ReservedData);
  }

  saveUnreservedData(UnreservedData: any) {
    return this.http.put<UnreservedData>(`http://localhost:3000/unreservedData/${UnreservedData.id}`,UnreservedData);
  }

//methods for homescreen

  get(){
    return this.http.get(this.url+'requests')
  }
  post(data:any){
    return this.http.post(this.url+'requests', data)
  }
  getalerts(){
    return this.http.get(this.url+'alerts')
  }
  getStatusData() {
    return this.http.get(this.url+'status')

  
  }

}
