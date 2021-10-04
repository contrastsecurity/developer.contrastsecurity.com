# Learn Security

Security is a vast large topic across many disciplines. The best way to learn about security is to focus on things relevant to what you are working on and learn security in context.

Another approach is to focus on defense of your application and its assets. There are many attacks. Attacks change and many of them will not impact you. Many of the attacks that can impact you will be similar in nature.

## Security and Developer Responsibility

Application developers are responsible for the security of the code: how it handles sensitive data and how it interacts with the environment.

In a cloud environment, application developers follow models such as the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/). Cloud customers are responsible for:
- Customer data
- Platforms, Applications, Identity & Access Management
- Operating System, Network & Firewall Management
- Client-side data encryption & Data integrity authentication
- Server-side encryption (file system and/or data)
- Networking traffic protection (encryption integrity, identity)

Specifically when writing software, developers are responsible for:
- Libraries used by the application
- Custom code of the application and interaction with libraries
- Any runtime used to execute the code
- Middleware components shared between microservices

## Approaches to Security

## Software Bill of Materials (SBOM)

An SBOM is a list of software used to create an application. By gathering a list of components, users can look at these components to determine if the software contains any known vulnerabilities. When a new vulnerability is discovered, software owners can check the SBOMs for their software to see if it impacts them.

SBOMs deal with libraries, runtimes, and often middleware.

### Threat Modeling

Threat modeling is a means of looking at an application to determine what data it has, how it is exposed, and what can go wrong. Thread models should start with automation to establish a scope and can then be paired with brainstorming to expand upon the automated model.

Threat modeling deals most often with custom code and middleware.