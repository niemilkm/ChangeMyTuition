if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Change My Tuition',
        suffix: '529 Plan'
      }
  });
}
