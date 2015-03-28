import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  contact_name: DS.attr('string'),
  email: DS.attr('string'),
  created_at: DS.attr('date'),
  telephone: DS.attr('string'),
  location: DS.belongsTo('location', { async: true }),
  user: DS.belongsTo('user', { async: true })
});