function App() {
  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="topbar">
              <span className="brand-mark">Clive</span>
              <nav className="hero-nav">
                <a href="#solutions">Solutions</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
              </nav>
            </div>

            <div className="hero-heading">
              <p className="eyebrow">Livestock contracts, done right — from the paddock up</p>
              <h1>Build better contracts for your herd with clear, trusted terms.</h1>
              <p className="hero-copytext">
                Powerful contract tooling designed to make livestock transactions smoother, faster, and more transparent for farmers and traders.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#get-started">Start free trial</a>
                <a className="button button-secondary" href="#learn-more">Learn more</a>
              </div>
            </div>
          </div>

          <aside className="hero-panel-card">
            <p className="card-label">Trusted by the industry</p>
            <div className="card-stat">
              <span>50</span>
              <p>years of livestock market experience</p>
            </div>
            <p className="card-note">
              Expert support, proven contracts, and better outcomes across the supply chain.
            </p>
          </aside>
        </div>
      </header>

      <section className="stats-row">
        <article className="stat-item">
          <span>18,400+</span>
          <p>animals shipped</p>
        </article>
        <article className="stat-item">
          <span>9,200+</span>
          <p>herds covered</p>
        </article>
        <article className="stat-item">
          <span>314,211</span>
          <p>contracts created</p>
        </article>
        <article className="stat-item">
          <span>8</span>
          <p>nationwide partners</p>
        </article>
      </section>

      <section className="feature-section" id="solutions">
        <div className="section-heading">
          <p className="section-eyebrow">Built for how livestock contracts actually work</p>
          <h2>Designed around real farm workflows and market conditions.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-label">Contract setup</div>
            <h3>Set clear terms from the first offer</h3>
            <p>
              Capture weight schedules, delivery windows, quality standards, and payment milestones in one place so everyone can agree before the truck arrives.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-label">Market visibility</div>
            <h3>Track agreements with confidence</h3>
            <p>
              Keep contract status, amendments, and supplier notes visible to your team and partners without losing context in email chains.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
