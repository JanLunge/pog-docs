#!/bin/bash

# Load environment variables from .env
set -a
source .env.production

# Read version from package.json using jq
VERSION=$(cat package.json | jq -r .version)
set +a

# Run your Nomad jobs
nomad run -var-file=.env.production -var="VERSION=${VERSION}" pog-docs.hcl

# Unset the environment variables
unset $(cat .env.production | cut -d '=' -f1)
unset VERSION
true