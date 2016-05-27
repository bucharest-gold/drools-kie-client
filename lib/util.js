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

function util() {

  function handleOptions(options) {
    
    let baseUrl = options.baseUrl || 'http://localhost:8080';
    let username = options.username || 'kieserver';
    let password = options.password || 'kieserver1!';
    let body = options.body;
    
    const result = {
      baseUrl: baseUrl,
      json: true,
      body: body,
      headers: {
        'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
      }
    };
    return result;
  }

  return Object.freeze({
    handleOptions
  });

}

module.exports = util();
