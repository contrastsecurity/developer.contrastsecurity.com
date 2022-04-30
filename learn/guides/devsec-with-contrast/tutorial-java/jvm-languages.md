---
title: JVM Languages
sidebar_position: 11
---

# JVM Languages

Developers working in Java, Kotlin, or Scala can use the same agent.

## No Configuration Needed

When using Contrast to evaluate the security of your application, there is no configuration needed. The tech stack itself auto-detects the right integration and runtime language semantics used by the application as it loads its classes.

The list of [Java supported platforms](https://docs.contrastsecurity.com/en/java-supported-technologies.html) contains the list of JDKs, Java versions, and language/runtime versions that are supported. Contrast is compatible with any Java vendor, OpenJDK, J9, etc.

## Focus on Bytecode

Contrast works by instrumenting the bytecode, making it largely language and version independent. Some language agents implement custom improvements based on frameworks or object types, but Contrast should e considered "generally compatible" with any non-listed JVM language.

All Contrast instrumentation undergoes the [bytecode verification process](https://www.oracle.com/java/technologies/security-in-java.html#:~:text=The%20bytecode%20verifier%20acts%20as,has%20passed%20the%20verifier's%20tests.) to ensure compatibility and ensure operation. The Contrast engineering organization maintains a large corpus of tests across different JVMs and applications, running tests with and without Contrast to ensure there is no compatibility impact and to minimize any performance impact.