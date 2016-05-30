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

const request = require('request');

const handleResult = (error, response, body, resolve, reject) => {
  if (error) {
    return reject(error);
  }
  if (!body) {
    return resolve(response.statusCode);
  }
  if (body.errorCode) {
    return reject(body.message);
  }
  return resolve(body);
};

const get = (options) => {
  return new Promise((resolve, reject) => {
    request.get(options, (error, response, body) => {
      handleResult(error, response, body, resolve, reject);
    });
  });
};

const put = (options) => {
  return new Promise((resolve, reject) => {
    request.put(options, (error, response, body) => {
      handleResult(error, response, body, resolve, reject);
    });
  });
};

const post = (options) => {
  return new Promise((resolve, reject) => {
    request.post(options, (error, response, body) => {
      handleResult(error, response, body, resolve, reject);
    });
  });
};

const remove = (options) => {
  return new Promise((resolve, reject) => {
    request.del(options, (error, response, body) => {
      handleResult(error, response, body, resolve, reject);
    });
  });
};

module.exports = exports = {
  get: get,
  post: post,
  put: put,
  remove: remove
};