import Controller from '@ember/controller';
import { isEmpty } from "@ember/utils";
//import { inject as service } from "@ember/service";

export default Controller.extend({
  //session:service(),
    actions: {
        search(value){
          // /console.log(this);
          //  console.log(value);
          let tempUsers =  this.users;
          let searchList = [];
        //  this.set('storedUsers', this.session.users);
          //  let shortlistedList = [];
            if(!isEmpty(value)){
              for(var i=0; i < tempUsers.length  ; i++){
                if(tempUsers[i].login.indexOf(value) != -1){
                  searchList.pushObject(tempUsers[i]);
                }
              }
              this.set('users', searchList);
            } else {
              this.set('users', this.get('userStore'));
            }

        },
        onToShortlist:function(users){
           this.set( 'shortlistedList', users);
          // this.refresh();
        },
    }
});
