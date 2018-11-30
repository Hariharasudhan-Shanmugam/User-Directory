import Component from '@ember/component';
import { set,get } from '@ember/object';

export default Component.extend({
	model(){
		console.log("model");
	},
	actions: {

		shortList() {
			alert("clicked");
		}
	}
});
