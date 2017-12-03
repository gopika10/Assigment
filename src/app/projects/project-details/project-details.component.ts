import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { DataService } from '../../data.service';
import {Project} from '../project.model';
import {HeaderService} from '../../header.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  providers: [DataService]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  public isCollapsed = false;
  project: Project;
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute, private dataService: DataService, private headerService: HeaderService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.project = this.dataService.getProject(parseInt(id, 10));
    this.headerService.onProjectPage.next(this.project.name);
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.project.id = params['id'];
      }
    );
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
