import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ImageapiService } from '../../services/imageapi.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  imageDetails: Array<any> = [];
  errorMessage: any;
  submitted: Boolean = false;
  selectedImage: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imageApiService: ImageapiService
  ) { }

  ngOnInit() {
    this.getImageDetails();
  }
  getImageDetails() {
    return this.route.params.subscribe(params => {
      var id = params['id'];
      if (!id) return;
      this.imageApiService.getImageDetails(id)
        .subscribe(
          resp => this.imageDetails = resp.data,
          response => {
            if (response.status == 404) {
              this.errorMessage = response || 'Internal Server Error';
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  getSelectedPurchase(image) {
    this.selectedImage = image;
  }

  purchase(form) {
    this.submitted = true;
    if(form.valid) {
        let purchasedDetails = {
          imgDetails : this.selectedImage,
          timeStamp : Date.now()
        }
        this.imageApiService.getPurchaseDetails(purchasedDetails)
        .subscribe(
          resp => alert("Your order has purchased successfully"),
          err => alert("Your order has failure")
        )
      }
  }
  
}
