import { Injectable } from '@angular/core';
import { Project } from './projects/project.model';

@Injectable()
export class DataService {
  projects: Project[] = [
    new Project(1, 'Office Phoenix Lake', '../../../assets/images/projects/1.png', [{
      'id': 1,
      'name': 'Version A',
      'links': ['Optimization Bot', 'Manual Simulation']
    }]),
    new Project(2, 'Parkhotel Heilbronn', '../../../assets/images/projects/2.png', [{
      'id': 1,
      'name': 'Version A',
      'links': ['Optimization Bot', 'Manual Simulation']
    }]),
    new Project(3, 'Office Neuer Kanzlerplatz', '../../../assets/images/projects/3.jpg', [{
      'id': 1,
      'name': 'Version A',
      'links': ['Optimization Bot', 'Manual Simulation']
    }]),
    new Project(4, 'Apple Campus', '../../../assets/images/projects/4.jpg', [{
      'id': 1,
      'name': 'Version A',
      'links': ['Optimization Bot', 'Manual Simulation']
    }])
  ];
  constructor() { }
  getProject(id: number) {
    const projectObj = this.projects.find( function( project ){
      return project.id === id;
    } );
    return projectObj;
  }

}
