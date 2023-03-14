#!/bin/sh
echo "perforce-angularjs: downloading asset from private repo"

PackagesList=(
    angular
    angular-animate
    angular-aria
    angular-cookies
    angular-i18n
    angular-loader
    angular-message-format
    angular-messages
    angular-mocks
    angular-parse-ext
    angular-resource
    angular-route
    angular-sanitize
    angular-touch
)

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

mkdir -p vendor

for packageName in ${PackagesList[*]}; do

    FILE=./vendor/$packageName.tgz
    if [ ! -f "$FILE" ] || [ ! -s "$FILE" ] ; then
        echo "$packageName Does not exist, downloading…"
        wget -q --show-progress -U mozilla -O $FILE --user $USER --password $PASSWORD $REGISTRY/repository/perforce-angularjs-angular/@perforce-angularjs/$packageName/-/$packageName-$ANGULARJS_VERSION.tgz
    else
        echo "$packageName: We already have these assets, skipping download!"
    fi

done
