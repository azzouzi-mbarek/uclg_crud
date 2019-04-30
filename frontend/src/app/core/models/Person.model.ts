import { AcademicLevel } from "./AcademicLevel.model";

export class Person {
  public id: number;
  public image_url: string;
  public first_name: string;
  public last_name:string;
  public sex:string;
  public birthday:Date;
  public profession:string;
  public nationality:string;
  public study_area:string;
  public short_biography:Text;
  public email:string;
  public number_phone:string;
  public academicLevel: AcademicLevel;
  

  constructor() {
    this.id = null;
    this.first_name = null;
    this.last_name = null;
    this.sex = null;
    this.birthday = null;
    this.profession = null;
    this.nationality = null;
    this.study_area = null;
    this.short_biography = null;
    this.email = null;
    this.number_phone = null;
    this.academicLevel = new AcademicLevel();

  }
}