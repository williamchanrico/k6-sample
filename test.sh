#!/usr/bin/env bash

export K6_DISCARD_RESPONSE_BODIES="true"
export K6_NO_CONNECTION_REUSE="false"
export K6_DNS="ttl=60s,select=random,policy=preferIPv4"
export K6_RPS=10
export K6_DURATION=10s
export K6_VUS=1
export K6_OUT=influxdb=http://localhost:8086/k6

k6 run test.js
