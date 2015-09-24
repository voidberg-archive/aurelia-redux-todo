export class App {
  configureRouter(config, router){
    config.title = 'Aurelia + Redux Todo app';
    config.map([
      {
        route: [''],
        name: 'index',
        moduleId: 'index',
        title:'Aurelia + Redux Todo app'
      }
    ]);

    this.router = router;
  }
}
