// Annotations
import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

// Directives
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NgClass} from 'angular2/angular2';

// Components
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {FirstVisit} from './components/firstvisit/firstvisit';
import {Orthodontics} from './components/orthodontics/orthodontics';
import {Dentistry} from './components/dentistry/dentistry';
import {Prosthetics} from './components/prosthetics/prosthetics';
import {CuredPatients} from './components/curedpatients/curedpatients';
import {Certificates} from './components/certificates/certificates';
import {Contact} from './components/contact/contact';

import {MainCarousel} from './common/components/main-carosuel/main-carousel';

declare var jQuery: any;



@Component({
  selector: 'app'
})
@View({
  directives: [
    ROUTER_DIRECTIVES,
    NgClass,
    MainCarousel
  ],
  template: require('./app.html'),
  styles: [
    require('./styles/navbar.scss'),
    require('./styles/footer.scss')
  ]
})
@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/o-nas', as: 'About', component: About },
  { path: '/pierwsza-wizyta', as: 'FirstVisit', component: FirstVisit },
  { path: '/ortodoncja', as: 'Orthodontics', component: Orthodontics },
  { path: '/stomatologia', as: 'Dentistry', component: Dentistry },
  { path: '/protetyka', as: 'Prosthetics', component: Prosthetics },
  { path: '/wyleczeni-pacjenci', as: 'CuredPatients', component: CuredPatients },
  { path: '/certyfikaty', as: 'Certificates', component: Certificates },
  { path: '/kontakt', as: 'Contact', component: Contact }
])

export class App {
  constructor() {
    this.carouselMaxHeight = jQuery('.ortovis-carousel').height();
    // console.log(this.carouselMaxHeight);
  }

  carouselMaxHeight: number;
  state: { [item: string]: string; } = {};
  activate(item) {
    this.state = {};
    this.state[item] = "ortovis-menu__item--active";
console.warn(this.carouselMaxHeight);
    if (item == "Home") {
      jQuery('.ortovis-carousel__title-bar').fadeIn('fast');
      jQuery('.ortovis-officehours-table').show('fast');
      jQuery('.contact').show('fast');
      jQuery('.ortovis-carousel').animate({
        'height': '41vw',
        // 'max-height': 550
      }, 350);
    } else {
      jQuery('.ortovis-officehours-table').hide('fast');
      jQuery('.ortovis-carousel__title-bar').fadeOut('fast');
      jQuery('.contact').hide('fast');
      jQuery('.ortovis-carousel').animate({
        'height': '10vh',
        // 'max-height': 75
      }, 350);
    }
  }
}
