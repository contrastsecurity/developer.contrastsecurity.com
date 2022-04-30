---
title: NoSQL Injection
---

## What Is It?
NoSQL Injection is a situation where a remote attacker can impact the query sent to a NoSQL database: SparQL, JSON documents, Gremlin, or anything else.
NoSQL Injection is similar to SQL Injection where the result is often to obtain additional records.

## When Can It Affect My Application?

NoSQL Injection affects applications that use NoSQL databases. It can occur more frequently with NoSQL databases that permit free-form String input rather than those that parameterize queries.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect NoSQL Injection as an application is tested.

## How Do I Fix It?

For NoSQL databases whose APIs permit parameterization, use the parameterized query with any input.
For NoSQL databases that do not provide parameterized APIs, create an allow-list of characters that can be used.

## How Do People Attack Using This Flaw?

Remote attackers can attack NoSQL Injection flaws by changing or adding query terms.
This can include techniques such as adding JSON attributes or similar means to control other query languages.