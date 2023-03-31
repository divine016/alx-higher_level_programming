#!/bin/bash
#send a delete request to the url passed as the first argument
curl -sfL "$1" -X GET
