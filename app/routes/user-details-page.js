import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(model, queryParams) {
    var login = queryParams.queryParams.login;
    return RSVP.hash({
         userRecord: get(this, 'store').findRecord('users', login).then(function(userRecord) {
           return userRecord._internalModel.__data.users;
         })
         });
},
actions: {
  onClickBack:function(){
    this.transitionTo('landing-page');
  },
}
});
