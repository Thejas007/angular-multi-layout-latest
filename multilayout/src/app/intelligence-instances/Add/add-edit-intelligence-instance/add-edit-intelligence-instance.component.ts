import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-add-edit-intelligence-instance",
  templateUrl: "./add-edit-intelligence-instance.component.html",
  styleUrls: ["./add-edit-intelligence-instance.component.scss"]
})
export class AddEditIntelligenceInstanceComponent implements OnInit {
  open = true;
  savingInstance = false;
  usageOptions = [
    { id: "", name: "Select" },
    { id: "1", name: "Demo" },
    { id: "2", name: "Development" },
    { id: "7", name: "Pilot / POC" },
    { id: "4", name: "Production" },
    { id: "5", name: "QA" },
    { id: "6", name: "Trial" },
    { id: "8", name: "Trial & Production" },
    { id: "3", name: "UAT" }
  ];

  instanceStatus = [
    { id: "1", name: "ACTIVE" },
    { id: "2", name: "ARCHIVE" },
    { id: "7", name: "DECOMMISSIONED" },
    { id: "4", name: "IGNORED" }
  ];

  model = new FormGroup({
    basic: new FormControl(""),
    container: new FormControl(""),
    required: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/asdfasdf/)
    ])
  });

  form: FormGroup;
  constructor(private router: Router) {
    this.form = this.getReactiveForm();
  }

  ngOnInit() {}

  private getReactiveForm() {
    return new FormGroup({
      fiendlyName: new FormControl("", Validators.required),
      endpointUrl: new FormControl("", Validators.required),
      nodeIdentifier: new FormControl("", Validators.required),
      usageOptions: new FormControl("", Validators.required),
      instanceStatus: new FormControl("1", Validators.required),
      authorizationtUrl: new FormControl("", Validators.required),
      clientId: new FormControl("", Validators.required),
      clientSecret: new FormControl("", Validators.required),
    });
  }

  navigateToInstanceDashBoard(saving) {
    this.savingInstance = saving;
    let delay = saving ? 3000 : 0;
    let self = this;
    setTimeout(
      () => self.router.navigateByUrl("/clr-intelligence-instances"),
      delay
    );
  }
}
