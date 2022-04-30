---
title: Untrusted Deserialization
---

## What Is It?

Untrusted Deserialization occurs when an application deserializes remote data and executes code instructions from the incoming data as part of the process. This results in a remote code execution flaw when attackers embed custom commands into the serialized objects.

## When Can It Affect My Application?

Untrusted Deserialization affects many applications because serialization is often done by a third party library or framework that the application relies on. This vulnerability can occur if any part of the application deserializes data.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Scan can detect if an application has Untrusted Deserialization by looking at its code.

Contrast Assess can detect if an application has Untrusted Deserialization as it is tested.

Contrast Protect can permit trusted serialization while blocking untrusted deserialization from exploiting a running system.

## How Do I Fix It?

- Patch any libraries that have serialization flaws.
- Use any serialization filters to create an allow-list of classes.
- Use an alternate serialization format that does not mix data and code.

## How Do People Attack Using This Flaw?

Various tools exist to attack deserialization flaws, such as [ysoserial](https://github.com/frohoff/ysoserial) and [ysoserial.net](https://github.com/pwntester/ysoserial.net).

Deserialization [attack cheat sheets](https://github.com/GrrrDog/Java-Deserialization-Cheat-Sheet) exist for various languages.