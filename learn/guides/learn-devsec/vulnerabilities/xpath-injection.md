---
title: XPath Injection
---

## What Is It?

XPath Injection lets attackers access parts of an XML document that may contain additional information that they should not have.
By modifying the XPath query, attackers can obtain this additional, possibly sensitive data.

## When Can It Affect My Application?

XPath Injection affects applications that process XML documents and query those documents through the XPath syntax.
XPath Injection does not impact applications that do not parse XML, but similar vulnerabilities exist for other document query languages.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect if users can control XPath queries as an application is tested.

## How Do I Fix It?

Developers should create an allow-list of permitted XPath queries rather than using input as the query.
If user input must go into the query, consider using an allow-list of what is permitted.

## How Do People Attack Using This Flaw?

Attackers often attempt to inject query control characters for XPath queries.
These will often leave a trailing ' character to balance the injection. It is difficult to create a deny-list of characters to stop the attack.
```xml
account' or true or 'a'='
```