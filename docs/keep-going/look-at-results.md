# Look at Results

Who: Developer and/or Security Teams, often independently.<br/>
Time Needed: Variable but generally 30 min or under.<br/>
What you get: Clear security results that you can fix

Security results are made available in a central console for review, where they can integrate into other systems.<br/>
Developers benefit from looking at security results because they can act on and fix any issues.
Security teams benefit from looking at results to understand where they can help. from using the analyzer to improving architecture by partnering up.

Results can be viewed in several ways:
- Through a web browser (most common)
- Through an IDE plugin (for developers)
- Linked with other systems, such as in-chat links when new vulnerabilities are found.

## Viewing your results (Web)

1. Open your Contrast UI console.
1. Locate your application on the Applications tab.
1. Select the vulnerabilities tab.

## Interpreting a result

Vulnerabilities are split into different severities. Developers focused on fixing vulnerabilities should focus on Critical issues first.

- The **Overview** section explains what the vulnerability is and how it was observed in the application.
- The **Details** tab provides a code-level stacktrace that explains how data moved in the application to locate this vulnerability. This tab contains the most information relevant for developers to fix an issue in code.
- **How to Fix** provides some guidance on what secure code looks like compared to vulnerable code. Developers should compare this against code present on the Details tab.

## Verifying your fix with a re-test

st