#!/bin/bash

curl -L --user $SECRET_USER:$SECRET_PWD -X GET $1 > $(dirname $0)/hashmap.json
