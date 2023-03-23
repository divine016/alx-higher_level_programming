#!/usr/bin/python3


import MySQLdb
from sys import argv

'''
Once again, write a script that takes in arguments and
displays all values in the states table of hbtn_0e_0_usa
where name matches the argument. But this time, 
write one that is safe from MySQL injections!
'''
if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost",
                         port=3306,
                         user=argv[1],
                         password=argv[2],
                         database=argv[3])
    cursor = db.cursor()
    cursor.execute(
        "SELECT * FROM states WHERE name LIKE %s ORDER BY id ASC",
        (argv[4],)
        )
    fetching = cursor.fetchall()
    for i in fetching:
        print(i)