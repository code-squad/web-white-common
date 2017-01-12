#!/bin/bash
git pull
rm 2*.md
cp -r ../../Jekyll/_posts/ .
git add .
git commit -m "Update"
git push
