import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName = 'Ecoglobe building optimizer';
  loginClicked = false;
  isProjectPage = false;
  projectName: string;

  constructor(private headersService: HeaderService) {
  }

  ngOnInit() {
    this.headersService.onProjectPage.subscribe(
      (name: string) => {
        debugger;
        if (name) {
          this.isProjectPage = true;
          this.projectName = name;
        } else {
          this.projectName = '';
          this.isProjectPage = false;
        }
      }
    );
  }

  onLogin() {
    this.loginClicked = true;
    console.log(this.loginClicked);
  }
}
