# drools-kie-client

Node.js client for Drools KIE server API.

This package provides a Node.js client for the [KIE server API][1].
It is experimental and still a work in progress.

N.B. This module uses ES6 language features, and as such depends on Node.js version 5.x
or higher.

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

## You can use to

* Verify the server status.
* List, add, delete containers.
* Execute commands.
* View and update release.
* View and update scanner.

## API Documentation

http://bucharest-gold.github.io/drooks-kie-client/

If you have the github rights to do it, you can publish the API documentation by running
`./build/publish-docs.sh`. This script will generate the documentation, then clone this
repository into a temporary directory, checkout the `gh-pages` branch and update it with
the newly generated documentation.

## Development & Testing

To run the tests, you'll need to run`./build/start-server.sh`. This script will download and start
wildfly 8x and kie-server distribution.

Then just run the tests.

    make test

To stop the server, run `./build/stop-server.sh`.

[1]: http://docs.jboss.org/drools/release/6.4.0.Final/drools-docs/html/ch22.html#d0e24633