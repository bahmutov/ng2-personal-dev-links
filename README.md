# ng2-personal-dev-links

A small component using Angular2 showing personal dev links

![screenshot](screenshot.png)

## The demo application and page

The outside code "somehow" gets my links in a single object (see [src/demo-app.ts](src/demo-app.ts))

```typescript
import {PersonalLinks} from './personal-links';
var _links: PersonalLinks = {
  twitter: '@bahmutov',
  github: 'bahmutov',
  site: 'http://glebbahmutov.com',
  blog: undefined
};
```

Then it creates a component that includes another reusable component `PersonalDevLinks`

```typescript
import {Component} from 'angular2/angular2';
import {PersonalDevLinks} from './personal-dev-links';
@Component({
  selector: 'demo-app',
  directives: [PersonalDevLinks],
  template: `
    <h2>Below are my personal dev links</h2>
    <personal-dev-links [links]="links"></personal-dev-links>
  `
})
export class DemoApp {
  links: PersonalLinks = _links;
}
```

finally we bootstrap the application

```typescript
import {bootstrap} from 'angular2/angular2';
bootstrap(DemoApp);
```

## The links component

The links component in [src/personal-dev-links.ts](src/personal-dev-links.ts) is much simpler,
since it only has a template and data.

```typescript
import {Component, NgIf} from 'angular2/angular2';
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
    ...
  `
})
export class PersonalDevLinks {
  public links: PersonalLinks;
}
```

Notice that because we expect to get the links from the outside, we must
include `links` in the list of the component's properties to be able to pass
them from the outside like this

    <personal-dev-links [links]="whatever"></personal-dev-links>

Notice we also have to declare all core components we are going to use in the template,
like `NgIf`

## Install

This is based on [ng2-play](https://github.com/pkozlowski-opensource/ng2-play) repo

Clone this repo and execute in your favourite shell:

* `npm i -g gulp` to install gulp globally (if you don't have it installed already)
* `npm i` to install local npm dependencies

## Play

After completing installation type in your favourite shell:

* `gulp play` to start a "Hello World" app in a new browser window. App files are observed and will be re-transpiled on each change.
