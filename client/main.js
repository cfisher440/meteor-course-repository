import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import '../imports/startup/simple-schema-configuration.js';

import { routes, onAuthChange } from '../imports/routes/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});