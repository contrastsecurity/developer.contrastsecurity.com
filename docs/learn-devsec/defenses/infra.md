# Infrastructure Security

Infrastructure is elements like networks, storage, and other items that enable applications to run.

Securing applications is different than securing an infrastructure because remote attackers need an entrypoint to the infrastructure, and insecure applications provide this access. While a secure infrastructure may prevent lateral movement to compromise other assets, attackers can still often gain access to sensitive data 

## Infrastructure as code

Infrastructure as code is part of the AWS pillar of operational excellence. It is a great way to move quickly and validate the security and connections of an infrastructure. Application security concerns remain the same with infrastructure as code -- what are you putting into the infrastructure?

## Infrastructure concerns for developers

Many security-sensitive assets are part of the system, not the infrastructure. System commands, files, or anything to which the operator is provisioned. If someone can compromise the app, they can take whatever that app has.

- Ensure that secure applications are deployed on a secure infrastructure.
- Ensure that there is a way to detect application-level breaches that occur within the infrastructure.
- Leverage the infrastructure to prevent lateral movements if an application is breached.

## References

- [AWS Reachability Analyzer](https://docs.aws.amazon.com/vpc/latest/reachability/getting-started.html) to evaluate the possobility of lateral movements across VPCs.