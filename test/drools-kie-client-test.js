/**
 * Copyright 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. 
 */

'use strict';

const test = require('tape');
const client = require('../lib/drools-kie-client');

test('setup', t => {
  console.log('init.');
  t.end();
});

test('The client should return the server information.', t => {

  client({}).info()
    .then(x => {
      t.equal(x.msg, 'Kie Server info');
      t.end();
    }).catch(e => console.log(e));

});

test('The client should return the containers.', t => {

  client({}).containers()
    .then(x => {
      t.equal(x.msg, 'List of created containers');
      t.end();
    }).catch(e => console.log(e));

});

test('teardown', t => {

  console.log('done.');
  t.end();

});