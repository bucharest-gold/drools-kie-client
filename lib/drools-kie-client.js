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
 * @param {string} options.baseUrl - The Base url, e.g. http://localhost:8083
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
  
  /**
  * Returns the Execution Server information.
  *
  * @instance
  * @function info.
  * @returns {Promise} A promise that will resolve with server information.
  */
  function info() {
    handleOptions(uris.INFO);
    return get();
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

  return Object.freeze({
    containers,
    info,
  });

}