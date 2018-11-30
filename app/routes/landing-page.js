import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    this.store.unloadAll('users');

     return RSVP.hash({
        userData: get(this, 'store').findAll('users').then(function(users) {
            return users.content[0]._data.users
          })
          });
},
actions: {
onToShortlistRoute:function(users){
  set(this,'userShrtData', users);
  //this.refresh();
},
onClickofUser:function(users){
    this.transitionTo('user-details-page',{
      queryParams: { 
          login: users.login
      }
  }
);
}
}
});
