import Component from '@ember/component';
import { set,get } from '@ember/object';

export default Component.extend({
	didRender(){
		this._super(...arguments);
	},
	actions: {

		onToShortlist:function(users) {
			this.sendAction('onToShortlistRoute',users);
		},
		onRmvShortlistRoute:function(users) {
			this.sendAction('onRmvShortlistRoute',users);
		},
		onClickofUser:function(users) {
			this.sendAction('onClickofUser',users);
		}
	}
});
