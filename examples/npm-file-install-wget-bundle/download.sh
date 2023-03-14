#!/bin/sh
echo "perforce-angularjs: downloading asset from private repo"

if [[ -z "$USER" ]]; then
   echo "USER is not set"
   exit 1
fi

if [[ -z "$PASSWORD" ]]; then
   echo "PASSWORD is not set"
   exit 1
fi

if [[ -z "$REGISTRY" ]]; then
   echo "REGISTRY is not set"
   exit 1
fi

if [[ -z "$ANGULARJS_VERSION" ]]; then
    echo "ANGULARJS_VERSION is not set"
    exit 1
fi


FILE=./perforce-angularjs.tgz
if [ ! -f "$FILE" ] || [ ! -s "$FILE" ] ; then
    echo "perforce-angularjs: Does not exist, downloading…"
    wget -q --show-progress -U mozilla -O $FILE --user $USER --password $PASSWORD $REGISTRY/repository/perforce-angularjs-angular/@perforce-angularjs/angularjs/-/angularjs-$ANGULARJS_VERSION.tgz
else
    echo "perforce-angularjs: We already have these assets, skipping download!"
fi
