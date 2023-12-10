# index

> Represents a container where one or more **views** can be attached to a **component**.
> Can contain host views (created by instantiating a component with the createComponent() method), and embedded views (created by instantiating a TemplateRef with the createEmbeddedView() method).
> A view container instance can contain other view containers, creating a view hierarchy.

```
// in the AuthForm component
@Output() submitted = new EventEmitter<any>();

onSubmit(value: any):void{
    this.submitted.emit(value);
}

// in the app component
<div>
   <div #entry></div>
</div>


@ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

constructor(private resolver: ComponentFactoryResolver){}

ngAfterContentInit(){
   const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
   const component = this.entry.createComponent(AuthFormFactory);
   component.instance.title = 'This is the title';
   component.instance.submitted.subscribe(this.submitted);

   submitted(value: any):void{
    // you can have a value here.
    console.log(value);
   }

   // if wanting to destroy the component
   onDestroy(){
    this.component.destroy();
   }

}

```
