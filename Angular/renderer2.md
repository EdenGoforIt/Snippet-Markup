# Index

- normally used with `directive`
- assign Angular to do DOM rendering instead of directly touching the DOM

# Table Of Contents

- Renderer and ElementRef are not "either this or that", but instead they have to be used together to get full platform abstraction.
- Renderer acts on the DOM and ElementRef is a reference to an element in the DOM the Renderer acts on.
- The Renderer is a class that is a partial abstraction over the DOM. Using the Renderer for manipulating the DOM doesn't break server-side rendering or Web Workers (where direct access to the DOM would break).
- So when direct access to native elements is not supported you should use renderer
- Renderer is not direct DOM manipulation — as long as you're going through the Angular APIs,
- tapping into the nativeElement of an ElementRef can cause headaches if you ever need to do server-side rendering.
- The nativeElement Property contains the reference to the underlying DOM object. This gives us direct access to the DOM, bypassing the Angular.

- [link](https://www.tektutorialshub.com/angular/renderer2-angular/)

# Table Of Contents

- [Index](#index)
- [Table Of Contents](#table-of-contents)
- [Table Of Contents](#table-of-contents-1)
  - [example](#example)

## example

```
import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGoWild]'
})
export class GoWildDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'wild');
  }
}

// html

<h1 appGoWild>
  Hello World!
</h1>
```
