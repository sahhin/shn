import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {SwiperComponent} from 'ngx-useful-swiper';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
    @ViewChild('swiperComponent', {static: false}) usefulSwiper: SwiperComponent | any;

    config: SwiperOptions = {
        pagination: {el: '.swiper-pagination', clickable: true},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    };

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.cd.detectChanges();
    }

}
