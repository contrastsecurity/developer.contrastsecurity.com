---
title: Command Injection
---

## What Is It?
Command Injection occurs when attackers can control system commands. Most often this occurs when user input is used as parameters to system utility calls.

## When Can It Affect My Application?

Command Injection can affect your application when user input is passed into methods that execute system commands.

```
var input = //something that reads remote input
var command = "cat " + input
exec(command)
```

## How Do I Know If and Where I Have This Vulnerability?

Contrast Scan can evaluate your code and determine at build time if you introduce a Command Injection vulnerability.

Contrast Assess can monitor your running code to determine if you have any Command Injection flaws in your code.

Contrast Protect can defend any SQL Injection flaws against exploitation by monitoring the Command APIs.

## How Do I Fix It?

The primary method for fixing Command Injection is to either avoid adding user input to system commands, or to create a tight allow-list of what can be passed to the command.

## How Do People Attack Using This Flaw?

Command Injection flaws are exploited by adding additional commands or flags to the command that attackers figure out. Sometimes this involes the ; separator on Linux systems or the && separator on Windows. Attemping a deny-list of these characters is ineffective and difficult.