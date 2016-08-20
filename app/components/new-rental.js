import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image') ? this.get('image'): "http://img06.deviantart.net/2031/i/2011/107/0/5/apartment_building___evening_by_dave5264-d3e7ol6.jpg",
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
