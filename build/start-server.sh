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

if [ ! -d "../drools-workshop" ] 
then
    git clone https://github.com/Salaboy/drools-workshop.git
    cd drools-workshop/drools-server-swarm/
    mvn clean install -q
    cd ../../
fi

cd drools-workshop/drools-server-swarm/target
java -Djava.net.preferIPv4Stack=true -Dkie.maven.settings.custom=../src/main/resources/settings.xml -jar drools-server-swarm-1.0-SNAPSHOT-swarm.jar > ../../../drools.log 2>&1 &

waitForServer