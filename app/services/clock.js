import Ember from 'ember';

const { Service, testing, run, observer } = Ember;

export default Service.extend({
  // Properties
  intervalTime: 1000,
  second: 0,
  minute: 0,
  five: 0,
  quarter: 0,
  hour: 0,

  //Computed  Properties
  intervalChange: observer('intervalTime', function() {
    if (testing) {
      return this.reset();
    }
    throw Error('The clock interval cannot be changed except during testing');
  }),

  // Methods
  init () {
    let interval = window.setInterval( () => {
      this.tick.call(this);
    }, this.get('intervalTime'));
    this.set('interval', interval);
  },
  reset () {
    this.willDestroy();
    this.init();
    this.setProperties({second: 0, minute: 0, five: 0, quarter: 0, hour: 0});
  },
  tick () {
    run(this, function() {
      let second = this.incrementProperty('second');

      if (second && (second % 60) === 0) {
        let minute = this.incrementProperty('minute');

        if (minute !== 0) {
          if ((minute % 5) === 0) {
            this.incrementProperty('five');
          }

          if ((minute % 15) === 0) {
            this.incrementProperty('quarter');
          }

          if ((minute % 60) === 0) {
            this.incrementProperty('hour');
          }
        }
      }
    });
  },
  willDestroy () {
    window.clearInterval(this.get('interval'));
  }
});
