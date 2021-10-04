---
sidebar_position: 3
---

# Getting Started: Test security

Done by: Application Developer<br/>
Time needed: 15 minutes<br/>
Frequency: done once for automation<br/>
What you get: high accuracy security results based from watching what your app did, with results as they happen.

###  Integrate the agent into startup

1. Install the agent
  ```shell
  npm install @contrast/agent --no-optional
  ```
1. Update the scripts to instrument the application:
  ```javascript title="package.json"
    "scripts": {
      "contrast": "node -r @contrast/agent <app-main>.js",
      "start": ...,
      "test": ...
  }
  ```
1. To test, start your application with:
  ```shell
  npm run contrast
  ```
  To use the application as normal, use the regular call. Contrast will have no performance impact when it is not engaged.


## Reference Documentation
For reference documentation, please consult the installation guide:
- [Manual Installation](https://docs.contrastsecurity.com/en/install-node-js-manually.html)
- [Container-specific options](https://docs.contrastsecurity.com/en/install-node-js-agent-in-a-container.html)
- [IBM cloud](https://docs.contrastsecurity.com/en/ibm-cloud.html)
- [Details about transpilers, Typescript, and source maps](https://docs.contrastsecurity.com/en/transpilers,-compilers-and-the-node-js-agent.html)