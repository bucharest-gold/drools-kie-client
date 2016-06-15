# drools-kie-client

Node.js client for Drools KIE server API.

[![Build Status](https://travis-ci.org/bucharest-gold/drools-kie-client.svg?branch=master)](https://travis-ci.org/bucharest-gold/drools-kie-client)
[![Coverage Status](https://coveralls.io/repos/github/bucharest-gold/drools-kie-client/badge.svg?branch=master)](https://coveralls.io/github/bucharest-gold/drools-kie-client?branch=master)

This package provides a Node.js client for the [KIE server API][1].
It is experimental and still a work in progress.

N.B. This module uses ES6 language features, and as such depends on Node.js version 5.x
or higher.

## Contributing

Please read the [contributing guide](./CONTRIBUTING.md)

## Installation

    npm install drools-kie-client -S


## Usage
    let client = require('drools-kie-client');

    const options = {
      baseUrl: 'http://host:port/kie_server_context',
      username: 'yourAdminUsername',
      password: 'yourAdminPassword'
    };

    client = client(options);

    client.info().then(x => console.log(x.msg));

    let container = {
      "container-id": "bgold",
      "release-id": {
        "version": "1.0",
        "group-id": "org.bgold.kieserver",
        "artifact-id": "bgold"
      }
    };

    client.containerAdd(container).then(x => console.log(x.msg));

    let commands = {
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

## API Documentation

http://bucharest-gold.github.io/drools-kie-client/

If you have the github rights to do it, you can publish the API documentation by running
`./build/publish-docs.sh`. This script will generate the documentation, then clone this
repository into a temporary directory, checkout the `gh-pages` branch and update it with
the newly generated documentation.


[1]: http://docs.jboss.org/drools/release/6.4.0.Final/drools-docs/html/ch22.html#d0e24633