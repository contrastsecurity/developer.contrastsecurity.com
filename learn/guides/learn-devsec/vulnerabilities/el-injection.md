---
title: "Expression Language Injection / EL Injection"
---

## What Is It?

Expression Language Injection occurs when a remote attacker can get their input into the processing of Expression Language processing to run their own code.
This is a type of code injection because it lets attackers run code of their choosing on your server.

## When Can It Affect My Application?

EL Injection affects applications that use the Expression Language. Most often this is in Java EE web applications.
Other languages generally do not use Expression Language but would be vulnerable if they run user input as code in any domain-specific language.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess monitors execution and can detect EL Injection vulnerabilities.

Contrast Protect can defend EL Injection vulnerabilities.

## How Do I Fix It?

Developers should avoid running remote input as part of Expression Language statements. Instead, build specific features as a capability that acts on input rather than running code.

## How Do People Attack Using This Flaw?

Attackers often attempt to provide new Expression Language statements. A common route is to try to execute system commands:
```
{Runtime.exec("command")}
```