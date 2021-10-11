---
sidebar_position: 1
---

# Where do I start

There are a few different technologies that developers can use to secure builds. The easiest path for the most success with the least work is:
![diagram](where-do-i-start.svg)

1. At *build/package time*, **check dependencies** to find known vulnerabilities. This automated scanner just shows what to update.
1. When you *test your code*, enable **integrated analysis**  to find unique ways that your application is vulnerable. You don't need a full test suite that covers everything but you do need tests or usage that get the code working to be seen.
1. Also at *build time*, use **static analysis** in your build to detect any unique vulnerabilities where you don't have enough tests to be seen by the integrated analyzer. You can do this the same time as checking dependencies but doing it last gives fewer results.

Different developers have different threat models based on the type of application they are building and how it's built. Start by choosing your tech stack to move quickly to how security applies in your project.

## Set Up Your Free Account

Developers with a commercial Contrast subscription should log in to the Contrast tenant for their orgranization.<br/>
Developers looking to start on security can create a free [Contrast Community Edition Account](https://www.contrastsecurity.com/contrast-community-edition)
