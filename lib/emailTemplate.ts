export function getWelcomeEmailTemplate(email: string) {
    return {
      subject: "FlowDesk Waitlist // ACCESS CONFIRMED 🎉",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>FlowDesk Waitlist Confirmation</title>
          <style>
            /* Reset & Base */
            body, html {
              margin: 0;
              padding: 0;
              background: #F8FAFC;
              font-family: 'Space Grotesk', 'Courier New', monospace;
              line-height: 1.5;
            }
            
            /* Brutalist Container */
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #FFFFFF;
              border: 3px solid #0F172A;
              box-shadow: 8px 8px 0px #0F172A;
            }
            
            /* Header - Raw & Industrial */
            .header {
              background: #0F172A;
              padding: 32px 24px;
              border-bottom: 3px solid #6366F1;
              position: relative;
            }
            
            .header::before {
              content: '';
              position: absolute;
              top: 12px;
              left: 12px;
              right: 12px;
              bottom: 12px;
              border: 1px solid rgba(200, 255, 0, 0.3);
              pointer-events: none;
            }
            
            .logo {
              font-size: 32px;
              font-weight: 800;
              letter-spacing: -1px;
              color: #FFFFFF;
              font-family: 'Syne', 'Courier New', monospace;
              text-transform: uppercase;
            }
            
            .logo span {
              color: #6366F1;
              position: relative;
            }
            
            .logo span::after {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              right: 0;
              height: 3px;
              background: #6366F1;
            }
            
            /* Content Area */
            .content {
              padding: 40px 32px;
              background: #FFFFFF;
            }
            
            /* Brutalist Elements */
            .brutal-border {
              border: 2px solid #0F172A;
            }
            
            .badge {
              display: inline-block;
              background: #6366F1;
              color: #ffffff;
              padding: 6px 12px;
              font-size: 11px;
              font-weight: 700;
              font-family: 'JetBrains Mono', monospace;
              letter-spacing: 1px;
              border: 1px solid #0F172A;
              margin-bottom: 24px;
              text-transform: uppercase;
            }
            
            h1 {
              font-size: 36px;
              font-weight: 800;
              color: #0F172A;
              margin: 0 0 16px 0;
              line-height: 1.2;
              font-family: 'Syne', monospace;
              letter-spacing: -1px;
            }
            
            .highlight {
              color: #6366F1;
              border-bottom: 3px solid #6366F1;
              display: inline-block;
            }
            
            .lead-text {
              font-size: 16px;
              color: #334155;
              margin-bottom: 32px;
            }
            
            /* Brutalist Benefit Cards */
            .benefits-grid {
              margin: 32px 0;
              border: 2px solid #0F172A;
              background: #F8FAFC;
            }
            
            .benefit-header {
              background: #0F172A;
              color: #ffffff;
              padding: 12px 16px;
              font-weight: 700;
              font-size: 14px;
              font-family: 'JetBrains Mono', monospace;
              letter-spacing: 1px;
              border-bottom: 2px solid #6366F1;
            }
            
            .benefit-item {
              padding: 16px;
              border-bottom: 1px solid #E2E8F0;
              display: flex;
              align-items: center;
              gap: 12px;
            }
            
            .benefit-item:last-child {
              border-bottom: none;
            }
            
            .check-mark {
              width: 28px;
              height: 28px;
              background: #6366F1;
              border: 2px solid #0F172A;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: 16px;
              color: #0F172A;
              flex-shrink: 0;
            }
            
            .benefit-text {
              font-size: 15px;
              font-weight: 500;
              color: #0F172A;
            }
            
            .benefit-text strong {
              color: #6366F1;
            }
            
            /* Brutalist CTA Button */
            .button-container {
              margin: 40px 0;
              text-align: center;
            }
            
            .button {
              display: inline-block;
              background: #6366F1;
              color: #FFFFFF;
              text-decoration: none;
              padding: 14px 32px;
              font-weight: 700;
              font-size: 16px;
              font-family: 'Space Grotesk', monospace;
              border: 2px solid #0F172A;
              box-shadow: 4px 4px 0px #0F172A;
              transition: all 0.15s ease;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            
            .button:hover {
              transform: translate(-2px, -2px);
              box-shadow: 6px 6px 0px #0F172A;
            }
            
            /* Stats / Counter Box */
            .stats-box {
              background: #0F172A;
              padding: 20px;
              margin: 32px 0;
              border: 2px solid #6366F1;
              text-align: center;
            }
            
            .stats-number {
              font-size: 32px;
              font-weight: 800;
              color: #6366F1;
              font-family: 'JetBrains Mono', monospace;
              display: block;
            }
            
            .stats-label {
              color: #94A3B8;
              font-size: 12px;
              font-family: 'JetBrains Mono', monospace;
              margin-top: 4px;
            }
            
            /* Info Box */
            .info-box {
              background: #FFFFFF;
              border: 2px solid #0F172A;
              padding: 20px;
              margin: 32px 0;
              position: relative;
            }
            
            .info-box::before {
              content: 'IMPORTANT';
              position: absolute;
              top: -12px;
              left: 16px;
              background: #6366F1;
              color: #ffffff;
              padding: 2px 12px;
              font-size: 12px;
              font-weight: 800;
              font-family: 'JetBrains Mono', monospace;
              letter-spacing: 1px;
            }
            
            /* Divider */
            .brutal-divider {
              height: 3px;
              background: repeating-linear-gradient(
                90deg,
                #0F172A,
                #0F172A 10px,
                #6366F1 10px,
                #6366F1 20px
              );
              margin: 32px 0;
            }
            
            /* Footer */
            .footer {
              background: #0F172A;
              padding: 32px;
              border-top: 3px solid #6366F1;
              text-align: center;
            }
            
            .footer-text {
              color: #64748B;
              font-size: 12px;
              font-family: 'JetBrains Mono', monospace;
              margin: 0 0 8px 0;
            }
            
            .footer-link {
              color: #6366F1;
              text-decoration: none;
              border-bottom: 1px solid #6366F1;
              padding-bottom: 2px;
            }
            
            .footer-link:hover {
              color: #6366F1;
              border-bottom-color: #6366F1;
            }
            
            .social-icons {
              margin: 20px 0 0 0;
              display: flex;
              justify-content: center;
              gap: 16px;
            }
            
            /* Responsive */
            @media (max-width: 600px) {
              .container {
                margin: 20px;
                box-shadow: 4px 4px 0px #0F172A;
              }
              
              .content {
                padding: 24px 20px;
              }
              
              h1 {
                font-size: 28px;
              }
              
              .benefit-item {
                padding: 12px;
              }
            }
            
            /* ASCII Art Decoration */
            .ascii {
              font-family: 'JetBrains Mono', monospace;
              font-size: 10px;
              color: #CBD5E1;
              text-align: center;
              margin: 20px 0;
              white-space: pre;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <div class="logo">
                Flow<span>Desk</span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="content">
              <div class="badge">
                EARLY ACCESS CONFIRMED ⚡
              </div>
              
              <h1>
                You're in.<br>
                <span class="highlight">Now let's automate.</span>
              </h1>
              
              <p class="lead-text">
                Thanks for joining the waitlist, <strong style="color: #0F172A;">${email.split('@')[0]}</strong>.<br>
                We're building the most brutal workflow automation tool.
              </p>
              
              <div class="benefits-grid">
                <div class="benefit-header">
                  YOUR EARLY ACCESS ARMORY
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-text">
                    <strong>1 MONTH FREE</strong> - Zero payment until you're live
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-text">
                    <strong>LIFETIME 20% OFF</strong> - Grandfathered forever
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-text">
                    <strong>PRIORITY SUPPORT</strong> - Direct line to our team
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-text">
                    <strong>SHAPE THE PRODUCT</strong> - Your feedback = Our roadmap
                  </div>
                </div>
              </div>
              
              <!-- Info Box -->
              <div class="info-box">
                <p style="margin: 0; color: #0F172A; font-size: 14px;">
                  <strong style="color: #6366F1;">⚡ WHAT'S NEXT?</strong><br><br>
                  We're onboarding in batches. You'll receive:<br>
                  → Setup instructions when Launched<br>
                  → Personal demo link<br>
                  → Early access to our beta dashboard
                </p>
              </div>
              
              <!-- CTA Button -->
              <div class="button-container">
                <a href="https://flowdesk.in" class="button">
                  EXPLORE FLOWDESK →
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
              <p class="footer-text" style="color: #ffffff;">
                FlowDesk - Automate the boring. Focus on the real work.
                </p>
              <p class="footer-text">
                <a href="https://flowdesk.in/privacy" class="footer-link">PRIVACY POLICY</a>
                &nbsp;|&nbsp;
                <a href="mailto:hello@flowdesk.in" class="footer-link">HELLO@FLOWDESK.IN</a>
              </p>
              <p class="footer-text" style="margin-top: 16px; color: #ffffff;">
                © ${new Date().getFullYear()} FlowDesk • Made with ♥ for India
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
  ═══════════════════════════════════════
    FLOWDESK WAITLIST // ACCESS CONFIRMED 🎉
  ═══════════════════════════════════════
  
  Hey ${email.split('@')[0]}!
  
  You're in. Now let's automate.
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  YOUR EARLY ACCESS ARMORY:
  
  ✓ 1 MONTH FREE — Zero payment until you're live
  ✓ LIFETIME 20% OFF — Grandfathered forever  
  ✓ PRIORITY SUPPORT — Direct line to our team
  ✓ SHAPE THE PRODUCT — Your feedback = Our roadmap
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  ⚡ WHAT'S NEXT?
  
  We're onboarding in batches within 48 hours.
  You'll receive:
  → Setup instructions
  → Personal demo link  
  → Early access to beta dashboard
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  EXPLORE FLOWDESK: https://flowdesk.in
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  PRO TIP: Add hello@flowdesk.in to your contacts.
  Brutal emails shouldn't land in spam.
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  FlowDesk — Automate the boring. Focus on the real work.
  
  Questions? hello@flowdesk.in
  Privacy: https://flowdesk.in/privacy
  
  © ${new Date().getFullYear()} FlowDesk // Made with ♥ for India
      `
    };
  }