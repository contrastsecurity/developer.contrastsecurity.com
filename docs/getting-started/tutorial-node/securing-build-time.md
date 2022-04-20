---
title: "Getting Started: Build-Time Security"
sidebar_position: 2
---

Done by: Application Developer

Time needed: 15 minutes

What you get: Security tools used during your build/package phase can find security early on a standard build or pull request.

## Set up dependency scans
The dependency scanner operates locally, leveraging cloud data for lookups. It identifies vulnerable components and creates a software bill of materials (SBOM).

### Install the scanner (done once)
On a build server, run the following command:

```shell
npm install -g @contrast/contrast-cli
```
### Scanning your dependencies (periodic automation)
This step will give you a repeatable job to locate vulnerable dependencies.

Locate the continuous integration job that compiles and packages your application. For trial use, you may also locate the build script (pom.xml or build.gradle) on your developer system.

Add a step to call the scanner. This will also invoke your build tool's compile step.
```shell
contrast-cli --yamlPath scan.yaml
```
Look for _____ in the output to ensure completion.
Set up your static code scanner
Static code scanning operates in the cloud, locating vulnerabilities for custom code, dependencies, and their interactions. It reports vulnerabilities along relevant code paths to guide understanding and fixes.