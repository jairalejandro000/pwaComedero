import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formProfile: FormGroup={} as FormGroup;
  user?: IUser;
  constructor(private userService: UserService,
    private dialog: MatDialog) {
    this.formBuilder();
   }
  ngOnInit(): void {
    this.profile();
  }

  formBuilder(): void{
    this.formProfile = new FormGroup({
      name: new FormControl(null),
      lastname: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null)
    });
  }

  setData(): void {
    this.formProfile.setValue({
      username: this.user?.username,
      name: this.user?.name,
      lastname: this.user?.lastname,
      email: this.user?.email
    });
  }

  profile(): void {
    this.userService.profile().subscribe({
      next: (v: any) => {
        this.user = v.data,
        this.setData()},
      error: (e) => console.log(e)
    })
  }

  logout(): void {
    this.userService.logout();
  }

  info(){
    const dialogRef = this.dialog.open(InformationDialogComponent);
  }
}
