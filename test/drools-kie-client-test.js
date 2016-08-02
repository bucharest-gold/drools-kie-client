/**
 * Copyright 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
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

function getOptions () {
  const options = {
    'baseUrl': 'http://localhost:8080/kie-server-6.4.0.Final-ee7',
    'username': 'kieserver',
    'password': 'kieserver1!'
  };
  return options;
}

test('Should return the server information.', t => {
  client.info(getOptions())
    .then(x => {
      t.equal(JSON.parse(x.body).msg, 'Kie Server info');
      t.end();
    }).catch(e => console.log(e));
});

test('The client should add one container.', t => {
  let container = {
    'container-id': 'bgold',
    'release-id': {
      'version': '1.0',
      'group-id': 'org.bgold.kieserver',
      'artifact-id': 'bgold'
    }
  };

  client.containerAdd(getOptions(), JSON.parse(JSON.stringify(container)))
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should return information about one container.', (t) => {
  client.container(getOptions(), 'bgold')
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should return the containers.', t => {
  client.containers(getOptions())
    .then(x => {
      t.equal(JSON.parse(x.body).result['kie-containers']['kie-container'][0]['container-id'], 'bgold');
      t.end();
    }).catch(e => console.log(e));
});

test('Should get the release id information of the container.', t => {
  client.release(getOptions(), 'bgold')
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should get the scanner information of the container.', t => {
  client.scanner(getOptions(), 'bgold')
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should update scanner.', t => {
  let scanner = {
    'status': 'STARTED',
    'poll-interval': 10000
  };

  client.scannerUpdate(getOptions(), 'bgold', JSON.parse(JSON.stringify(scanner)))
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should update the release.', t => {
  let release = {
    'version': '1.2',
    'group-id': 'org.bgold.kieserver',
    'artifact-id': 'bgold'
  };

  client.releaseUpdate(getOptions(), 'bgold', release)
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should execute commands.', t => {
  let commands = {
    'commands': [
      { 'insert': { 'object': 'testBgold' } },
      { 'fire-all-rules': {} }
    ]
  };

  client.executeCommand(getOptions(), 'bgold', commands)
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});

test('Should remove one container.', t => {
  client.containerDelete(getOptions(), 'bgold')
    .then(x => {
      t.equal(JSON.parse(x.body).type, 'SUCCESS');
      t.end();
    }).catch(e => console.log(e));
});
