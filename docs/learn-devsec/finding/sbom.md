---
title: SBOM
---

An SBOM is a list of software used to create an application. By gathering a list of components, users can look at these components to determine if the software contains any known vulnerabilities. When a new vulnerability is discovered, software owners can check the SBOMs for their software to see if it impacts them.

## Why are SBOMs important

The generation of SBOMs was part of the [Presidential Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) on May 12, 2021:
>           (vii)   providing a purchaser a Software Bill of Materials (SBOM) for each product directly or by publishing it on a public website;
>          (viii)  participating in a vulnerability disclosure program that includes a reporting and disclosure process;

## SBOM in the Developer Lifecycle

SBOMs are most often created at the application build phase. When a build tool or dependency management tool gathers all dependencies/libraries, a tool writes logs each dependency and library in a common format.

---
## Additional Material

- [SPDX, the Software Package Data eXchange](https://www.ntia.doc.gov/blog/2021/ntia-releases-minimum-elements-software-bill-materials). A format standard for SBOMs.
- [NTIA Releases Minimum Elements for a Software Bill of Materials](https://www.ntia.doc.gov/blog/2021/ntia-releases-minimum-elements-software-bill-materials)
