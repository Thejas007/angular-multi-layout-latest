import { Component, OnInit } from '@angular/core';
import { INSTANCES } from "./instances";
@Component({
  selector: 'app-intelligence-instances',
  templateUrl: './intelligence-instances.component.html',
  styleUrls: ['./intelligence-instances.component.scss']
})
export class IntelligenceInstancesComponent implements OnInit {
  instances = INSTANCES;
  constructor() { }

  ngOnInit() {
  }

}
