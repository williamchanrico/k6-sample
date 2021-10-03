<h3 align="center">Sample <a href="https://github.com/grafana/k6">k6</a> configuration for a quick demonstration.</h3>

<p align="center">
    <a href="https://github.com/k6io/k6/releases">Download</a> ·
    <a href="https://github.com/grafana/k6#install">Install</a> ·
    <a href="https://k6.io/docs">Documentation</a> ·
    <a href="https://community.k6.io/">Community</a>
</p>

## Run

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
