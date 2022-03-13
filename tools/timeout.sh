#!/bin/bash

git config credential.helper store
git config --global credential.helper 'cache --timeout 10000'