#!/bin/bash
while IFS='|' read -r string_hash string_comment; do
  curl -L -w "\n" --user $SECRET_USER:$SECRET_PWD -X PUT -H "Content-Type: application/json" --data "{\"comment\": \"$string_comment\"}" $1$string_hash
done < $(dirname $0)/hashed_data.txt
