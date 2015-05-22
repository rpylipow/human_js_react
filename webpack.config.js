require('babel/register');
var React = require('react');
var getConfig = require('hjs-webpack');
var Layout = require('./src/layout');
var Public = require('./src/pages/public');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  html: function (context) {
    var layoutHtml = React.renderToString(React.createElement(Layout, {me: {}}));
    var publicHtml = React.renderToString(React.createElement(Public));
    return {
      '200.html': context.defaultTemplate({html: layoutHtml}),
      'index.html': context.defaultTemplate({html: publicHtml})
    }
  }
});
