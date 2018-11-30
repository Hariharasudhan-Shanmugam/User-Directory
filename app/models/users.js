import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

  login: attr('string'),
  node_id: attr('string'),
  avatar_url:  attr('string'),
  gravatar_id:   attr('string'),
    url:  attr('string') ,
     html_url :  attr('string') ,
     followers_url :  attr('string') ,
     following_url :  attr('string') ,
     gists_url :  attr('string') ,
     starred_url : attr('string') ,
     subscriptions_url :  attr('string') ,
     organizations_url :  attr('string') ,
     repos_url :  attr('string'),
     events_url : attr('string') ,
     received_events_url :  attr('string') ,
     site_admin : attr('boolean')
});
