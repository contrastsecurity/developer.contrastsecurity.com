import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css'; 

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Events and Articles</h1>
        <p className="hero__subtitle">Some Tagline</p>
      </div>
    </header>
  );
}

function Events() {
  return (
    <div>
      <div className={clsx(styles.video)}>
        <h2>Securing and Exploiting Java Applications</h2>
        <h3>Bangladesh Java User Group<br/>Foojay World Tour.</h3>
        <p className={clsx(styles.desc)}>OpenJDK 17 makes the interesting decision that deprecating a security feature (the SecurityManager) can actually improve security of the platform and running applications, setting out a path to remove a feature that hasn’t been used and hasn’t blocked many exploits.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/78O8lmS0jRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className={clsx(styles.audio)}>
        <h2>Podcast: Journey to Jakarta</h2>
        <h3>Foojay Podcast</h3>
        <p className={clsx(styles.desc)}>Foojay community members discuss the modernization of Jakarta EE applications from the older Java EE form, including backwards-compatibility, as well as forwards-excitement about cool new developments like Microprofile.</p>
        <div id="buzzsprout-player-9111849"></div><script src="https://www.buzzsprout.com/1815553/9111849-journey-to-jakarta.js?container_id=buzzsprout-player-9111849&player=small" type="text/javascript" charset="utf-8"></script>
      </div>
    </div>
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
        <Events />
      </main>
    </Layout>
  );
}
