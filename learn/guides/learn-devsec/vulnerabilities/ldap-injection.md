---
title: LDAP Injection
---

## What Is It?

LDAP Injection occurs when remote attacker input can reach LDAP queries, changing the query to return different (or more) results.

## When Can It Affect My Application?

LDAP Injection occurs in applications that directly query LDAP systems, most often for user lookup or authentication.
When remote input can change the LDAP query, attackers can often gain access to more objects within the LDAP directory.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can monitor applications as they are tested to detect LDAP Injection vulnerabilities.

## How Do I Fix It?

LDAP Injection is most often fixed by creating an allow-list of characters and ensuring proper escaping.
Most APIs do not provide parameterized LDAP queries.

## How Do People Attack Using This Flaw?

Attackers often look for signs of an LDAP query on input and add attitional characters to change records.ac