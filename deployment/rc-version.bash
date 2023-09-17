#!/bin/bash

# Capture the output of the node command in a variable
version=$(node -p "require('./package.json').version") 

# Use the captured version as an argument for npm version
npm version "$version"
