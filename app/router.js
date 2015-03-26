import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('listings', function() {
    this.route('new');
    this.route('show', { path: ':listing_id' });
  });

  this.route('products');
});

export default Router;
