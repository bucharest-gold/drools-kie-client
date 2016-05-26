#!/bin/bash

function waitForServer {
  # Give the server some time to start up. Look for a well-known
  # bit of text in the log file. Try at most 50 times before giving up.
  C=50
  while [ $C -gt 0 ]
  do
    grep "Deployed" drools.log
    if [ $? -eq 0 ]; then
      echo "Server started."
      C=0
    else
      echo -n "."
      C=$(( $C - 1 ))
    fi
    sleep 1
  done
}

docker pull jboss/kie-server-showcase:6.4.0.Final
docker run -p 8080:8080 -d --name kie-server-showcase jboss/kie-server-showcase:6.4.0.Final  > drools.log 2>&1 &

sleep 1

waitForServer