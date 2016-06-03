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

const util = require('./util');
const requestHandler = require('./request-handler');
const uris = require('./uris');

/** @module */
module.exports = client;

/**
 * Initializes the Drools KIE client.
 * 
 * @instance
 * @param {object} options - Request options.
 * @param {string} options.baseUrl - The Base url, e.g. http://localhost:8080/kie-server-6.4.0.Final-ee7
 * @param {string} options.username - The username.
 * @param {string} options.password - The password.
 */
function client(options) {
  const handleOptions = (uri) => {
    options = util.handleOptions(options);
    options.uri = uri;
    return options;
  };

  const get = () => requestHandler.get(options);

  const getById = (id) => {
    options.uri += id;
    return requestHandler.get(options);
  };

  const post = () => requestHandler.post(options);

  const put = () => requestHandler.put(options);

  const remove = (id) => {
    options.uri += id;
    return requestHandler.remove(options);
  };

  /**
  * Returns the Execution Server information.
  *
  * @instance
  * @function info
  * @returns {Promise} A promise that will resolve with server information.
  */
  function info() {
    handleOptions(uris.INFO);
    return get();
  }

  /**
  * This function is used to create a new Container. 
  * 
  * @instance
  * @param {object} containerRepresentation - An object representing the container.
  * @function containerAdd
  * @returns {Promise} A promise that will resolve with the new container created.
  */
  function containerAdd(containerRepresentation) {
    handleOptions(uris.CONTAINERS + containerRepresentation['container-id']);
    options.body = containerRepresentation;
    return put();
  }

  /**
  * This function is used to remove a Conainer. 
  * 
  * @instance
  * @param {string} id - The ID of the Conainer.
  * @function containerDelete
  * @returns {Promise} A promise that will resolve with 204 No Content if the delete is successful.
  */
  function containerDelete(id) {
    handleOptions(uris.CONTAINERS);
    return remove(id);
  }

  /**
  * Returns information about the Container. 
  *
  * @instance
  * @param {string} id - The ID of the Container.
  * @function container
  * @returns {Promise} A promise that will resolve with container information.
  */
  function container(id) {
    handleOptions(uris.CONTAINERS);
    return getById(id);
  }

  /**
  * Returns containers.
  *
  * @instance
  * @function containers
  * @returns {Promise} A promise that will resolve with containers.
  */
  function containers() {
    handleOptions(uris.CONTAINERS);
    return get();
  }

  /**
  * Returns the full release id for the Container specified by the id. 
  *
  * @instance
  * @param {string} id - The ID of the Container.
  * @function release
  * @returns {Promise} A promise that will resolve with release information.
  */
  function release(id) {
    handleOptions(uris.CONTAINERS + id + '/release-id');
    return get();
  }

  /**
  * Executes operations and commands against the specified Container.
  * @instance
  * @function releaseUpdate
  * @param {string} id - The ID of the Container.
  * @param {object} releaseRepresentation - An object representing release.
  * @returns {Promise} A promise that will resolve with release information.
  */
  function releaseUpdate(id, releaseRepresentation) {
    handleOptions(uris.CONTAINERS + id + '/release-id');
    options.body = releaseRepresentation;
    return post();
  }

  /**
  * Allows you to start or stop a scanner that controls polling for updated Container deployments.
  * @instance
  * @function scannerUpdate
  * @param {string} id - The ID of the Container.
  * @param {object} scannerRepresentation - An object representing scanner.
  * @returns {Promise} A promise that will resolve with scanner information.
  */
  function scannerUpdate(id, scannerRepresentation) {
    handleOptions(uris.CONTAINERS + id + '/scanner');
    options.body = scannerRepresentation;
    return post();
  }

  /**
  * Returns information about the scanner for this Container's automatic updates.
  * @instance
  * @param {string} id - The ID of the Container.
  * @function scanner
  * @returns {Promise} A promise that will resolve with release information.
  */
  function scanner(id) {
    handleOptions(uris.CONTAINERS + id + '/scanner');
    return get();
  }

  /**
  * Executes operations and commands against the specified Container.
  * @instance
  * @function executeCommand
  * @param {string} id - The ID of the Container.
  * @param {object} commandRepresentation - An object representing command(s).
  * @returns {Promise} A promise that will resolve with information about executed command(s).
  */
  function executeCommand(id, commandRepresentation) {
    handleOptions(uris.CONTAINERS + 'instances/' + id);
    options.body = commandRepresentation;
    return post();
  }

  return Object.freeze({
    container,
    containerAdd,
    containerDelete,
    containers,
    executeCommand,
    info,
    release,
    releaseUpdate,
    scanner,
    scannerUpdate
  });

}
