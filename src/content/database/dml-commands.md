---
title: "Data Manipulation Language"
description: "SQL forms the Cartesian product of the relations named in the from clause, performs a relational-
algebra selection using the where clause predicate, and then projects the result onto the attributes of the select clause."
pubDate: "June 9, 2023"
heroImage: "/database/ddl.jpg"
---

```sql
select branch-name, count (distinct customer-name)
from depositor, account
where depositor.account-number = account.account-number
group by branch-name
```

```sql
select depositor.customer-name, avg (balance)
from depositor, account, customer
where depositor.account-number = account.account-number and
depositor.customer-name = customer.customer-name and
customer-city = ’Harrison’
group by depositor.customer-name
having count (distinct depositor.account-number) >= 3
```

```sql
select distinct customer-name
from borrower, loan
where borrower.loan-number = loan.loan-number and
branch-name = ’Perryridge’ and
(branch-name, customer-name) in
(select branch-name, customer-name
from depositor, account
where depositor.account-number = account.account-number)
```
