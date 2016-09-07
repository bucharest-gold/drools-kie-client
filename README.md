# drools-kie-client

[![Build Status](https://travis-ci.org/bucharest-gold/drools-kie-client.svg?branch=master)](https://travis-ci.org/bucharest-gold/drools-kie-client)
[![dependencies Status](https://david-dm.org/bucharest-gold/drools-kie-client/status.svg)](https://david-dm.org/bucharest-gold/drools-kie-client)

[![NPM](https://nodei.co/npm/drools-kie-client.png)](https://npmjs.org/package/drools-kie-client)

Node.js client for Drools KIE server API.

|                 | Project Info  |
| --------------- | ------------- |
| License:        | Apache-2.0 |
| Build:          | make |
| Documentation:  | http://bucharest-gold.github.io/drools-kie-client |
| Issue tracker:  | https://github.com/bucharest-gold/drools-kie-client/issues |
| Engines:        | Node.js 4.x, 5.x, 6.x |

## Installation

    npm install drools-kie-client -S


## Usage
    const client = require('drools-kie-client');

    const options = {
      baseUrl: 'http://host:port/kie_server_context',
      username: 'yourAdminUsername',
      password: 'yourAdminPassword'
    };

    client = client(options);

    client.info().then(x => console.log(x.msg));

    const container = {
      "container-id": "bgold",
      "release-id": {
        "version": "1.0",
        "group-id": "org.bgold.kieserver",
        "artifact-id": "bgold"
      }
    };

    client.containerAdd(container).then(x => console.log(x.msg));

    const commands = {
      "commands": [
        { "insert": { "object": "testCommand" } },
        { "fire-all-rules": {} }
      ]
    };

    client.executeCommand('containerID', commands)
    .then(x => console.log(x))
    .catch(error => console.log(error));

## You can use to

* Verify the server status.
* List, add, delete containers.
* Execute commands.
* View and update release.
* View and update scanner.

[1]: http://docs.jboss.org/drools/release/6.4.0.Final/drools-docs/html/ch22.html#d0e24633

## Contributing

Please read the [contributing guide](./CONTRIBUTING.md)