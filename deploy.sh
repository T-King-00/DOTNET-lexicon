#!/bin/bash
echo "merging reach branch...."
git merge react

echo "tracking allfiles..."
git add .
git add react/dist -f


echo "commiting with empty msg..."
git commit --allow-empty-message || echo "err"
echo "pushing to remote repo..."
git push origin deployment
echo "pushing react/dist to deploymentWeb branch..."
git push --force-with-lease origin $(git subtree split --prefix react/dist):deploymentWeb

echo "Done."
