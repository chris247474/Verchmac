#!/bin/bash
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin"
exec /opt/homebrew/bin/node "$(dirname "$0")/../node_modules/.bin/next" dev --webpack
