#!/bin/bash
#Write a Bash script that takes in a URL, sends a POST request to the passed URL, and displays the the body
curl -sL "$1" -X POST -d "email=test@gmail.com&subject=I will always be here for PLD"
