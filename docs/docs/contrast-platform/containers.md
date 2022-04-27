---
title: Containerized Apps
sidebar_position: 8
---

Security starts with what goes into the container. By securing the code that's inside the container, developers can:
- Prevent data loss associated with their code.
- Map assets used by their code, understanding the security implications of how code services connect.
- Layer defense with the security of the container.

To secure your containerized application on Kubernetes or Docker, select your development language and integrate when the container is created (most often at CI).

### App Security compared to Sidecar

Application Security is different than a sidecar pattern because a sidecar operates in tandem with the container to see inputs/outputs. When app security is implemented *inside* the container, the detection/defense can adjust based on how the container acts with its input. When the security sidecar is implemented *outside* the application, it cannot observe resources and actions that occur in the processing of input.
