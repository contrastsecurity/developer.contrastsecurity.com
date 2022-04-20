---
title: WAF - Web Application Firewall
---

WAFs are a network-level defense that typically operate on layer 7 HTTPS traffic. They typically monitor traffic for a few classes of attack. Cloud providers such as AWS and Azure offer WAF as a standard protection mechanism.
- Network-level attack payloads, such as attacks that perform SQL Injection or XSS.
- Denial of Service attacks.
- SSL Termination and related SSL/TLS attacks.
- Bot detection
- Network pattern analysis

## WAF limitations

The key limitation to WAFs is that they lack context to understand what's behind them and require tuning. While WAFs inspect application-level traffic, they lack visibility into application operation to see how the data is used or if it is used at all. For example, WAFs will alert operators of SQL Injection attacks for NoSQL applications where the attack is not relevant. When WAFs encounter indiscriminate vulnerability crawlers that try many attacks, they often overload any monitoring team with more alerts than a team can handle, even if that team leverages automation.

## Developer Involvement

Most development teams do not engage with WAFs. They may be aware when a WAF is in place but operations and monitoring are often the responsibility of a different team.

### Comparison to Application Security Monitoring

Developers can augment a WAF's network-level protection with Application Security Monitoring inside the application to overcome WAF limitations and defend APIs.