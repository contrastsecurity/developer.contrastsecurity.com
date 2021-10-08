import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Integrations</h1>
        <p className="hero__subtitle">INFUSE SECURITY INTO YOUR APPLICATIONS USING
OUR INTEGRATIONS AND PLATFORM EXTENSIBILITY TOOLS</p>
      </div>
    </header>
  );
}

const IntegrationItems = [
    {
      title: 'Cloud Integrations',
      description: (<>Run your application with Contrast while still deploying on your favorite PaaS.</>
      ),
      integrations: [
        {
            title: 'Cloud Foundry',
            links: [{text: 'For Node.js', to: 'https://docs.contrastsecurity.com/installation-nodeintegrations.html#cloud-foundry'}, 
                    {text: 'For Java', to: 'https://docs.contrastsecurity.com/en/vmware-tanzu-network-for-java.html'}]
        },
        {
            title: 'Microsoft Azure',
            links: [{text: 'For .NET', to: 'https://docs.contrastsecurity.com/installation-netusage.html#azure'}, {text: 'For .NET Core', to: 'https://docs.contrastsecurity.com/installation-netcoreusage.html#netcore-usage-azure'}]
        },
        {
            title: 'Google App Engine',
            links: [{text: 'For Java', to: 'https://docs.contrastsecurity.com/en/google-app-engine.html'}]
        },
        {
            title: 'Elastic Beanstalk',
            links: [{text: 'For Java', to: 'https://docs.contrastsecurity.com/en/aws-elastic-beanstalk.html'}]
        }
      ]
    },
    {
        title: 'Chat Tools',
        description: (<>Be the first to know about new vulnerabilities in or active attacks against your application as Contrast discovers these security issues in real-time.</>
        ),
        integrations: [
            {
                title: 'Microsoft Teams',
                links: [{text: 'MyText', to: '/somewhere'}, {text: 'Second', to: '/elsewhere'}]
            },
            {
                title: 'Slack',
                links: [{text: 'For .NET', to: '/somewhere'}, {text: 'For .NET Core', to: '/elsewhere'}]
            }
        ]
    },
    {
        title: 'Continuous Integration and Build Tools',
        description: (<>Add application security gates into your automated pipelines to prevent vulnerabilities from getting deployed into production environments.</>
        ),
        integrations: [
            {
                title: 'Jenkins',
                links: [{text: 'Jenkins Plugin', to: 'https://plugins.jenkins.io/contrast-continuous-application-security'}, {text: 'Source code', to: 'https://github.com/jenkinsci/contrast-continuous-application-security-plugin'},
                  {text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/jenkins.html'}]
            },
            {
                title: 'Azure DevOps',
                links: [{text: 'Azure Marketplace', to: 'https://marketplace.visualstudio.com/items?itemName=contrast-security.contrast-integration'}, {text: 'Documentation', to: 'https://marketplace.visualstudio.com/items?itemName=contrast-security.contrast-integration'}]
            },
            {
                title: 'Circle CI',
                links: [{text: 'Orb Registry', to: 'https://circleci.com/orbs/registry/orb/contrastsecurity/verify'}, {text: 'Source Code', to: 'https://github.com/Contrast-Security-OSS/contrast-security-orb'}]
            },
            {
                title: 'Bamboo',
                links: [{text: 'Atlassian Marketplace', to: 'https://marketplace.atlassian.com/apps/1219111/contrast-security-for-bamboo?hosting=server&tab=overview'},
                  {text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/contrast-bamboo-plugin'},
                  {text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/bamboo.html'}]
            },
            {
                title: 'Maven',
                links: [{text: 'Maven Central', to: 'https://search.maven.org/search?q=a:contrast-maven-plugin'},
                        {text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/contrast-maven-plugin'},
                        {text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/maven.html'},
                        {text: 'Sample Project', to: 'https://github.com/Contrast-Security-OSS/vulnerable-spring-boot-application'}
                      ]
            },
            {
                title: 'Gradle',
                links: [{text: 'gradle.org', to: 'https://plugins.gradle.org/plugin/com.contrastsecurity.contrastplugin'}, {text: 'Source Code', to: 'https://github.com/Contrast-Security-OSS/contrast-gradle-plugin'},
                  {text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/gradle.html'}, {text: 'Sample Project', to: 'https://github.com/Contrast-Security-OSS/Contrast-Sample-Gradle-Application'}]
            }
        ]
    },
    {
      title: 'Work Tracking Platforms',
      description: (<>Ensure that application vulnerabilities will get remediated by having tickets created for resolving each security issue.</>
      ),
      integrations: [
          {
              title: 'GitHub',
              links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/github.html'}]
          },
          {
            title: 'Azure Boards',
            links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/azure-boards.html'}]
          },
          {
            title: 'Jira',
            links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/jira-integration.html'}]
          },
          {
            title: 'CA Agile Central',
            links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/agile-central.html'}]
          },
          {
            title: 'Bugzilla',
            links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/bugzilla.html'}]
          },
          {
            title: 'Serena',
            links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/serena-business-manager.html'}]
          }
      ]
    },
    {
      title: 'Work Tracking Platforms',
      description: (<>Learn about your applications' vulnerabilities and receive remediation guidance while in your favorite development environment.</>
      ),
      integrations: [
        {
            title: 'Visual Studio Code',
            links: [{text: 'Marketplace', to: 'https://marketplace.visualstudio.com/items?itemName=ContrastSecurity.contrastsecurity'}]
        },
        {
          title: 'Visual Studio',
          links: [{text: 'Marketplace', to: 'https://marketplace.visualstudio.com/items?itemName=contrast-security.contrast-vs-ext'}]
        },
        {
          title: 'Visual Studio for Mac',
          links: [{text: 'Extension file', to: 'https://github.com/Contrast-Security-OSS/contrast-vsmac-plugin-distro/releases'}]
        },
        {
          title: 'IntelliJ',
          links: [{text: 'Marketplace', to: 'https://plugins.jetbrains.com/plugin/10335-contrast'}]
        },
        {
          title: 'Eclipse',
          links: [{text: 'Marketplace', to: 'https://marketplace.eclipse.org/content/contrast-eclipse'}, {text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/ide-plugin-eclipse2'}]
        },
      ]
    },
    {
      title: 'Incident Management Systems',
      description: (<>Be confident that on-call personnel will be equipped to take necessary action against attacks on your application.</>
      ),
      integrations: [
        {
            title: 'PagerDuty',
            links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/pagerduty.html'}]
        },
        {
          title: 'VictorOps',
          links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/victorops.html'}]
      },
      ]
    },
    {
      title: 'Security Information and Event Management (SIEM) Tools',
      description: (<>Receive directly in your SIEM operational insights into application security threats from Contrast's instrumentation activities.</>
      ),
      integrations: [
        {
            title: 'Splunk',
            links: [{text: 'Marketplace', to: 'https://splunkbase.splunk.com/app/4140/'}, {text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/ContrastSplunkApp'}]
        },
        {
          title: 'Sumo Logic',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/ContrastSumoLogicDashboards'}]
        },
        {
          title: 'DataDog',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/ContrastDataDogDashboard'}]
        },
      ]
    },
    {
      title: 'Extend the Contrast Platform',
      description: (<>Use Contrast's SDKs and Webhooks to build custom services and/or notify them upon the discovery of new vulnerabilities or attacks using Webhooks.</>
      ),
      integrations: [
        {
            title: 'Java SDK',
            links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/contrast-sdk-java'}]
        },
        {
          title: 'JavaScript SDK',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/contrast-sdk-javascript'}, {text: 'NPM', to: 'https://www.npmjs.com/package/contrast-sdk'}]
        },
        {
          title: 'Python SDK',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/contrast-sdk-python'}]
        },
        {
          title: '.NET SDK',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/contrast-sdk-dotnet'}, {text: 'NuGet', to: 'https://www.nuget.org/packages/ContrastRestClient/'}]
        },
        {
          title: 'Webhook',
          links: [{text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/generic-webhooks.html'}]
        },
        {
          title: 'Contrast CLI',
          links: [{text: 'NPM', to: 'https://www.npmjs.com/package/@contrast/contrast-cli'}, {text: 'Documentation', to: 'https://docs.contrastsecurity.com/en/contrast-cli.html'}]
        },
      ]
    },
    {
      title: 'Vulnerability Aggregators',
      description: (<>Vulnerability management platforms with which Contrast is compatible.</>
      ),
      integrations: [
        {
            title: 'ThreadFix',
            links: [{text: 'Contrast Integration', to: 'https://threadfix.it/integrations/?_sft_scanner=interactive-iast'}]
        },
        {
          title: 'CodeDx',
          links: [{text: 'Contrast Integration', to: 'https://codedx.com/blog/whats-coming-in-code-dx-2-4/'}]
      },
      ]
    },
    {
      title: 'Testing',
      description: (<>Tools that Contrast uses to test applications.</>
      ),
      integrations: [
        {
            title: 'Sheepdog',
            links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/sheepdog'}]
        },
        {
          title: 'Node Test Bench Apps',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/NodeTestBenches'}]
        },
        {
          title: 'Hapi 16 Test Bench',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/Hapi16TestBench'}]
        },
        {
          title: 'Node Dvnr',
          links: [{text: 'Source code', to: 'https://github.com/Contrast-Security-OSS/node-dvnr'}]
        },
      ]
    }
]

function makeImageName(name){
  return require('./' + name.replace(/\W/g, '').toLowerCase() + '.png').default
}

function IntegrationItem({title, links}) {
    return (
      <div className={clsx('col', styles.integration)}>
        <h4>{title}</h4>
        <img src={makeImageName(title)} alt="image" className={clsx(styles.logo)} />
        <div className={clsx('links')}>
            {links.map((props, idx) => (
                <><a href={props.to}>{props.text}</a><br/></>
                ))}
        </div>
      </div>
    );
  }

function IntegrationCategory({title, description, integrations}) {
    return (
      <div className={clsx('col col--4 row', styles.fullWidth)}>
        <div className={clsx("text--center padding-horiz--md", styles.fullWidth)}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={clsx(styles.category, styles.fullWidth)}>
            {integrations.map((props, idx) => (
                <IntegrationItem key={idx} {...props} />
                ))}
            </div>
        </div>
      </div>
    );
  }

function IntegrationList() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div>
            {IntegrationItems.map((props, idx) => (
              <IntegrationCategory key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Contrast Security - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <IntegrationList />
      </main>
    </Layout>
  );
}
