---
title: Continuous Security
sidebar_position: 1
---

Once basic security monitoring and detection are in place, the next steps are:
- Looking at results, scoping where to get started on security.
- Integrating security results with other systems, streamlining the process in CI/CD, Defect Tracking, and other tools.

## Continuous Build Security

Security of composition analysis (SBOM) and static analysis are best done within Continuous Integration servers or on pull requests. The easiest approach for continuous security is:
- Integrate the analyzer at your right point, CI build for SBOM or pull request / nightly build for static analysis.
- Integrate new Critical issues into defect tracking systems automatically.
- Let the analyzer's re-scans verify fixes.

## Continuous Test Security

Continuous security of integrated analysis means that an agent is present in each test environment to detect new issues and identify which have been properly corrected.
- Automate the addition of the integrated analyzer when the application is packaged or deployed, most often in CI.
- Integrate new Critical issues into defect tracking automatically.
- Let auto-remediation close anything previously fixed.

