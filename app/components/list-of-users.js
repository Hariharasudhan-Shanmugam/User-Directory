import Component from '@ember/component';
import { set,get } from '@ember/object';

export default Component.extend({

	actions: {

		onToShortlist:function(users) {
			this.sendAction('onToShortlistRoute',users);
		},

		onClickofUser:function(users) {
			this.sendAction('onClickofUser',users);
		}
	}
});
