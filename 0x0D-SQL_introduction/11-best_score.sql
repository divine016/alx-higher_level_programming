--script that lists all records with a score >= 10 in the table order by score
SELECT name, score FROM second_table WHERE score >= 10 ORDER BY score DESC;