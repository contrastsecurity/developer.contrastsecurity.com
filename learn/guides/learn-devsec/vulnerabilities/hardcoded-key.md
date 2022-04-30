---
title: Hardcoded Cryptographic Key
---

## What Is It?

A hardcoded cryptographic key flaw is where a developer takes a secret, such as a private key, and statically compiles it into code.
As a result the sensitive key is distributed along with the code where it is less contained than it would be in a secret store or vault.

## When Can It Affect My Application?

Hardcoded Cryptographic Keys can be in any application that deals with secrets. Most often developers add it as an application resource, a String, or a binary code-representation.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Scan can locate hardcoded keys by scanning code and binary artifacts.

Contrast Assess can locate hardcoded keys by observing resources that are in the code or loaded and how they are used.

## How Do I Fix It?

Most developers should store cryptographic keys outside the application in a location such as a secret store or vault.
The application would then access these artifacts as needed, where the vault can log access and rotate keys as needed.

## How Do People Attack Using This Flaw?

The attack is more a design weakness where secrets become more exposed and hard to change.

One attack that some attackers can do is to do their own decompilation or binary scanning of resources to locate keys.