importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDOGZiOJKcym5KFvhYZgjyNno8sgNPVKZA',
  authDomain: 'status-report-41706.firebaseapp.com',
  databaseURL: 'https://status-report-41706.firebaseio.com',
  projectId: 'status-report-41706',
  storageBucket: 'status-report-41706.appspot.com',
  messagingSenderId: '284637398676',
  appId: '1:284637398676:web:81fe8ba0b451aab0d09681',
  measurementId: 'G-8NY100EPWS'
});
const messaging = firebase.messaging();
