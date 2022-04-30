---
title: Learn DevSec
---

Learning DevSec is designed for developers who have already started adding DevSec automation to their toolchain and just want to know "the rest."

This contains other bits of information to understand what "security" means in context. The benefit of DevSec is that the security tools make it easier to point your attention at what a piece of security means and when you should pay attention to it.

Security is a vast large topic across many disciplines. The best way to learn about security is to focus on things relevant to what you are working on and learn security in context.

Another approach is to focus on defense of your application and its assets. There are many attacks. Attacks change and many of them will not impact you. Many of the attacks that can impact you will be similar in nature.

## What Developers Do and Don't Do

Application developers are responsible for the security of the code: how it handles sensitive data and how it interacts with the environment.

In a cloud environment, application developers follow models such as the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/). Cloud customers are responsible for:
- Customer data
- Platforms, Applications, Identity & Access Management
- Operating System, Network & Firewall Management
- Client-side data encryption & Data integrity authentication
- Server-side encryption (file system and/or data)
- Networking traffic protection (encryption integrity, identity)

Specifically when writing software, developers are responsible for:
- Libraries used by the application
- Custom code of the application and interaction with libraries
- Any runtime used to execute the code
- Middleware components shared between microservices
- The way that the application interacts with everything else in the shared responsibility model.

## Things You Should Not Do

Security is expansive and security fits into everything. Attacks often change and many attacks, while interesting, are not relevant to your application. Do not start with a vague or broad scope unrelated to things you are working on. Rather than aiming to "learn security," leverage automated tools to hone in what security means in your context and branch out from there.

Developers receive more benefit from defensive security, to build secure applications, rather than offensive security, of learning about attacks.

One simple way to establish this focus is to ask, "what am I defending and what am I defending it from."