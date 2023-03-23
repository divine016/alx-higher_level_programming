#!/usr/bin/python3


import MySQLdb
from sys import argv

'''
Write a script that lists all states 
from the database hbtn_0e_0_usa
'''
if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost",
                         port=3306,
                         user=argv[1],
                         password=argv[2],
                         database=argv[3])
    cursor = db.cursor()
    cursor.execute("SELECT * FROM states ORDER BY id ASC")
    fetching = cursor.fetchall()
    for i in fetching:
        print(i)