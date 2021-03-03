import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.scss';



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>

            <div className="container">
              <div className="row">
      <p>"I'd like to congratulate drugs; for winning the war on drugs"</p>

      <p>It has become clear, through billions of dollars of well-orchestrated operations against the illegal drug market - it is still thriving. No amount of criminalization has ebbed the flow of recreational substances. The current global estimate for illegal drug industry <a href="https://en.wikipedia.org/wiki/Illegal_drug_trade">$321.6 Billion</a> as of 2003, which is around 1% of global trade   </p>
</div></div>

        
      </main>
    </Layout>
  );
}

export default Home;
