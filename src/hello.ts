import {Component, bootstrap} from 'angular2/angular2';
import {PersonalDevLinks} from './personal-dev-links';
import {PersonalLinks} from './personal-links';

var _links: PersonalLinks = {
  twitter: '@bahmutov',
  github: 'bahmutov',
  site: 'http://glebbahmutov.com',
  blog: undefined
};

@Component({
    selector: 'hello-app',
    directives: [PersonalDevLinks],
    template: `
      <h2>Below are my personal dev links</h2>
      <personal-dev-links [links]="links"></personal-dev-links>
    `
})
export class HelloApp {
  links: PersonalLinks = _links;
}

bootstrap(HelloApp);
