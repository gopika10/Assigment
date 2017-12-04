export class Project {
  public id: number;
  public name: string;
  public image: string;
  public scenario: any;

  constructor(id: number, name: string, image: string, scenario: any) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.scenario = scenario;
  }
}
