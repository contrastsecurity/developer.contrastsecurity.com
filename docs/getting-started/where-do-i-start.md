---
sidebar_position: 1
---

# Where do I start

There are a few different technologies that developers can use to secure builds. The easiest path for the most success with the least work is:

1. Integrate **composition analysis** at build time to find and upgrade vulnerable dependencies. This automated scanner just shows what to update.
1. Enable **integrated analysis** in your test/QA environment to find unique ways that your application is vulnerable. You don't need a full test suite that covers everything but you do need tests or usage that get the code working to be seen.
1. Use **static analysis** in your build to detect any unique vulnerabilities where you don't have enough tests to be seen by the integrated analyzer.

By following tools in this order you will get good results withous impacting your schedule.

Different developers have different threat models based on the type of application they are building and how it's built. Start by choosing your tech stack to move quickly to how security applies in your project.