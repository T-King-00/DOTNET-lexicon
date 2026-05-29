#!/bin/bash

git merge react
git add .
git add react/dist -f
git commit --allow-empty-message
git push origin deployment
git push --force-with-lease origin $(git subtree split --prefix react/dist):deploymentWeb

