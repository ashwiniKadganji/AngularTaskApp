import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logoutbtn',
  templateUrl: './logoutbtn.component.html',
  styleUrls: ['./logoutbtn.component.css']
})
export class LogoutbtnComponent implements OnInit {


  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this._authService.logout();
    }

}
