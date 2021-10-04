---
sidebar_position: 11
---

# Architecture overview

Contrast consolidates security results into a single dashboard. This dashboard can then share results back to othes systems or team members.

A quick overview is:
- Build tools (OSS and Scan) make all information available to the build tool itself.
- Test tools (Contrast Assess) provide all information to the central console, allowing other tools like IDEs to report security issues as developers encounter them in normal testing.
- Production defense (Protect) reports information to the central console, as well as reporting security issues directly over secure syslog, in CEF format, for security operation teams.

s