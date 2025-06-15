import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechSolutions Inc.",
      text: "This platform increased our sales by 40% in just three months. The deal tracking features are incredible.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Enterprises",
      text: "The contact management system saved us countless hours. Integration with our existing tools was seamless.",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Swift Marketing",
      text: "Our sales team adopted it immediately. The intuitive interface requires virtually no training.",
      rating: 5
    }
  ];

  const pricingPlans = {
    monthly: [
      {
        name: "Starter",
        price: "$8",
        features: ["Up to 3 users", "Basic lead management", "Email support", "Standard reports"],
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "$10",
        features: ["Up to 10 users", "Advanced analytics", "Priority support", "CRM integration"],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "$15",
        features: ["Unlimited users", "Custom reporting", "24/7 support", "API access"],
        cta: "Contact Sales"
      }
    ],
    annually: [
      {
        name: "Starter",
        price: "$5",
        pricePeriod: "per month, billed annually",
        features: ["Up to 3 users", "Basic lead management", "Email support", "Standard reports"],
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "$9",
        pricePeriod: "per month, billed annually",
        features: ["Up to 10 users", "Advanced analytics", "Priority support", "CRM integration"],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "$30",
        pricePeriod: "per month, billed annually",
        features: ["Unlimited users", "Custom reporting", "24/7 support", "API access"],
        cta: "Contact Sales"
      }
    ]
  };

  const integrations = [
    { name: "Google Workspace", icon: "google-icon.png" },
    { name: "Microsoft 365", icon: "microsoft-icon.png" },
    { name: "Slack", icon: "slack-icon.png" },
    { name: "Mailchimp", icon: "mailchimp-icon.png" },
    { name: "QuickBooks", icon: "quickbooks-icon.png" },
    { name: "Zapier", icon: "zapier-icon.png" }
  ];

  return (
    <div className="sales-landing">
      {/* Header with mobile menu */}
      <header className="sales-header">
        <div className="logo">SalesPro</div>
        
        <button className="mobile-menu-button" onClick={toggleMenu}>
          ☰
        </button>
        
        <nav className={`sales-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/resources">Resources</a>
          <a href="/support">Support</a>
          <div className="cta-buttons">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section with Animation */}
        <section className="hero">
          <div className="hero-content">
            <h1>UNIFY YOUR WORKFLOW. ULEASH POTENTIAL.</h1>
            <p>Manage Today, Scale Tomorrow.</p>
            <div className="hero-cta">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
            <div className="trust-badges">
              <span>A modern day solution for a modern day problem.</span>
            </div>
          </div>
          <div className="hero-image">
            <img src="sales-dashboard.png" alt="Sales Dashboard" className="dashboard-image" />
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Everything You Need to Boost Sales</h2>
          <p className="section-subtitle">Our platform provides all the tools your sales team needs to succeed</p>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="lead-icon.png" alt="Lead Management" />
              </div>
              <h3>Lead Management</h3>
              <p>Track and manage leads through the entire sales pipeline with customizable stages and automation</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="contact-icon.png" alt="Contact Management" />
              </div>
              <h3>Contact Management</h3>
              <p>Organize all your customer information in one place with detailed profiles and interaction history</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="deal-icon.png" alt="Deal Tracking" />
              </div>
              <h3>Deal Tracking</h3>
              <p>Monitor deals and forecast revenue with precision using our visual pipeline management</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="report-icon.png" alt="Reporting" />
              </div>
              <h3>Advanced Reporting</h3>
              <p>Generate detailed reports and dashboards to track performance and identify opportunities</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="mobile-icon.png" alt="Mobile Access" />
              </div>
              <h3>Mobile Access</h3>
              <p>Access your sales data anywhere with our fully-featured mobile applications</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="integration-icon.png" alt="Integrations" />
              </div>
              <h3>Integrations</h3>
              <p>Connect with your favorite tools through our extensive integration library</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <p className="section-subtitle">Don't just take our word for it</p>
          
          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing">
          <h2>Simple, Transparent Pricing</h2>
          <p className="section-subtitle">Choose the plan that fits your business needs</p>
          
          <div className="pricing-toggle">
            <button 
              className={activeTab === 'monthly' ? 'active' : ''}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly Billing
            </button>
            <button 
              className={activeTab === 'annually' ? 'active' : ''}
              onClick={() => setActiveTab('annually')}
            >
              Annual Billing (Save 20%)
            </button>
          </div>
          
          <div className="pricing-grid">
            {pricingPlans[activeTab].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  {plan.pricePeriod && <span className="period">{plan.pricePeriod}</span>}
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="integrations">
          <h2>Works With Your Favorite Tools</h2>
          <p className="section-subtitle">Connect with the apps you already use</p>
          
          <div className="integration-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-item">
                <img src={integration.icon} alt={integration.name} />
                <span>{integration.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta">
          <h2>Ready to Transform Your Sales Process?</h2>
          <p>Join thousands of businesses growing with SalesPro</p>
          <div className="cta-buttons">
            <button className="btn-primary">Start Free 14-Day Trial</button>
            <button className="btn-secondary">Request a Demo</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sales-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/integrations">Integrations</a></li>
              <li><a href="/updates">Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/guides">Guides</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/help">Help Center</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/press">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="/facebook"><img src="facebook-icon.png" alt="Facebook" /></a>
              <a href="/twitter"><img src="twitter-icon.png" alt="Twitter" /></a>
              <a href="/linkedin"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
              <a href="/youtube"><img src="youtube-icon.png" alt="YouTube" /></a>
            </div>
            <div className="newsletter">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2023 SalesPro. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;