---
title: Application Security Monitoring
---

Application Security Monitoring is a way of securing applications by working inside of application APIs. This provides a fine-grained level of insight into how an application operates with the ability to offer protection at very precise locations, such as defending file access in the File APIs.

There are two key differentiators of ASM:
1. The ability to see and act on data after it has left the network.
1. The ability to see the impact of an attack and prioritize effective attacks/exploits over ineffective attacks.

The visibility of ASM includes elements such as:
- Record classes that are used during deserialization, to defend deserialization attacks.
- Understanding the exact SQL/NoSQL queries that are run.
- View files and other potentially sensitive assets that are in use.
- Any scripting used by the application, such as JavaScript, OGNL, or various domain-specific languages.

Application Security Monitoring is also known as Runtime Application Self Protection (RASP).

## Developer Involvement

Developers often integrate the Application Security Monitoring Agent into their application, service, or container.

Developers may prioritize fixes to an area where ASM is actively blocking exploitation.

