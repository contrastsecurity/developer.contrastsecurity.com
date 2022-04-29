---
title: CWE
---

CWE is a [Common Weakness Enumeration](https://cwe.mitre.org/data/definitions/699.html). This represents the abstract vulnerability rather than a specific instance.

## Can my application have a CWE

Yes. Most custom applications do not go through the entire CVE assignment process so it is easier to say something like, "this application has a [CWE name] vulnerability.

## Relationship between CVE and CWE

SQL Injection is a CWE because it is a type of vulnerability. When an application is vulnerable to SQL Injection, that instance of [SQL Injection](https://cwe.mitre.org/data/definitions/89.html) may be assigned a CVE. The cardinality between CWE to CVE is generally one-to-many.

## Choosing Which CWE to Use

Some CVEs may look similar. They often contain a heirarchy - it's most important to follow the heirarchy to the point that it can be understood and not be overly pedantic.

For example, CWE-89 is SQL Injection. There is a child-type for the popular ORM framework Hibernate (CWE-564 Hibernate injection) but it's not necessary to use. Not every ORM framework will have its own CWE so the focus of any discussion or report should be on how well it can be understood and acted upon rather than if there is maybe a more appropriate CWE.
