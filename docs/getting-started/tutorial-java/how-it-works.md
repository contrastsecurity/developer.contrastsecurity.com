---
sidebar_position: 10
---

# How it works

The build phase components leverage static scanning of build artifacts. Details of each can be located in the product documentation.

At test and production, Contrast looks inside the application through Instrumentation, an API that has been in Java since JDK 1.5 (2004). This is part of the [Java SE Standard APIs](https://docs.oracle.com/en/java/javase/17/docs/api/java.instrument/java/lang/instrument/package-summary.html) and is fully functional with any Java distribution.

See more about [how it works and how we test](../how-it-works/index.md)