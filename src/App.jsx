import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  const [deployed, setDeployed] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="app">
      {/* Background effects */}
      <div className="grid-bg"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <span className="terminal">&gt;_</span>
          mentu.dev
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Available for DevOps opportunities
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">
            <span>01</span> DEVOPS INTERN • CLOUD • AUTOMATION
          </p>

          <h1>
            Hi, I'm <span>Parth Vaishnav</span>
          </h1>

          <h2>
            Building, deploying & automating
            <br />
            things in the cloud.
          </h2>

          <p className="description">
            This website is deployed using an AWS-based CI/CD architecture
            with <strong>S3</strong> for static hosting and{' '}
            <strong>CloudFront</strong> for global content delivery.
          </p>

          <div className="buttons">
            <a href="#deployment" className="primary-btn">
              View Deployment →
            </a>

            <a href="#about" className="secondary-btn">
              About Me
            </a>
          </div>
        </div>

        {/* Terminal Card */}
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>deployment.sh</span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="green">$</span> whoami
            </p>
            <p className="output">Parth Vaishnav</p>

            <p>
              <span className="green">$</span> cat stack.txt
            </p>

            <p className="output">
              React + Vite
              <br />
              AWS S3
              <br />
              AWS CloudFront
              <br />
              Git & GitHub
              <br />
              CI/CD
            </p>

            <p>
              <span className="green">$</span> ./deploy.sh
            </p>

            <p className="success">
              ✓ Build successful
              <br />
              ✓ Uploaded to S3
              <br />
              ✓ CloudFront distribution updated
              <br />
              <span className="cursor">█</span>
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">02 / ABOUT</p>

        <div className="about-grid">
          <div>
            <h2>
              Learning by
              <br />
              <span>building.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm <strong>Parth Vaishnav</strong>, currently working as a
              DevOps intern and exploring cloud infrastructure, deployment
              automation and modern development workflows.
            </p>

            <p>
              This project is a practical example of deploying a React
              application to AWS — from building the application to serving
              it globally through CloudFront.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Architecture */}
      <section id="deployment" className="section deployment-section">
        <p className="section-label">03 / DEPLOYMENT</p>

        <h2 className="section-title">
          From <span>code</span> to cloud.
        </h2>

        <div className="pipeline">
          <div className="pipeline-card">
            <div className="pipeline-icon">01</div>
            <h3>Code</h3>
            <p>React + Vite application</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-card">
            <div className="pipeline-icon">02</div>
            <h3>Build</h3>
            <p>npm run build</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-card">
            <div className="pipeline-icon">03</div>
            <h3>S3</h3>
            <p>Static assets stored</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-card">
            <div className="pipeline-icon">04</div>
            <h3>CloudFront</h3>
            <p>Global content delivery</p>
          </div>
        </div>

        <div className="deployment-status">
          <div>
            <span className="status-dot"></span>
            <strong>Deployment Status</strong>
          </div>

          <span className="live">
            {deployed ? '● DEPLOYED' : '● LIVE'}
          </span>

          <button onClick={() => setDeployed(!deployed)}>
            {deployed ? 'Re-deploy' : 'Simulate Deploy'}
          </button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <p className="section-label">04 / TOOLBOX</p>

        <h2 className="section-title">
          Technologies I'm <span>working with.</span>
        </h2>

        <div className="tech-grid">
          <div className="tech-card">
            <span>⚛</span>
            <h3>React</h3>
            <p>Frontend</p>
          </div>

          <div className="tech-card">
            <span>⚡</span>
            <h3>Vite</h3>
            <p>Build Tool</p>
          </div>

          <div className="tech-card">
            <span>☁</span>
            <h3>AWS S3</h3>
            <p>Static Hosting</p>
          </div>

          <div className="tech-card">
            <span>🌐</span>
            <h3>CloudFront</h3>
            <p>CDN</p>
          </div>

          <div className="tech-card">
            <span>🔧</span>
            <h3>Git</h3>
            <p>Version Control</p>
          </div>

          <div className="tech-card">
            <span>🚀</span>
            <h3>CI/CD</h3>
            <p>Automation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <span className="terminal">&gt;_</span> Built & deployed by{' '}
          <strong>Parth Vaishnav</strong>
        </div>

        <div className="clock">
          {time.toLocaleTimeString()}
        </div>
      </footer>
    </main>
  )
}

export default App