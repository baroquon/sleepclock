/* global moment */
import Ember from 'ember';

const { inject, computed, Component } = Ember;

export default Component.extend({
  // Properties
  classNameBindings: ['dayTime:awake:sleep'],
  classNames: ['clock'],
  clock: inject.service(),

  // Computed Properties
  dayTime: computed('clock.second', function(){
    this.get('clock.second');
    if(moment().format('A')==='AM'){
      return moment().format('h') >= 8;
    } else {
      return moment().format('h') === 12 || moment().format('h') < 10 ;
    }
  }),
  time: computed('clock.second', function() {
    return moment().format('h:m:s');
  }),
  actions: {
    openSettings (){
      console.log('This will toggle Settings');
    }
  }
});
