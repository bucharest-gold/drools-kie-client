# drools-kie-client

Node.js client for Drools KIE server API.

This package provides a Node.js client for the [KIE server API][1].
It is experimental and still a work in progress.

N.B. This module uses ES6 language features, and as such depends on Node.js version 5.x
or higher.


## Usage

    const options = {
      baseUrl: 'http://host:port/kie_server_context',
      username: 'yourAdminUsername',
      password: 'yourAdminPassword'
    };

    client(options).info().then(x => console.log(x.msg));

## You can use to

* Verify the server status.
* List, add, delete containers.
* Execute commands.
* View and update release.
* View and update scanner.


[1]: http://docs.jboss.org/drools/release/6.4.0.Final/drools-docs/html/ch22.html#d0e24633