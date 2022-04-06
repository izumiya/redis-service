#!/usr/bin/env bash
/usr/local/bin/docker-entrypoint.sh redis-server --appendonly yes --requirepass redis
