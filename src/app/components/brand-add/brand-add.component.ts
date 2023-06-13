import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.createBrandForm();
  }

  createBrandForm(){
    this.brandAddForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  brandAdd(){
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.brandAdd(brandModel).subscribe((response) => {
        this.toastrService.success('Ürün Eklendi', 'Başarılı');
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
