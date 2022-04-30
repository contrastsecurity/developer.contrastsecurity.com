---
title: Log Injection
---

## What Is It?
Log Injection occurs when remote input is used as part of a log statement without sanitization.
Attackers can insert new lines and attempt add additional log statements of things that did not happen or simply pollute the ability of logs to be parsed.

## When Can It Affect My Application?

Log Injection affects applications can affect any application that logs data to files, which is most applications.
Log Injection is commonly a nuisance vulnerability more than a major risk that can compromise an organization.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect log injection vulnerabilities.

## How Do I Fix It?

System operators can stream logs remotely or index logs into systems where things like new lines do not impact the records.

## How Do People Attack Using This Flaw?

Attackers generally append new lines to various parameters and then add custom timestamps that follow common logging conventions.
As a result when someone goes to parse logs as a file, it becomes difficult to read and hides certain actions.