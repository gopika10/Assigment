import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName = 'Ecoglobe building optimizer';
  isProjectPage = false;
  projectName: string;

  constructor(private router: Router, private headersService: HeaderService) {
  }

  ngOnInit() {
    this.headersService.onProjectPage.subscribe(
      (name: string) => {
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

  loadProjects() {
    this.router.navigate(['/projects']);
  }
}
