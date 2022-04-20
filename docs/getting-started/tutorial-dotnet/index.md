---
title: How It Works for .NET and .NET Core
sidebar_position: 1
---

Contrast provides a service that analyzes .NET and .NET Core applications on Windows and Linux.

## Windows Service

To secure your application, Contrast will install a Windows service. This service will monitor IIS and IIS Express to engage each application with a customized security profiler.

The service is named "Contrast.NET Main Service" within the services control panel. Once installed, the service monitors all .NET applications with the opportunity to add exclusions.

![Contrast.NET Service](dotnet-service.png)

The security profiler will monitor API execution to for security events, and supports simultaneous use of other profilers through [Profiler Chaining](https://docs.contrastsecurity.com/en/-net-framework-profiler-chaining.html).

## Linux

The techniques to engage .NET Core on Linux are similar to Windows. All work is focused on the [Common Language Runtime (CLR)](https://docs.microsoft.com/en-us/dotnet/standard/clr).

## References

[.NET Profiler API](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview)
[Profiler Chaining .NET](https://docs.contrastsecurity.com/en/-net-framework-profiler-chaining.html)
[Profiler Chaining .NET Core](https://docs.contrastsecurity.com/en/-net-core-profiler-chaining.html)