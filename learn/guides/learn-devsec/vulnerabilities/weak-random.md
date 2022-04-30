---
title: Weak Random Number Generator
---

## What Is It?

Weak Random Number Generation occurs when an application does not properly seed random data, resulting in an attacker's ability to predict what comes next.

## When Can It Affect My Application?

Weak randomness occurs often when an application developer doesn't seed cryptographic algorithms, seeds with a constant, or just uses a standard "random" number.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect weak random number generation.

## How Do I Fix It?

Developers should use strong sources, such as a secure random number generator or a hardware random number generator.

## How Do People Attack Using This Flaw?

Attackers do not attack random weak number generators directly, rather they watch the distribution of random events to detect patterns.
When those patterns become predictable at an acceptable level of confidence, attackers simply game the system to win often enough and large enough.