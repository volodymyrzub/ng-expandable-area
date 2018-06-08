# ng-expandable-area

> Expandable area for Angular4+

Ng Expandable Area is an HTML `<ng-expandable-area>` tag enhanced with styling and animation.

## Table of contents

* [Installation](#installation)
* [Setup](#setup)

## Installation

1.  Install the component using `npm`:

  ```bash
  # To get the latest stable version and update package.json file:
  $ npm install ng-expandable-area --save
  ```

## Setup

ng-expandable-area class is an Angular4+ module therefore,
it needs to be registered in the modules array (encouraged way):

```js
// app.module.ts
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { ExpandableAreaModule } from 'ng-expandable-area';
import { AppComponent }         from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ExpandableAreatModule // import Angular's ExpandableAreaModule modules
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Use in template:
```html
<ng-expandable-area [title]="Title of expandabel section" [opened]="true || false">
<!--Your content-->
</ng-expandable-area>
```

## License
[MIT License]
