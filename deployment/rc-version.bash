#!/bin/bash

# Capture the output of the node command in a variable
version=$(node -p "require('./package.json').version")

commit=$(git log -1 --pretty=%H)

echo $version-rc.$commit

cd ./build

tag "$version-rc.$commit"
git pusho "$version-rc.$commit" -f
