---
title: How It Works
sidebar_position: 10
---

The build phase components leverage static scanning of build artifacts. Details of each can be located in the product documentation.

At test and production, Contrast works by having a custom application start command.

When the application starts in Contrast mode, the runtime agent monitors Node classes that are loaded and wraps specific functions with calls around them. This performs an additional security check before and/or after the function while still delegating actual calls to the method itself.

When the application is run without the Contrast runner, there is no performance impact as the agent is not even present.