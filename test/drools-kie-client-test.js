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
const client = require('../index');

const options = {
  'baseUrl': 'http://localhost:8080/kie-server-6.4.0.Final-ee7',
  'username': 'kieserver',
  'password': 'kieserver1!'
};

test('Should return the server information.', t => {
  client.info(options)
    .then(x => {
      t.equal(JSON.parse(x).msg, 'Kie Server info');
      t.end();
    }).catch(e => console.log(e));
});

// test('The client should add one container.', t => {
//   let container = {
//     'container-id': 'bgold',
//     'release-id': {
//       'version': '1.0',
//       'group-id': 'org.bgold.kieserver',
//       'artifact-id': 'bgold'
//     }
//   };

//   client.containerAdd(container)
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should return information about one container.', (t) => {
//   client.container('bgold')
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should return the containers.', t => {
//   client.containers()
//     .then(x => {
//       t.equal(x.result['kie-containers']['kie-container'][0]['container-id'], 'bgold');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should get the release id information of the container.', t => {
//   client.release('bgold')
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should get the scanner information of the container.', t => {
//   client.scanner('bgold')
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should update scanner.', t => {
//   let scanner = {
//     'status': 'STARTED',
//     'poll-interval': 10000
//   };

//   client.scannerUpdate('bgold', scanner)
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should update the release.', t => {
//   let release = {
//     'version': '1.2',
//     'group-id': 'org.bgold.kieserver',
//     'artifact-id': 'bgold'
//   };

//   client.releaseUpdate('bgold', release)
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should execute commands.', t => {
//   let commands = {
//     'commands': [
//       { 'insert': { 'object': 'testBgold' } },
//       { 'fire-all-rules': {} }
//     ]
//   };

//   client.executeCommand('bgold', commands)
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

// test('The client should remove one container.', t => {
//   client.containerDelete('bgold')
//     .then(x => {
//       t.equal(x.type, 'SUCCESS');
//       t.end();
//     }).catch(e => console.log(e));
// });

