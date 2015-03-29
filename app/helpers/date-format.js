import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(value) {
  moment.locale('es');
  return s.titleize(moment(value).format("MMMM D, YYYY"));
});