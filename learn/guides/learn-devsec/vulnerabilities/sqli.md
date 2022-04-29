---
title: SQL Injection
---

## What is SQL Injection

SQL Injection (SQLi) is a vulnerability where remote users can take control of a query sent to your database. Most often the attack aims to bypass authentication, access other records to steal data, or sometimes execute commands on the SQL server.

## When can SQL Injection affect my application

SQL Injection can affect your application when user input is placed as part of the query rather than as a parameter of the query.

```sql
Good Query:
SELECT * FROM users WHERE username=? AND hashed_password=?

BAD Query:
SELECT * FROM users WHERE username=concatenatedUsername AND hashed_password=concatenatedPassword
```

## How do I know if/where my application has a SQL Injection vulnerability

Contrast Scan can evaluate your code and determine at build time if you introduce a SQL Injection vulnerability.

Contrast Assess can monitor your running code to determine if you have any SQL Injection flaws in your code.

Contrast Protect can defend any SQL Injection flaws against exploitation by monitoring the SQL APIs.

## How do I fix SQL Injection

There are two primary ways to fix SQL Injection:
- Parameterize queries, adding input to the parameter instead of concatenating Strings into the query.
- Use indirect selection of known-safe allow-lists for items that cannot be parameterized.

When an analyzer detect the flaw in your application, it will suggest a more context-sensitive recommendation based on your code.

## How do people attack SQL Injection flaws

Most often attackers inject ' and -- or other encoded characters that become part of the query. Attemping a deny-list by watching for these characters is ineffective and difficult.

On SQL Servers, attackers may attempt to access the [xp_cmdshell](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/xp-cmdshell-transact-sql?view=sql-server-ver15) to run system commands.

- [MySQL SQL Injection Cheat Sheet](http://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet)