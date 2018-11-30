import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  urlForFindAll() {
    const serviceUrl =  "https://api.github.com";
    return `${serviceUrl}/users`;
  },
  urlForFindRecord(login) {
    const serviceUrl =  "https://api.github.com";
    return `${serviceUrl}/users/${login}`;
  },
  // handleResponse: function(status, headers, payload) {
  //    if (status === 401|| status === 404){
  //     return this._super(status, headers, payload);
  //    }else if(payload.errors) {
  //         return new DS.InvalidError(payload.errors);
  //     } else {
  //         return this._super(status, headers, payload);
  //     }
  // }
});
