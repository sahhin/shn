import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() drawer: MatDrawer | undefined;
  faBars = faBars;
  faCog = faCog;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
