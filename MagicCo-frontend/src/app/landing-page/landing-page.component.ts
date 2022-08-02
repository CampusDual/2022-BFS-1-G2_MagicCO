import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, OntimizeWebModule]
})


export class LandingPageComponent implements OnInit {

  constructor(
    @Inject(NavigationService) public navigation: NavigationService,
    // iconRegistry: MatIconRegistry,
    // domSanitizer: DomSanitizer
  ) {
    // iconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/grifon.svg'));
  }

  ngOnInit() {
    this.navigation.setVisible(true);
  }




}
