import { Component, OnInit } from '@angular/core';
import {Requirement} from "./requirement.model"
@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  requirements: Requirement[]=[
    new Requirement("REQUIREMENT1","promise and all"),
    new Requirement("REQUIREMENT2","OOP all"),
    new Requirement("REQUIREMENT3","OOP And Game"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
