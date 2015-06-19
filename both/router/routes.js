Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/IsA529PlanForMe', {
  name:'IsA529PlanForMe'
});

// Router.route('/items/new', {
//   name: 'items.new'
// });

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
