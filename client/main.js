import Vue from 'vue';
import { Meteor } from 'meteor/meteor';


Meteor.subscribe('todos');

Meteor.startup(() => {
  new Vue({
    el: '#app',
    render: (createElement) => {
      return createElement(Vue.component('app'));
    }
  });
});
