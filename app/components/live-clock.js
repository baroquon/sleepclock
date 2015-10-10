/* global moment */
import Ember from 'ember';

const { inject, computed, Component } = Ember;

export default Component.extend({
  // Properties
  classNameBindings: ['dayTime:awake:sleep'],
  classNames: ['clock'],
  clock: inject.service(),
  showingSettings: false,
  wakeUp: 8,
  goToSleep: 10,

  // Computed Properties
  dayTime: computed('clock.minute', 'goToSleep', 'wakeUp', function(){
    this.get('clock.second');
    let goToSleep = Number(this.get('goToSleep')),
        wakeUp = Number(this.get('wakeUp'));
    if(moment().format('A')==='AM'){
      return moment().format('h') >= wakeUp;
    } else {
      return moment().format('h') === 12 || moment().format('h') < goToSleep ;
    }
  }),
  time: computed('clock.second', function() {
    return moment().format('h:m:s');
  }),
  actions: {
    toggleSettings (){
      this.toggleProperty('showingSettings');
    }
  }
});
