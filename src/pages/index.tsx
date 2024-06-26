import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import pog_screen from "@site/static/img/pog_screen.png";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--prßimary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{color:'white'}}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>pog guides you through the setup of your kmk firmware on compatible keyboards (see requirements). Your fully working custom firmware is only minutes away.</p>
        <img src={pog_screen} alt=""/>
        <div>
          <a className={styles.button} target="_blank" href='https://github.com/janlunge/pog/releases'>Download</a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="pog guides you through the setup of your kmk firmware on compatible keyboards">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
