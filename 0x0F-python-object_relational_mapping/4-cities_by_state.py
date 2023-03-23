#!/usr/bin/python3


import MySQLdb
from sys import argv

'''
lists all cities from the database hbtn_0e_4_usa
'''
if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost",
                         port=3306,
                         user=argv[1],
                         password=argv[2],
                         database=argv[3])
    cursor = db.cursor()
    cursor.execute("""SELECT cities.id, cities.name, states.name
                    FROM cities
                    LEFT JOIN states ON cities.state_id = states.id
                    ORDER BY cities.id ASC""")
    fetching = cursor.fetchall()
    for i in fetching:
        print(i)
        cursor.close()
        db.close()