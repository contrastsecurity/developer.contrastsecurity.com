---
title: CVE
---

Common Vulnerabilities and Exposures (CVE) represents a known vulnerability, commonly in an application or framework. Most CVEs have known exploits that can be used to attack the application.

When left without any mitigating control, many applications are left vulnerable to attack. Attackers will often crawl around applications with payloads that attack these CVEs. Rather than selecting an application and then locating attacks, this is essentially a search-engine style where attackers just crawl around until they land a hit.

## How Do I Know If I Have a CVE?

The easiest way for developers to see if their application contains a CVE is to create an [SBOM](finding/sbom.md) and compare those entries to the CVE database. This is more easily done by automated tools than humans.

## Does the Absence of CVEs Mean I'm Secure?

The absence of CVEs does not mean the application is secure - it just means that the application does not bring in any known vulnerabilities. The application could take two denpendencies with no CVEs and put them together in an unsafe way.<br/>
In late 2021, Atlassian Confluence leveraged an OGNL library with no CVEs but let the OGNL scripting engine run code based on remote query string input. While no CVE was present, Confluence was vulnerable to arbitrary code execution.

## Does the Presence of a CVE Mean That I'm Insecure?

The presence of a CVE usually means that the application is insecure.<br/>
Applications often import many dependencies but do not use all of the code from every dependency. In some cases applications may not load the vulnerable code. In this case teams can prioritize other security work ahead of this library since it is unused. At other times it is less work to patch and remove the CVE than to debate.
