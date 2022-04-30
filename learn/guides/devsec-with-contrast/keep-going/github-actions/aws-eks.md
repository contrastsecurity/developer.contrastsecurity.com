---
title: AWS EKS
sidebar_position: 1
---

This article covers an ultra-quick way to get started with incorporating security into your existing developer onboarding via GitHub Actions, Contrast Security and Amazon EKS.

GitHub Actions are quickly becoming a staple in automating the application lifecycle. Whether you’re a part of an organization looking to scale workflows across the entire breadth of your business in the Cloud or a developer looking to get a leg up by incorporating new technologies and best practices into your automation stack, GitHub Actions and AWS have you covered.

## Prerequisites
This step-by-step guide assumes you will be instrumenting Contrast Security with a containerized Java application that will be deployed to an Amazon Elastic Kubernetes Service (EKS) PaaS Environment.

In order to work with the Contrast Security EKS GitHub Action, you will need the following in place:

 * An EKS cluster
 * A GitHub account
 * Contrast Security License
 * Contrast Security API Connection Details
 * Amazon Service Details

Further details can be found in the Documentation section of this blog.

## Steps
Let’s get started by creating two repository secrets for our Contrast Security and Amazon credentials named `CONRAST_CREDS_FILE` and `AWS_CREDS_FILE` respectively.

_Note - The repository secrets will need to be in JSON format._

The contents of the CONTRAST_CREDS_FILE contain details necessary for the Contrast Agent to communicate with the central Contrast Security Team Server:

 * contrast_api_url
 * contrast_api_username
 * contrast_api_api_key
 * contrast_api_service_key
 * contrast_agent_java_standalone_app_name
 * contrast_application_version

The AWS_CREDS_FILE repository secret contains the following Amazon resource details necessary to interact with the EKS Service:

 * aws_access_key_id
 * aws_secret_access_key
 * aws_region - region where the cluster is deployed
 * aws_container_registry - URL used for the container registry

_Note - Traditional access key for authentication is used, the GitHub action is being currently updated for token auth._

![EKS Secrets](aws-ga-secrets.png)

Next, we will paste the following workflow YAML and create a new file in the location `.github/workflows/main.yml`. This YAML is a basic workflow that will pull the specified github repository code locally onto the GitHub Action Runner. Once the code is pulled locally, the Contrast Security EKS GitHub Action will build and deploy a containerized PetClinic Java application with a Contrast Security Agent baked inside. The [sample repository](https://github.com/admiralappsec/eks-github-actions-demo) can be cloned or browsed, and the location of the workflow YAML is under the `workflow` directory.

```yaml
name: Build and Deploy Java app to Amazon Elastic Kubernetes Service

on:
  push:
    branches:
      - main

env:
  IMAGE_NAME_TAG: 'eks-petclinic-testing:contrast-demo-1'
  APPLICATION_MANIFEST: '/example/kubernetes/petclinic.yaml'
  APPLICATION_DOCKERFILE: '/example/docker/Dockerfile'
  CLUSTER_NAME: 'eks-testing-ga'
  APPLICATION_ARTIFACT: '/example/docker/spring-petclinic-1.5.1.jar'

jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2
    - name: Contrast Security Amazon Elastic Kubernetes Service Build-Deploy
      uses: Contrast-Security-OSS/integration-eks-github-action@main
      id: contrast-build-deploy
      with:
        application-manifest: ${{ env.APPLICATION_MANIFEST }}
        application-dockerfile: ${{ env.APPLICATION_DOCKERFILE }}
        application-output-image-name-tag: ${{ env.IMAGE_NAME_TAG }}
        cluster-name: ${{ env.CLUSTER_NAME }}
        contrast-security-credentials-file: ${{ secrets.CONTRAST_CREDS_FILE }}
        aws-credentials-file: ${{ secrets.AWS_CREDS_FILE }}
        application-artifact: ${{ env.APPLICATION_ARTIFACT }}
```

The workflow file above will trigger on all commits to the `main` branch. Looking at the inputs associated with the GitHub Action, you’ll need to make sure the following are passed:

 * Application-manifest - location of the kubernetes manifest
 * Application-dockerfile - location of the dockerfile
 * Application-output-image-name-tag - name of the resulting container image with Contrast baked inside
 * Cluster-name - name of the EKS cluster
 * Contrast-security-credentials-file - location of the Contrast Security credentials file
 * AWS-credentials-file - location of the AWS credentials file
 * Application-artifact - artifacts associated with the docker build (dockerfile needs)

Commit this file and go to the ‘Actions’ tab and watch the action work!

_Note - the GitHub Actions setting must be set to ‘allow’ on the repository itself, and this can be found under the ‘Settings’ tab._

The action should complete within 2-3 minutes. When completed, open the job and towards the end of the STDOUT, you will see links to your deployed service. Click the link.

![EKS Log](aws-ga-log-output.png)

You should see the application up and running.

![App Running](spring-boot-petclinic-landing-page.png)

Navigate to the Contrast Security UI and you will see the application’s security posture start to populate the screen.

![EKS Secrets](contast-ui-f-screen-shot.png)

## Documentation:

Example Contrast Security Credential File:

```yaml
{
    "contrast_api_url":"xxx",
    "contrast_api_username": "xxx",
    "contrast_api_api_key": "xxx",
    "contrast_api_service_key": "xxx",
    "contrast_agent_java_standalone_app_name": "xxx",
    "contrast_application_version": "xxx"
}
```

Example AWS Credential File:

```yaml
{
  "aws_access_key_id": "xxx",
  "aws_secret_access_key": "xxx",
  "aws_region": "xxx",
  "aws_container_registry": "xxx"
}
```

Documentation can be found at these locations:

 * [Marketplace](https://github.com/marketplace/actions/contrast-security-eks-build-deploy)
 * [Action Repository](https://github.com/Contrast-Security-OSS/integration-eks-github-action)
 * [Example Code Repository](https://github.com/admiralappsec/eks-github-actions-demo)
 * [Contrast Security Website](https://contrastsecurity.com/)
 * [Contrast Security Docs](https://docs.contrastsecurity.com/?lang=en)
 * [Contrast Security Developer Hub](https://developer.contrastsecurity.com/)