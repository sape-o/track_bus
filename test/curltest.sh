#!/bin/bash


s="curl -x GET localhost:8000"
i=0
while [ $i -le 10000 ]
do
  curl -X GET localhost:8000
 ((i++))
done

echo "finish"

