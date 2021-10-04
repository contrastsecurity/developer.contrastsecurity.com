---
sidebar_position: 10
---

# How it works

Contrast uses the [.NET Profiler API](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview) to monitor application execution. This API enables Contrast to extract code/debug-level insight that help developers fully understand any issues that are reported.

Within an application, Contrast adds calls to methods within the .NET APIs as well as specific frameworks to provide security context about the security impact of the API or its 