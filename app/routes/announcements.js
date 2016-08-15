import Ember from 'ember';

var announcements = [{
  message: "There are free shish kebabs available at Stephanie's Rental today!",
  date: "August 15"
},
{
  message: "There's a fire at Stephanie's property from the kebab grill! Run away!",
  date: "August 15"
}];
export default Ember.Route.extend({
  model() {
    return announcements;
  }
});
