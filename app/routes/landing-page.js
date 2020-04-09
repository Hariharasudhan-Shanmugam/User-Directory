import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
//import { inject as service} from "@ember/service";

export default Route.extend({

 setupController(controller){
   this._super(...arguments);
   this.store.unloadAll('users');
  // this.send('loading')
    get(this, 'store').findAll('users').then(function(users) {
           controller.set('users', users.content[0]._data.users);
           controller.set('userStore', controller.get('users'));
         })
},
actions: {
onClickofUser:function(users){
    this.transitionTo('user-details-page',{
      queryParams: { 
          login: users.login
      }
  }
);
},
onRmvShortlistRoute:function(users){
  document.getElementsByClassName('card').style.display = 'none';
},
}
});
