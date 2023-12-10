# Index

- ElementRef is a class that can hold a reference to a DOM element. This is again an abstraction to not break in environments where the browsers DOM isn't actually available.
- So when direct access to native elements is not supported you should use renderer
- Renderer is not direct DOM manipulation — as long as you're going through the Angular APIs,
- tapping into the nativeElement of an ElementRef can cause headaches if you ever need to do server-side rendering.
- The nativeElement Property contains the reference to the underlying DOM object. This gives us direct access to the DOM, bypassing the Angular.
- [link](https://www.tektutorialshub.com/angular/renderer2-angular/)

# Table Of Contents

- Renderer and ElementRef are not "either this or that", but instead they have to be used together to get full platform abstraction.
- Renderer acts on the DOM and ElementRef is a reference to an element in the DOM the Renderer acts on.
- The Renderer is a class that is a partial abstraction over the DOM. Using the Renderer for manipulating the DOM doesn't break server-side rendering or Web Workers (where direct access to the DOM would break).

- [Index](#index)
- [Table Of Contents](#table-of-contents)
  - [example](#example)

## example

```
// html
<input type="email" name="email" ngModel #email>

// component
@ViewChild("email") email: ElementRef;

```
