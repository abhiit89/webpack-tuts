var messages = require('./message');

var app = document.getElementById('app');
app.innerHTML = "<p>" + messages.hi + " " + messages.event + "</p>";