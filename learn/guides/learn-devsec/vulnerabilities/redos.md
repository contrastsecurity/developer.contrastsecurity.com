---
title: Regular Expression Denial of Service (ReDoS)
---

## What Is It?

Regular Expression Denial of Service occurs when attackers can control either the regular expression or data in a way that intentionally generates performance bad enough to harm system availability.

## When Can It Affect My Application?

ReDoS impacts applications that parse data with regular expressions and is most common in regular expressions with back references.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect ReDoS vulnerabilities at test time.

## How Do I Fix It?

Developers should not permit remote users to control the regular expression itself. The developer should provide the regular expression, which can be improved as needed.

## How Do People Attack Using This Flaw?

When attackers can control a regular expression, they can submit a regex and data that will consume 100% CPU and block all other operations.
The following code [attempts to validate an email address](https://blog.superhuman.com/how-to-eliminate-regular-expression-denial-of-service/) but also locks a system up completely.
```regex
/("[^"]*"|[^@])*@[^@]*/
```