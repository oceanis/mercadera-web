import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  listings: DS.hasMany('listings', { async: true })
});
