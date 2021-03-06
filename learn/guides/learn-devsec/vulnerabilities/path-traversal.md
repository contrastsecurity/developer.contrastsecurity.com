---
title: Path Traversal
---

## What Is It?

Path Traversal enables remote attackers to retrieve different files across a server's file system by controlling arguments sent to file APIs.
It is often used to steal system information.

## When Can It Affect My Application?
Path Traversal occurs when remote input is sent to file APIs that select which file to open for read or write.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Scan can detect Path Traversal vulnerabilities by scanning code.

Contrast Assess can detect Path Traversal vulnerabilities as the application is tested.

Contrast Protect can defent Path Traversal vulnerabilities as the applicaiton runs in production.

## How Do I Fix It?

Developers can avoid adding user input to file APIs. Instead of placing input into the file APIs, consider looking at the file system first and then comparing it to the input.
Another operational technique is to chroot the application so that it cannot access any files outside of a certain area.

## How Do People Attack Using This Flaw?

Attackers often move between directories by using control characters like .. and other encoded types.
Some languages also permit the use of a poison null byte that looks like one file to the higher level language but null-terminates early at the OS's file API.

```shell
../../../etc/passwd\0.txt
```