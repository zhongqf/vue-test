<template>
  <div class="app">
    <h1>Simple Meteor example using Vue</h1>
    <p>
      You pressed the button {{count}} times.
    </p>
    <button @click="addOne">{{buttonLabel}}</button>
    <button @click="addIndex">Add Index</button>
    <br>
    <button @click="addTodo">Add Random Todo</button>
    <ul>
     <li v-for="todo in todos">{{todo.text}}</li>
    </ul>
  </div>
</template>

<script>
  import {Todos} from '/imports/api/todos.js';
  import {ReactiveVar} from 'meteor/reactive-var';
  import Vue from 'vue';

  let counter = new ReactiveVar(0);

  let labels = [
    'Click me!', 'Click me again!', 'Here! Click here!', 'Again! Again!',
    'Don\'t click me! No, I\'m just kidding. You can.', 'You like that?',
    'Can you stratch me in the back please?', 'You are soooo nice! Click!',
    'Hmmmm...', 'You know, you are wasting time clicking me.',
    'No really, you can click me as much as you want.', 'Click me to level up!'
  ];

  export default {
    data() {
      return {
        index: 1,
        buttonLabel: 'Click me!'
      }
    },

    computed: {
      count() {
        return counter.get() + this.index;
      },
      todos() {
        return Todos.find({}, {limit: this.count}).fetch()
      }
    },

    methods: {
      addOne() {
        counter.set(counter.get() + 1);

        this.buttonLabel = labels[Math.round(Math.random() * (labels.length - 1))];
      },
      addTodo() {
        Todos.insert({text: Math.random().toString(36).substring(2) });
      },
      addIndex() {
        this.index = this.index + 1
      }
    }
  }
</script>

<style>
  body {
    margin: 30px;
  }

  a {
    color: #40b883;
    text-decoration: none;
  }

  h1 {
    font-weight: normal;
  }
</style>
