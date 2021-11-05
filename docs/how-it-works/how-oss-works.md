# How Dependency Scans Work

Dependency scans work with build tools to list all dependencies referenced by the application.
This list, also called an [SBOM](../learn-devsec/finding/sbom), is then compared against a list of known vulnerable libraries.

## How Runtime Dependency Scans Work

Many applications import libraries but do not actually use the libarary or only use a small portion of that code.
Runtime Dependency Scans improve accuracy by watching what code the application loads and driving attention towards code that is actually used.
