import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "https://localhost:44383/api/carimages/"

  constructor(private HttpClient : HttpClient) { }

  getImagesByCarId(carId:number) : Observable<ListResponseModel<Image>>{
    let newPath = this.apiUrl + "getimagesbycarid?carId=" + carId
    return this.HttpClient.get<ListResponseModel<Image>>(newPath)
  }

  getAllImages() : Observable<ListResponseModel<Image>>{
    let newPath = this.apiUrl + "getall"
    return this.HttpClient.get<ListResponseModel<Image>>(newPath)
  }
}
