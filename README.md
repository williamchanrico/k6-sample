# k6-sample

Sample k6 configuration for a quick demonstration.

## Setup

```sh
# Start Grafana and InfluxDB
docker-compose up -d

# Verify load test script
cat ./test.js

# Verify k6 runtime options
cat ./test.sh

# Let's go!
bash -x ./test.sh
```
