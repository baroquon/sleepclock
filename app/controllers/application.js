/* global moment */
import Ember from 'ember';

export default Ember.Controller.extend({
  time: Ember.computed('clock.second', function() {
    return moment().format('h:m:s');
  }),
  dayTime: Ember.computed('clock.second', function(){
    if(moment().format('A')==='AM'){
      return moment().format('h') >= 8;
    } else {
      return moment().format('h') === 12 || moment().format('h') < 10 ;
    }
  })
});
