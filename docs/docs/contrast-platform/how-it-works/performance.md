---
title: Performance
sidebar_position: 3
---

Speed of execution is a crucial to execution. Security tooling performs differently in the three areas:

- When applications are built and packaged, security scans generally add between a few seconds (to scan dependencies) to a few minutes (to scan the code). This can be on all builds or select builds.
- When applications are tested, there is a moderate impact on performance due to the collection of detailed security information. Integrated Application Security Testing tools should be disabled during performance testing and turned on during other automated tests.
- In production, Runtime Protection may add a few milliseconds per request. The performance impact is significantly less than the test phase because less data is collected.

## During your secured build
At build time, two key aspects occur:
- A local scanner inventories resolved dependencies, queries a service, and obtains a list of vulnerabilities that are present in each dependency. This may take a few seconds.
- When a static scan is requested, a utility uploads the fully packaged application to a cloud service, which then performs a static scan. Scans may take a few minutes to complete, when results will become available. If desired, builds can wait for these results to fail a vulnerable build.

Performance considerations of the static scan:
- Scan time is improved relative to common static analyzers because it focuses on accessible code paths (from entry points to where they go) rather than traversing all possible code paths.
- Static scans do not need to run on every build. Select a frequency that is common but not an interference.
   - Teams with infrequent or periodic builds can select every build.
   - Teams with frequent build cycles can run on deployment-oriented builds.
- Scan results can be tracked and merged over time, for example to mark vulnerabilities with mitigating controls. This tracking can prevent these issues from failing future builds.

## While you test

When applications are tested, an automated security agent is woven in to the runtime to watch execution and gather data. The agent contains all security intelligence, so users simply use the application as normal.

The agent performs two actions that impact performance:

- At startup, a quick static analysis is performed during each file load to identify immediate issues and determine where runtime monitoring will go. Applications may experience a slight startup delay of 500ms to one minute. Most applications are a few seconds and time varies with the number of loads. When a relevant class or file is loaded, the security agent will add a statement at the beginning or end of a select functions/methods to perform a security check or improve intelligence of future security checks. Most functions are left alone.
- At runtime, the added checks observe data used by the application to determine any custom risk within the application.

Performance considerations at test time:
- Functionality is equivalent. You do not need to duplicate with and without the agent.
- Performance-related testing should be done without the agent present.

If desired, adding additional memory may improve application performance during the security tests.

## While your app runs (in prod)
Production applications have  highest performance demand and cannot tolerate impact. While the production and test agents use similar technology, performance is significantly different because of what they do with it.

Contrast Protect addresses production performance by changing the audience and adjusting the level of data collection. Unlike Test where the audience is a human, the agent becomes the audience and it gathers enough data for three goals:
- Allow the action/request (most common), is the action either considered safe or not unsafe enough to block. In this case the agent has minimal impact.
- Block the action, is there enough data available to deem the action unsafe and worth blocking.
- Report the action asynchronously, does enough information exist that the action is in-between safe and unsafe but merits a record. In this case the report is async to allow the original request to continue without delay.

Unlike performance at test, the agent does not collect as much data in-between when data enter the system and when it makes one of these decisions. As a result performance is similar to an unprotected application.