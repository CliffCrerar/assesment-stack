/**
 * Initialise all elements, middelware and components
 */

require('dotenv').config();
const
    { ReadStream } = require('fs'),
    { resolve, join } = require('path'),
    { Pool } = new require('pg'),
    vhost = require('vhost'),
    express = require('express'),
    app = express(),
    staticApp = resolve('build'),
    idx = join(staticApp, 'index.html'),
    pre = process.env.NODE_ENV === 'production' ? '' : '/ta',
    connect = require('connect');

console.log('idx: ', idx);

console.log('staticApp: ', staticApp);

module.exports = { express, app, vhost,ReadStream, resolve, join, Pool, staticApp, idx, pre, connect }