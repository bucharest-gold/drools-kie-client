#/bin/bash

curl -X POST -H 'X-KIE-ContentType: JSON' -H 'Content-type: application/json' -u 'kieserver:kieserver1!' --data @release.json http://localhost:8080/kie-server-6.4.0.Final-ee7/services/rest/server/containers/bgold/release-id