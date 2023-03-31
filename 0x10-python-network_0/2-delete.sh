#!/bin/bash
#script that send a delete request and recieves the body length
curl -s "$1" -X DELETE
