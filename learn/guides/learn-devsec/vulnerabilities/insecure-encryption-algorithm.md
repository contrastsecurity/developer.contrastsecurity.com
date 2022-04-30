---
title: Insecure Encryption Algorithm
---

## What Is It?

Insecure encryption occurs when an application uses encryption that can be broken or does not adequately defend against brute-force attacks.
As a result, applications do not properly protect their sensitive data.

## When Can It Affect My Application?

Insecure Encryption affects applications that use low encryption. Examples include using the RSA algorithm with a low bit key.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect uses of insecure encryption algorithms by monitoring which algorithms are used and the related key sizes.

## How Do I Fix It?

Fixing insecure encryption algorithms requires development work to isolate the insecure algorithm.
The most effective route is to locate the current acceptable or string version of the algorithm and use it going forward. Use the insecure algorithm only to validate and migrate.

### Example
If you use an insecure RSA implementation and need to decrypt data, use the insecure implementation to decrypt old data and then encrypt it using the stronger version.

## How Do People Attack Using This Flaw?
Attackers cannot target encryption algorithms remotely. Many attackers will try gathering data from breaches in hopes of brute-forcing weak algorithms later.