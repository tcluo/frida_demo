#!/bin/sh

find . -type f -name 'agent.js' -exec sed -i '' s/^let\ addr/let\ addr\ =\ $1;/ {} +
