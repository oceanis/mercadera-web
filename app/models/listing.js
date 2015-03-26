import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  contact_name: DS.attr('string'),
  email: DS.attr('string'),
  telephone: DS.attr('string'),
  location: DS.belongsTo('location'),
  user: DS.belongsTo('user'),
});