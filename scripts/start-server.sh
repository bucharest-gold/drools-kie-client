#!/bin/bash

function waitForServer {
  # Give the server some time to start up. Look for a well-known
  # bit of text in the log file. Try at most 50 times before giving up.
  C=50
  while [ $C -gt 0 ]
  do
    grep "Admin console listening on" kie.log
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

if [ -f "kie-server-6.5.0.Final-ee6.war" ]
then
  rm *.war
  rm -Rf wildfly-10.0.0.Final
fi

cd test/fixtures/kjar
mvn clean install
cd ../kjar2
mvn clean install
cd ../../../
if [ ! -f "wildfly-10.0.0.Final.zip" ]
then 
  wget http://download.jboss.org/wildfly/10.0.0.Final/wildfly-10.0.0.Final.zip
fi
unzip -qq wildfly-10.0.0.Final.zip
if [ ! -f "kie-server-distribution-6.5.0.Final.zip" ]
then 
  wget https://download.jboss.org/drools/release/6.5.0.Final/kie-server-distribution-6.5.0.Final.zip
fi
unzip -qq kie-server-distribution-6.5.0.Final.zip
cp kie-server-6.5.0.Final-ee7.war wildfly-10.0.0.Final/standalone/deployments/
./wildfly-10.0.0.Final/bin/add-user.sh -a -u kieserver -p kieserver1! -g admin,kie-server
./wildfly-10.0.0.Final/bin/standalone.sh  -c standalone-full.xml -Dorg.kie.server.id=bgold-kie-server -Djava.net.preferIPv4Stack=true > kie.log 2>&1 &

sleep 1

waitForServer