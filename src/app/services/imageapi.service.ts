import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImageapiService {

  public loader: Boolean = true;

  private category_url: string = "./assets/api/categories.json";
  private img_category_url: string = "./assets/api/image-category.json";
  private contact_details_url = "./assets/api/contact-details.json";
  private img_details_url =  "./assets/api/image-details.json";
  private purchased_details_url = "./assets/api/purchased-details.json";

  constructor(private http: Http) { }

  showLoader() {
    this.loader = true;
  }
  hideLoader() {
    this.loader = false;
  }

  errorHandler(err) {
    return Observable.throw(err || 'Server internal error');
  }

  getCategories(){
    this.showLoader();
    return this.http.get(this.category_url)
      .map(res => res.json(), this.hideLoader() )
      .catch(this.errorHandler);
  }

  getImageCategory(id){
    this.showLoader();
    console.log(id, " ::: Category-Id");
    //return this.http.get(this.img_category_url+id)
    return this.http.get(this.img_category_url)
      .map(res => res.json(), this.hideLoader())
      .catch(this.errorHandler);
  }

  getConatctDetails() {
    return this.http.get(this.contact_details_url)
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  getImageDetails(id){
    this.showLoader();
    console.log(id, " ::: Image-Id");
    //return this.http.get(this.img_details_url+id)
    return this.http.get(this.img_details_url)
      .map(res => res.json(), this.hideLoader())
      .catch(this.errorHandler);
  }
  getPurchaseDetails(obj){
    let result = {
      purchasedImage: obj.imgDetails,
      purchasedTimeStamp: obj.timeStamp
    }
    console.info(result, " Result :::: ");
    this.showLoader();
    return this.http.post(this.purchased_details_url, result)
      .map(res => res.json(), this.hideLoader())
      .catch(this.errorHandler);
  }
}
