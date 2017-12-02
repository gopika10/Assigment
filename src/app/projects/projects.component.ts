import { Component, OnInit, Input } from '@angular/core';
import {Project} from './project.model';
import {HeaderService} from '../header.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [DataService]
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];
  constructor(private dataService: DataService, private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.onProjectPage.next();
    this.projects = this.dataService.projects;
  }
}
