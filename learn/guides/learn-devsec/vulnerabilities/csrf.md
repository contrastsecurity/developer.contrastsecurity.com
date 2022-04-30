---
title: Cross Site Request Forgery
---

## What Is It?

Cross Site Request Forgery occurs when attackers can trick a user's browser to submit requests to your application that are processed as normal usage. This causes them to take action unknowingly that affects their account.

Most often this will reference an 1x1 image in your application with parameters to take any GET action, or a hidden form to take a POST action.

## When Can It Affect My Application?

CSRF occurs in an application that just processes user requests without any checks. Because browsers send cookies in any request, these cross-site requests will often appear authenticated. When a logged in user at your side can submit actions by navigating on other sites (that reference your site), your application is vulnerable.

## How Do I Know If and Where I Have This Vulnerability?

Contrast Assess can monitor requests of your application and determine if the application checks origins or items that will block CSRF vulnerabilities.

## How Do I Fix It?

You can block CSRF vulnerabilities by:
- Checking the origin of web requests against allowed domains for form POSTs, similar to CORS.
- Not taking actions based on GET requests.
- Using HTTP Headers that are not permitted across domains, such as header application/json instead of form POSTs.

## How Do People Attack Using This Flaw?

Attackers will place request instructions on their own web pages that reference your application. These requests will fail for non-logged in users but may succeed for those who are logged in.

```html
<img src="https://you.example.com/app/action?knownParameter=attack" style="display:none">
```