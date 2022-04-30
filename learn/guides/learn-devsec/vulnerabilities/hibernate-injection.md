---
title: Hibernate Injection
---

## What Is It?

Hibernate Injection is a form of SQL Injection, where user input makes its way to control the Hibernate HQL and then control the database query.
The affects match SQL Injection for stealing records, altering data, etc.

## When Can It Affect My Application?

Hibernate Injection can only affect applications using Hibernate, limiting it to Java and .NET.
The vulnerability occurs in dynamically created HQL queries that add user input to the query. It does not occur in parameterized HQL queries, such as those provided by most Hibernate and JPA annotations.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Scan can locate Hibernate Injection vulnerabilities through code scanning.

Contrast Assess can locate Hibernate Injection by watching applications as they are tested.

Contrast Protect can defend Hibernate Injection in production applications.

## How Do I Fix It?

HQL queries should be parameterized through the proper syntax. When a query cannot be parameterized, it should be matched against an allow-list.

## How Do People Attack Using This Flaw?

Hibernate Injection is attackes by appending different HQL statements to user input.