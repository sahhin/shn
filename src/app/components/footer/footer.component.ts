import {Component, OnInit} from '@angular/core';
import {faAngular} from '@fortawesome/free-brands-svg-icons';
import version from 'src/assets/version/app-version.json';
import dependencies from 'package.json';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    faAngular = faAngular;
    version = version.version.tag + '-' + version.count + '-' + version.version.hash;
    constructor() {
    }

    ngOnInit(): void {
        console.log(dependencies);
    }

}
