import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions:  {
    announcementFormShow()  {
      this.set('addNewAnnouncement', true)
    },
    save() {
      var params = {
        message: this.get('message'),
        date: this.get('date') ? this.get('date'): "Future"
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});
