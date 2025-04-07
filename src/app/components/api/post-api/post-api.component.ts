import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  departmentObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: ''
  }

  departmentList: any[] = [];

  http = inject(HttpClient);

  constructor() {
    this.getAllDepartment();
  }

  saveOn() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.departmentObj).subscribe((res: any) => {

      if (res.result) {
        alert('Saved successfully!');
        this.getAllDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(item: any) {
    this.departmentObj = item;
  }

  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.departmentObj).subscribe((res: any) => {

      if (res.result) {
        alert('Updated successfully!');
        this.getAllDepartment();
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: number) {

    const isDelete = confirm("Are you sure want to delete?");
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {

        if (res.result) {
          alert('Deleted successfully!');
          this.getAllDepartment();
        } else {
          alert(res.message);
        }
      });
    }

  }

  getAllDepartment() {
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res: any) => {
      if (res.result) {
        this.departmentList = res.data;
      } else {
        alert(res.message);
      }
    });

  }

}
