import {Component, OnInit} from '@angular/core';
import {faAngular} from '@fortawesome/free-brands-svg-icons';
import version from 'src/assets/version/app-version.json';
import dependencies from 'package.json';
import {NgxPopperjsPlacements, NgxPopperjsTriggers} from 'ngx-popperjs';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    faAngular = faAngular;
    version = version.version.tag + '-' + version.count + '-' + version.version.hash;
    lastChange = version.date;
    NgxPopperjsTriggers = NgxPopperjsTriggers;
    NgxPopperjsPlacements = NgxPopperjsPlacements;
    constructor() {
    }

    ngOnInit(): void {
        console.log(dependencies);
    }

}
