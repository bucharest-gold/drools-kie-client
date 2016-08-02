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

module.exports = {
  container: container,
  containerAdd: containerAdd,
  containerDelete: containerDelete,
  containers: containers,
  executeCommand: executeCommand,
  info: info,
  release: release,
  releaseUpdate: releaseUpdate,
  scanner: scanner,
  scannerUpdate: scannerUpdate
};

const roi = require('roi');
const INFO = '/services/rest/server/';
const CONTAINERS = '/services/rest/server/containers/';

/**
* Returns the Execution Server information.
*
* @instance
* @function info
* @returns {Promise} A promise that will resolve with server information.
*/
function info (options) {
  options.endpoint = options.baseUrl + INFO;
  return roi.get(options);
}

/**
* This function is used to create a new Container.
*
* @instance
* @param {object} containerRepresentation - An object representing the container.
* @function containerAdd
* @returns {Promise} A promise that will resolve with the new container created.
*/
function containerAdd (options, containerRepresentation) {
  options.endpoint = options.baseUrl + CONTAINERS + containerRepresentation['container-id'];
  return roi.put(options, containerRepresentation);
}

/**
* This function is used to remove a Conainer.
*
* @instance
* @param {string} id - The ID of the Conainer.
* @function containerDelete
* @returns {Promise} A promise that will resolve with 204 No Content if the delete is successful.
*/
function containerDelete (options, id) {
  options.endpoint = options.baseUrl + CONTAINERS + id;
  return roi.del(options);
}

/**
* Returns information about the Container.
*
* @instance
* @param {string} id - The ID of the Container.
* @function container
* @returns {Promise} A promise that will resolve with container information.
*/
function container (options, id) {
  options.endpoint = options.baseUrl + CONTAINERS + id;
  return roi.get(options);
}

/**
* Returns containers.
*
* @instance
* @function containers
* @returns {Promise} A promise that will resolve with containers.
*/
function containers (options) {
  options.endpoint = options.baseUrl + CONTAINERS;
  return roi.get(options);
}

/**
* Returns the full release id for the Container specified by the id.
*
* @instance
* @param {string} id - The ID of the Container.
* @function release
* @returns {Promise} A promise that will resolve with release information.
*/
function release (options, id) {
  options.endpoint = options.baseUrl + CONTAINERS + id + '/release-id';
  return roi.get(options);
}

/**
* Executes operations and commands against the specified Container.
* @instance
* @function releaseUpdate
* @param {string} id - The ID of the Container.
* @param {object} releaseRepresentation - An object representing release.
* @returns {Promise} A promise that will resolve with release information.
*/
function releaseUpdate (options, id, releaseRepresentation) {
  options.endpoint = options.baseUrl + CONTAINERS + id + '/release-id';
  return roi.post(options, releaseRepresentation);
}

/**
* Allows you to start or stop a scanner that controls polling for updated Container deployments.
* @instance
* @function scannerUpdate
* @param {string} id - The ID of the Container.
* @param {object} scannerRepresentation - An object representing scanner.
* @returns {Promise} A promise that will resolve with scanner information.
*/
function scannerUpdate (options, id, scannerRepresentation) {
  options.endpoint = options.baseUrl + CONTAINERS + id + '/scanner';
  return roi.post(options, scannerRepresentation);
}

/**
* Returns information about the scanner for this Container's automatic updates.
* @instance
* @param {string} id - The ID of the Container.
* @function scanner
* @returns {Promise} A promise that will resolve with release information.
*/
function scanner (options, id) {
  options.endpoint = options.baseUrl + CONTAINERS + id + '/scanner';
  return roi.get(options);
}

/**
* Executes operations and commands against the specified Container.
* @instance
* @function executeCommand
* @param {string} id - The ID of the Container.
* @param {object} commandRepresentation - An object representing command(s).
* @returns {Promise} A promise that will resolve with information about executed command(s).
*/
function executeCommand (options, id, commandRepresentation) {
  options.endpoint = options.baseUrl + CONTAINERS + 'instances/' + id;
  return roi.post(options, commandRepresentation);
}
