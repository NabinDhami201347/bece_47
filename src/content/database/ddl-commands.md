---
title: "Data Definition Language"
description: "Structured Query Language is a special-purpose programming language designed for managing
data held in a RDBMS. Originally based upon relational algebra and relational-calculus constructs, SQL
consists of a data definition language and data manipulation language."
pubDate: "June 9, 2023"
heroImage: "/database/ddl.jpg"
---

```sql
select branch-name, count (distinct customer-name)
from depositor, account
where depositor.account-number = account.account-number
group by branch-name
```

> **_The GROUP BY statement groups rows with the same values into summary rows. The statement is often used with aggregate functions. For example, the code below will display the average age for each name that appears in our customers table._**

## HAVING

**HAVING performs the same action as the WHERE clause. The difference is that HAVING is used for aggregate functions, whereas WHERE doesn’t work with them.**

```sql
SELECT COUNT(customer_id), name
FROM customers
GROUP BY name
HAVING COUNT(customer_id) > 2;
```

> **_The OFFSET statement works with `ORDER BY` and specifies the number of rows to skip before starting to return rows from the query._**

![Image](https://www.novelucent.com/templates/novelucent/images/database-services.jpg)

[SQL Commands](https://www.dataquest.io/blog/sql-commands/)
