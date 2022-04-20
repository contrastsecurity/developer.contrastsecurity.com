---
title: JNDI
sidebar_position: 1
---

Java Naming and Directory Interface ([JNDI](https://docs.oracle.com/javase/jndi/tutorial/getStarted/overview/index.html)) is a naming structure intended to help systems locate extensible code, often through three ways:

 * RMI / Remote Method Invocation
 * LDAP / Lightweight Directory Access Protocol
 * CORBA / Common Object Request Broker Architecture

## Security Implications of JNDI

JNDI helps systems load remote code, leading to possible Remote Code Execution vulnerabilities. JNDI was the root cause of the [2021 Log4j vulnerability](logging.md).