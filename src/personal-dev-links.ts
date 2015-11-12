import {Component, NgIf} from 'angular2/angular2';
import {PersonalLinks} from './personal-links';

@Component({
  selector: 'personal-dev-links',
  directives: [NgIf],
  properties: ['links'],
  template: `
    <div class="personal-dev-links" *ng-if="links">
      <p>personal dev links</p>
      <a href="https://twitter.com/{{ links.twitter }}"
         *ng-if="links.twitter"
         target="_blank"
         title="Personal twitter account {{ links.twitter }}">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="https://github.com/{{ links.github }}"
         *ng-if="links.github"
         target="_blank"
         title="Github projects">
        <i class="fa fa-github"></i>
      </a>
      <a href="{{ links.site || links.website }}"
         *ng-if="links.site || links.website"
         target="_blank"
         title="Personal website">
        site
      </a>
      <a href="{{ links.blog }}"
         *ng-if="links.blog"
         target="_blank"
         title="Personal blog">
        blog
      </a>
    </div>
  `
})
export class PersonalDevLinks {
  public links: PersonalLinks;
}
