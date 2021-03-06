---
title: Accuracy
sidebar_position: 2
---

All tools focus on a level of high accuracy. Teams with limited time should focus on Critical vulnerabilities with few, if any cases where a tool is wrong.

## Contrast Assess - The Runtime Agent
Accuracy is gained by monitoring code execution and reporting on events that it was able to observe. Accuracy is commonly measured through suites like the entire [OWASP Benchmark](https://owasp.org/www-project-benchmark/).
- Accuracy is higher than static analysis because the observed paths are put together by the runtime (during execution) rather than by the analysis tool.
- Accuracy is higher than dynamic analysis because observation occurs at the API level and does not require information sent back in the response.

## Contrast SCA - The Composition Analyzer
Accuracy is gained by tracking dependencies at two points:
- At build time, the analyzer obtains libraries from the build tool that looks up and downloads dependencies. This data comes from the build tool.
- At run time, the analyzer observes package information for all loaded files. The benefit of run time tracking is the ability to distinguish libraries that are present but not used by the application. This data comes from enumerating the avaliable application libraries and monitoring what is loades.

## Contrast Scan - The Static Analysis Tool
Accuracy is gained by focusing analysis on remotely accessible code endpoints first. Rather than tracing all possible paths to report all possible issues, Contrast Scan looks at the application's attack surface and tracks from there. Accuracy is commonly measured through suites like the [NIST Juliet Suite](https://samate.nist.gov/SARD/testsuite.php)
