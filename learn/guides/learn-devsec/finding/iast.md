---
title: IAST
---

Interactive Application Security Testing is a technique that embeds monitoring into running software to extract security-relevant information. This technique has a high level of accuracy because it simply observes what the runtime does and reports back.

**Contrast Assess** is an IAST analyzer.

## Benefits and Drawbacks of IAST

### Benefits
- IAST has a high accuracy rate and low false positive rate.
- IAST has a high level of visibility to detect issues anywhere in the code.

### Drawbacks
- IAST requires code execution, making it better for teams that test their software.
- IAST has a performance impact limited to the environment being tested, making it harder for teams who test in production.

## Comparisons to Other Detections

### Comparison to Static Analysis

Both IAST and Static Analysis provide code-level intelligence.

Static Analysis generates results without any code execution. IAST requires code to execute.
- Because code does not execute, Static Analysis must make some assumptions about how code is put together. This leads to false positives or negatives in static analysis results.
- IAST has higher accuracy than static analysis because it does not need to make any assumptions.
- IAST can trace moving data through bulk collections list Lists, Sets, and Maps. Static Analysis must make an educated guess to propagate data flow.


### Comparison to Dynamic Scanners

Dynamic Scanners generally test an application with various attack payloads. These scanners rely on messages that come back to the client, basing their detection on a combination of URL, input, and output.<br/>
- Where a Dynamic Scanner requires input sent backh to a client, IAST can locate a vulnerability regardless of data sent back.
- Dynamic Scanners often lack context when multiple URLs (such as a wildcardh) reach the same code endpoint. By watching the backend, IAST recognizes duplicative work.
- Dynamic Scanners generate their own usage to attack the application. IAST requires something using the application (such as a dynamic scanner, crawler, or user) to generate results.

Dynamic Scanners often face a significant amount of difficulty when evaluating REST or GraphQL applicaions, especially when paired with single page web applications (SPAs). As the scanner modifies data with attack payloads these often encounter difficulty from not knowing the API object format