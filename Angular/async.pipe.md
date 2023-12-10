# Index

- [Index](#index)
  - [Synchronously](#synchronously)
  - [Using Async Pipe](#using-async-pipe)
  - [Potential Problem of not using Async pipe when needed](#potential-problem-of-not-using-async-pipe-when-needed)
    - [Bi-directional](#bi-directional)
    - [Unexpected Behaviors](#unexpected-behaviors)

## Synchronously

```
// in the component
tswNumber: string;

ngOnInit(){
    this.store.pipe(
       select(fromLodgement.getTswNumber())
       takeUntil(this.destroy$) // unsubscribe
    ).subscribe(tswNumber=>{ // subscribe
       this.tswNumber= tswNumber;
    });
}

// in html
<div >
  {{ tsw  }}
</div>


==================== object ====================

// in the component
lodgement$: {id: number, name : string};

ngOnInit(){
    this.lodgements$ = this.store.pipe(
       select(fromLodgement.getLodgement())
    );
}

// in html (with OnPush Change Detection Strategy)
<div *ngIf="lodgement]="lodgement$  | async as lodgement"">

   <i-am-child-component [lodgements]>
   </i-am-child-component>
</div>


```

## Using Async Pipe

```
// in the component

tsw$: Observable<string>;

ngOnInit(){
    this.tsw$ = this.store.pipe(
       select(fromLodgement.getTswNumber())
    );
}

// in the html

<div >
  {{ tsw$ | async  }}
</div>

```

## Potential Problem of not using Async pipe when needed

### Bi-directional

Not encapsulated by giving a nested component freedom to change the value

```
// in the component
lodgement: {id: number, name : string};

ngOnInit(){
    this.store.pipe(
       select(fromLodgement.getLodgement())
       takeUntil(this.destroy$)
    ).subscribe(lodgement=>{
       this.lodgement: lodgement;
    });
}

// in html
<div>{{ lodgement?.name }}</div>

<i-am-child-component [lodgement]="lodgement">
</i-am-child-component>


// in the child component
@Input() lodgement: id: number, name : string};

ngOnInit(){
    this.lodgement.name = 'Eden';
}


```

### Unexpected Behaviors

On which component is it changing the value?
