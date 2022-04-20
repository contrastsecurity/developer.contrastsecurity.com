---
title: Shading
sidebar_position: 3
---

# Shading

[Shading](https://maven.apache.org/plugins/maven-shade-plugin/) is the act of consolidating many parts of an application into one. Shading has two parts:

 * Consolidate many JARs into one.
 * Relocate classes to a different name.

Shading is common in applications or libraries for easier distribution (as one file) and to avoid conflicts (where two libraries need the same namespace).

## Fat JARs

Fat JARs or Uber JARs consolidate all dependencies into a single file. Rather than providing an application as multiple pieces, all dependencies get migrated into one single large file.

## Relocated Classes

When a JAR is shaded, developers will commonly [relocate classes](https://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html) to a new namespace. This enables one library to use its own version of a component, while another library uses a different version of the library.

### Example of when Shading/Relocation is necessary

An application needs two libraries: A and B.

Library A needs one version of Jackson, while Library B needs a different version of Jackson. Both libraries work fine on their own but they do not work when both A and B are used together.

In this case a developer would shade the versions to make Jackson-A and Jackson-B. These could co-exist because they use different names and do not conflict.

## Impact on Security

Many composition analysis tools rely on standard names, either of the JAR file itself or the classes inside it.

 1. When shading is used, the JAR file names will not be there and the compisition analyzer will not correctly report the library.
 2. When relocation is used, the class file names will be different and are harder to detect.