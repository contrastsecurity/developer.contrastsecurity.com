import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx(styles.full, 'eventsContainer', 'row', 'is-multiline', 'container')}>
        <div className={clsx('col', 'col--6', styles.heroText)}>
          <h1 className="hero__title">Start Now for Free with Serverless</h1>
          <p className="hero__subtitle">Experience fast, dependable and seamless application security in your serverless environment with Contrast CLI. Get results in less than 3 minutes.</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/get-started">
              Start Now
            </Link>
          </div>
        </div>
        <div className={clsx(styles.heroVideoWrapper, 'col', 'col--6')}>
        <iframe className={clsx(styles.heroVideo)} width="560" height="315" src="https://www.youtube.com/embed/8FwY6zJX1ms" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Contrast Security - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main class={clsx(styles.homepageFeatures)}>
      <header>
        <h1>Securing code made easy for all developers</h1>
        <p>Contrast brings world-class enterprise level security right to the developers doorstep, giving Devs a fast, dependable, and seamless security experience.</p>
      </header>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
