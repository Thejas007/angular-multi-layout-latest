import { Component, OnInit } from '@angular/core';
import { INSTANCES } from "./instances";
import { Router } from '@angular/router';
@Component({
  selector: 'app-intelligence-instances',
  templateUrl: './intelligence-instances.component.html',
  styleUrls: ['./intelligence-instances.component.scss']
})
export class IntelligenceInstancesComponent implements OnInit {
  instances = INSTANCES;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickEventHandler(){
    this.router.navigateByUrl('/add-edit-intelligence-instance');
  }

}
