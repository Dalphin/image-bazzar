import { Component, OnInit } from '@angular/core';;
import { Router, ActivatedRoute } from '@angular/router';

import { ImageapiService } from '../../services/imageapi.service';

@Component({
  selector: 'app-image-category',
  templateUrl: './image-category.component.html',
  styleUrls: ['./image-category.component.css']
})
export class ImageCategoryComponent implements OnInit {
  imageCategory: Array<any> = [];
  errorMessage:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imageApiService: ImageapiService
  ) { }

  ngOnInit() {
      this.getImageCategory();
  }

  getImageCategory() {
    return this.route.params.subscribe(params => {
      var id = params['id'];
      if (!id) return;
      this.imageApiService.getImageCategory(id)
        .subscribe(
          resp => this.imageCategory = resp.data,
          response => {
            if (response.status == 404) {
              this.errorMessage = response || 'Internal Server Error';
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  getContactDetails() {
    return this.imageApiService.getConatctDetails()
    .subscribe(
      (res) => {
        let obj = res.data[0];
        alert(
          obj.company + '\n'+
          obj.address + '\n'+
          obj.city + '\n'+
          obj.landMark + '\n'
         );
      },
      (err) => this.errorMessage = err
    )
  }

}
