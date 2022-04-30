---
title: Contrast CLI
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Scan your AWS Lambda functions and ensure security for policy permissions, dependencies and your code. Get started with three easy steps!

## Step 1 &ndash; Install

Open a command-prompt or terminal, then install with [NPM](https://npmjs.com) or [Homebrew](https://brew.sh/):

<Tabs>
<TabItem value="1" label="NPM">

```shell
npm install -g @contrast/contrast
```

</TabItem>
<TabItem value="2" label="Homebrew">

```shell
brew tap contrastsecurity/tap
brew install contrast
```

</TabItem>
</Tabs>

## Step 2 &ndash; Authenticate

Authenticate using your existing [GitHub](https://github.com) or [Google](https://google.com) account.

```
contrast auth
```

## Step 3 &ndash; Scan

Use `contrast lambda` to scan your AWS Lambda functions:

```
contrast lambda --function-name MyFunctionName --region my-aws-region
```

![image](https://user-images.githubusercontent.com/289035/165555050-e9a709c9-f2a9-4edc-a064-8208445238bc.png)

### AWS Policy

Make sure you have the following AWS permissions enabled:

 * Lambda: [GetFunction](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html), [GetLayerVersion](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html)
 * IAM: [GetRolePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html), [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html), [GetPolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html), [ListRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html), [ListAttachedRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html)

Here is an example AWS policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetPolicyVersion",
                "iam:GetPolicy",
                "lambda:GetLayerVersion",
                "lambda:GetFunction",
                "iam:ListAttachedRolePolicies",
                "iam:ListRolePolicies",
                "iam:GetRolePolicy"
            ],
            "Resource": [
                "arn:aws:lambda:*:YOUR_ACCOUNT:layer:*:*",
                "arn:aws:lambda:*:YOUR_ACCOUNT:function:*",
                "arn:aws:iam::YOUR_ACCOUNT:role/*",
                "arn:aws:iam::YOUR_ACCOUNT:policy/*"
            ]
        }
    ]
}
```

### AWS Credentials

The Contrast CLI can find your AWS credentials in one of the following ways:

 * Configured in your user profile (usually `~/.aws/credentials`)
 * Using the `--profile` flag (`contrast lambda --profile myProfile`)
 * Using `AWS_DEFAULT_REGION`, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables

For more information on how to use the `lambda` command, run `contrast help`.

```shell
contrast lambda --function-name myFunctionName
contrast lambda -f myFunctionName --region eu-central-1
contrast lambda -f myFunctionName --region eu-central-1 --profile myDevProfile
contrast lambda -f myFunctionName -v -j -r eu-central-1 -p myDevProfile
contrast lambda --function-name myFunctionName --verbose --json-output --region eu-central-1 --profile myDevProfile
```