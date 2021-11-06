import {Component, OnInit} from '@angular/core';
import {SkillsInterface} from '../../../core/interfaces/skills';

@Component({
    selector: 'app-me',
    templateUrl: './me.component.html',
    styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

    skills: SkillsInterface[] = [
        {
            tool: 'Angular',
            rating: 4,
            logo: 'assets/img/logos/angular.png'
        },
        {
            tool: 'Tailwind CSS',
            rating: 2,
            logo: 'assets/img/logos/tailwind.svg'
        },
        {
            tool: 'Bootstrap',
            rating: 3,
            logo: 'assets/img/logos/bootstrap.svg'
        },
        {
            tool: 'Java',
            rating: 2,
            logo: 'assets/img/logos/java.svg'
        },
        {
            tool: 'TypeScript',
            rating: 3,
            logo: 'assets/img/logos/ts.svg'
        },
        {
            tool: 'JavaScript',
            rating: 2,
            logo: 'assets/img/logos/js.png'
        },
        {
            tool: 'HTML',
            rating: 3,
            logo: 'assets/img/logos/html.png'

        },
        {
            tool: 'CSS',
            rating: 3,
            logo: 'assets/img/logos/css.png'
        },
        {
            tool: 'SQL',
            rating: 2,
            logo: 'assets/img/logos/sql.svg'
        },
        {
            tool: 'Python',
            rating: 3,
            logo: 'assets/img/logos/python.svg'
        },
        {
            tool: 'Vue.js',
            rating: 1,
            logo: 'assets/img/logos/vue.png'
        },
        {
            tool: 'Atlassian',
            rating: 3,
            logo: 'assets/img/logos/atlassian.svg'
        },
        {
            tool: 'Windows',
            rating: 4,
            logo: 'assets/img/logos/win.svg'
        },
        {
            tool: 'MacOS',
            rating: 1,
            logo: 'assets/img/logos/mac.png'
        },
        {
            tool: 'Ubuntu',
            rating: 2,
            logo: 'assets/img/logos/ubuntu.png'

        },
        {
            tool: 'Git',
            rating: 3,
            logo: 'assets/img/logos/git.svg'

        },
        {
            tool: 'JetBrains',
            rating: 3,
            logo: 'assets/img/logos/jetbrains.png'

        },
        {
            tool: 'PHP',
            rating: 2,
            logo: 'assets/img/logos/php.svg'

        }
    ];

    constructor() {
    }

    ngOnInit(): void {
        this.desc();
    }

    counter(i: number) {
        return new Array(i);
    }

    desc() {
        this.skills.sort((a, b) => b.rating - a.rating);
    }

    asc() {
        this.skills.sort((a, b) => a.rating - b.rating);
    }

    alphabet() {
        this.skills.sort((a, b) => a.tool > b.tool ? -1 : 1);
    }

    alphabetd() {
        this.skills.sort((a, b) => a.tool < b.tool ? -1 : 1);
    }

}
