# Index
- ngOnInit(Angular) - when the component initiated (only once? hmm)
- ionViewWillEnter(Ionic) - when the animation starts
- ionViewDidEnter(Ionic) -  when the animation finished
- ionViewWillLeave(Ionic) - when navigation starts (with loading)
- ionViewDidLeave(Ionic) - when navigation is finished to another page
- ngOnDestroy(Angular) - happens when the component is destroyed from the stack (such as if you delete a page, will remove from the stack)


## if loading another page
- ionViewWillLeave (leaving page)
- ionViewWillEnter (new page)
- ionViewDidEnter (new page)
- ionViewDidLeave (leaving page)