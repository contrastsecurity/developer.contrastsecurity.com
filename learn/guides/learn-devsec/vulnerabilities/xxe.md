---
title: XML eXternal Entity Injection / XXE
---

## What Is It?

XXE is a flaw in XML parsers where attackers can cause the parser to read its own external files as part of the document.
Attackers often abuse this functionality to access other sensitive system information.

## When Can It Affect My Application?

XXE can affect your application when you process XML documents from remote users. XXE has the most impact if your application retuns the XML document or its contents to the remote user.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can detect XXE misconfigurations as the application is tested.

## How Do I Fix It?

XXE is a flaw in the XML parser. The application parsing XML needs to either turn off extenral entity resolution or use a system where it is disabled by default.
Running an application in chroot may limit the exposure of some XXE attacks by making other files unavailable.

## How Do People Attack Using This Flaw?
When attackers detect that your application parses XML, many will attempt to add external entities:

```xml
<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
```