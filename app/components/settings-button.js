import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['settings'],
  click (){
    this.sendAction('action');
  }
});
