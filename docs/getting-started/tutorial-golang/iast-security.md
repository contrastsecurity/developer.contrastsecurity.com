---
sidebar_position: 3
---

# Getting Started: Test security

Done by: Application Developer

Time needed: 30 minutes

Frequency: done once for automation

What you get: high accuracy security results based from watching what your app did, with results as they happen.

###  Install tools where the application is compiled

The Contrast Go agent integrates into the compile/package phase of a Go application. Tool installation should be performed in the location where the application is compiled - often a CI/CD server.

Consult documentation to [install the Go agent](https://docs.contrastsecurity.com/en/install-go.html).

### Install the service where the application runs

A separate Contrast Service handles results identified by the security agent, and communication with the Contrast UI. This service often runs on the same test system where the security-aware application runs. If needed, the contrast service can also be run as a side-car.

Consult documentation to [install the Contrast service](https://docs.contrastsecurity.com/en/contrast-service.html).

## Use the application

Security results will appear in the Contrast UI as the application is used. The tests will occus with standard usage and do not require any specialized security test plan.