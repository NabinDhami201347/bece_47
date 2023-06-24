---
title: "DBMS_Assignment 3"
description: "Nested queries, also known as subqueries, are queries that are embedded within another query. They allow you to retrieve data from one query and use it as input or conditions for another query. Nested queries are a powerful feature in SQL that can help you perform complex data retrieval and manipulation."
pubDate: "June 17, 2023"
heroImage: "https://acropolium.com/img/articles/emergency-operation-center-software-development/img06.jpg"
---

Subqueries, also known as nested queries, are a fundamental concept in SQL that allow you to embed one query within another. They provide a powerful way to retrieve data from one query and use it as input or conditions for another query. Subqueries can be used in various parts of a SQL statement, including the WHERE clause, SELECT clause, JOIN conditions, and FROM clause. SQL subqueries, also known as nested queries, allow you to embed one query within another in SQL. They provide several benefits, including data filtering, data retrieval from related tables, complex calculations, aggregation, and data modification. Subqueries enable you to selectively retrieve specific rows based on criteria, establish connections between tables, perform computations using query results, calculate aggregate functions, and modify data based on query results. However, it's important to optimize queries and consider performance implications when using subqueries. Overall, subqueries enhance the flexibility and capabilities of SQL queries.

```sql
   SELECT *
   FROM employees
   WHERE department_id IN (
       SELECT department_id
       FROM departments
       WHERE location = 'New York'
   );
```

> **_This query retrieves all employees from the "employees" table who belong to departments located in New York._**

```sql
SELECT product_name, unit_price
FROM products
WHERE unit_price > (
    SELECT AVG(unit_price)
    FROM products
);
```

> **_This query retrieves the product names and unit prices from the "products" table where the unit price is higher than the average unit price of all products._**

```sql
SELECT department_name, (
    SELECT COUNT(*)
    FROM employees
    WHERE employees.department_id = departments.department_id
) AS num_employees
FROM departments;
```

> **_This query retrieves the department names and the number of employees in each department by using a subquery to calculate the count of employees for each department. Subqueries are a versatile tool that allows you to perform complex data retrieval and manipulation in SQL. However, it's crucial to optimize queries and use appropriate indexes to ensure efficient execution, especially when dealing with large datasets._**

---

## Consider the Insurance Database, where the primary keys are underlined. Construct the following SQL queries for this relational database.

![Insurance Database](/database/tutorial3_1.png)

### Find the total number of people who owned cars that were involved in accidents in 2020

```sql
SELECT COUNT (distinct driver-id)
FROM accident, participated,
WHERE accident.report_number = participated.report_number
AND date between ’2020-01-01’ AND ’2020-12-31’

SELECT COUNT(driver-id)
FROM accident NATURAL JOIN participated
WHERE date between “2020-1-1” AND “2020-12-30”;
```

### Find the number of accidents in which the cars belonging to “Black Smith” were involved.

```sql
SELECT COUNT (DISTINCT *)
FROM accident
WHERE EXISTS

SELECT *
FROM participated, person
WHERE participated.driver-id = person.driver_id
AND person.name = ’Black Smith’
AND accident.report_number = participated.report_number)
```

### Delete the Range Rover belonging to “Black Smith”.

```sql
DELETE
FROM car
WHERE model = ’Ranje Rover’ and license in

SELECT license
FROM person p, owns o
WHERE p.name = ’John Smith’ AND p.driver_id = o.driver_id)

DELETE
FROM person NATURAL JOIN car NATURAL JOIN owns
WHERE name=”Black Smith” AND model=”Range Rover”;
```

### Update the damage amount for the car with license number “AABB2001” in the accident with report number “BR3197” to $4000

```sql
UPDATE participated
SET damage-amount = 4000
WHERE report_number = “BR2197” AND driver_id in

SELECT driver-id
FROM owns
WHERE license = “AABB2001”)
```

---

## Consider the Employee Database , where the primary keys are underlined. Give an expression in SQL for each of the following queries.

![Employee Database](/database/tutorial3_2.png)

### Find the names of all employees who work for First Bank Corporation.

```sql
SELECT employee-name
FROM works
wHERE company-name = ’First Bank Corporation’
```

### Find the names and cities of residence of all employees who work for First Bank Corporation.

```sql
SELECT e.employee-name, city
FROM employee e, works w
wHERE w.company-name = ’First Bank Corporation’ AND
w.employee-name = e.employee-name
```

### Find the names, street addresses, and cities of residence of all employees who work for First Bank Corporation and earn more than $10,000.

```sql
SELECT *
FROM employee
wHERE employee-name in

SELECT employee-name
FROM works
wHERE company-name = ’First Bank Corporation’ AND salary > 10000)
```

### Find all employees in the database who live in the same cities as the companies for which they work.

```sql
SELECT e.employee-name
FROM employee e, works w, company c
wHERE e.employee-name = w.employee-name AND e.city = c.city AND
w.company_name = c.company_name
```

### Find all employees in the database who live in the same cities and on the same streets as do their managers.

```sql
SELECT P.employee_name
FROM employee P, employee R, manages M
wHERE P.employee_name = M.employee_name AND
M.manager_name = R.employee_name AND
P.street = R.street AND P.city = R.city

CREATE VIEW managerInfo AS
SELECT employee_name ,street,city
FROM employee,manages
WHERE employee.employee_name=manages.managername);

SELECT e.employee_name
FROM employee e, managerinfo m
WHERE e.employee_name=m.employee_name AND e.city=m.city AND e.street=m.street
```

### Find all employees in the database who do not work for First Bank Corporation.

```sql
SELECT employee_name
FROM works
wHERE company_name < > ’First Bank Corporation’
```

### Find all employees in the database who earn more than each employee of Small Bank Corporation.

```sql
SELECT employee_name
FROM works
wHERE salary > all

SELECT salary
FROM works
wHERE company_name = ’Small Bank Corporation’)
```

### Find the company that has the smallest payroll.

```sql
SELECT company_name
FROM works
GROUP BY company_name
HAVING sum (salary) <= all
SELECT sum (salary)
FROM works
GROUP BY company_name)

SELECT company_name, sum(salary) AS payroll
FROM works
GROUP BY company_name ORDER BY payroll LIMIT 1;
```

### Find those companies whose employees earn a higher salary, on average, than the average salary at First Bank Corporation.

```sql
SELECT company_name
FROM works
GROUP BY company_name
HAVING avg (salary) >
( SELECT avg (salary)
FROM works
wHERE company_name = ’First Bank Corporation’)
```

### Modify the database so that Jones now lives in Newtown.

```sql
UPDATE employee
SET city = ’Newton’
wHERE person_name = ’Jones’
```

### Give all employees of First Bank Corporation a 10 percent raise.

```sql
UPDATE works
SET salary = salary * 1.1
wHERE company_name = ’First Bank Corporation’
```

### Give all managers of First Bank Corporation a 10 percent raise.

```sql
UPDATE works
SET salary = salary * 1.1
wHERE employee_name IN
(SELECT manager_name
FROM manages)
AND company_name = ’First Bank Corporation’.
```

### Delete all tuples in the works relation for employees of Small Bank Corporation.

```sql
DELETE
FROM works
wHERE company_name = ’Small Bank Corporation’
```
