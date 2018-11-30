import JSONAPISerializer from 'ember-data/serializers/json-api';


export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return attr; 
  },
  normalizeResponse(store, primaryModelClass, payload) {
        var parsedPaylod = {
           data: {
              type: "users",
              id: 1,
              attributes:{ users : payload }
          }
        };
        return parsedPaylod;
  }


});
