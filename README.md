# TraceGuard - Confidential Reporting System

A professional, minimalist platform for confidential incident reporting that connects users with verified investigators.

## 🎯 Project Overview

TraceGuard provides:
- **Public User Interface**: Anonymous, secure reporting without login
- **Investigator Dashboard**: Protected portal for case management

## 🎨 Design System

- **Primary Navy**: `#0A1A2F`
- **Accent Blue**: `#4A90E2`
- **Soft White**: `#FAFBFC`
- **Typography**: Inter, Roboto (16px+ body text)
- **Style**: Rounded corners, ample spacing, calm and professional

## 📁 File Structure

```
TraceGuard/
├── index.html              # Public home page
├── report.html             # Incident submission form
├── login.html              # Investigator authentication
├── dashboard.html          # Investigator main dashboard
├── case-view.html          # Detailed case management
├── calendar.html           # Scheduling and follow-ups
├── styles.css              # Complete design system
├── app.js                  # Interactive functionality
├── Img/                    # Image assets
│   ├── Shield.png          # Logo/security icon
│   ├── UploadMedia.png     # Upload/evidence icon
│   ├── HumanReview.png     # Investigator review icon
│   ├── GetReport.png       # Follow-up/report icon
│   └── Graph.png           # Analytics icon
└── README.md               # This file
```

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Open `index.html` in your web browser
2. Navigate through the public pages (no server required)

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit: http://localhost:8000
```

## 👥 User Flows

### Public User Flow (No Login)
1. Visit home page → Learn about TraceGuard
2. Click "Report an Incident"
3. Fill out form with preferred contact method
4. Upload optional evidence
5. Submit securely
6. Receive confirmation

### Investigator Flow (Login Required)
1. Navigate to login page
2. **Demo credentials**:
   - Username: `investigator`
   - Password: `demo123`
3. Access dashboard with:
   - New case assignments
   - Active case tracking
   - Analytics snapshot
4. View detailed cases
5. Add encrypted notes
6. Manage calendar and follow-ups

## ✨ Key Features

### Public Side
- ✅ No account creation required
- ✅ Encrypted data submission
- ✅ File upload support
- ✅ Accessible contact options
- ✅ Clear security messaging

### Investigator Side
- ✅ Secure login authentication
- ✅ Case priority management
- ✅ Progress tracking with visual indicators
- ✅ Encrypted note-taking
- ✅ Calendar scheduling
- ✅ Follow-up reminders
- ✅ Analytics dashboard

## 🔒 Security Features

- End-to-end encryption ready
- No tracking elements on public pages
- Session-based authentication for investigators
- All access logged and monitored
- User identity protection

## ♿ Accessibility

- Minimum 4.5:1 contrast ratio
- 16px+ body text
- All icons paired with labels
- Complete alt text coverage
- Keyboard navigation support
- Screen reader friendly

## 🎯 Core Messaging

✓ "Your identity is protected."  
✓ "You control what you share."  
✓ "Investigators are verified and trained."  
✓ "Data is encrypted and stored securely."

## 🔧 Customization

### Change Colors
Edit `styles.css` `:root` variables:
```css
--navy: #0A1A2F;
--accent-blue: #4A90E2;
--soft-white: #FAFBFC;
```

### Update Content
- Home page: Edit `index.html`
- Form fields: Edit `report.html`
- Dashboard data: Edit `dashboard.html`

### Backend Integration
Connect forms to your secure backend by modifying:
- `reportForm.addEventListener('submit', ...)` in `app.js`
- `loginForm.addEventListener('submit', ...)` in `app.js`

## 📱 Responsive Design

Fully responsive breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Future Enhancements

- [ ] Real-time case updates
- [ ] Email notifications
- [ ] Document encryption
- [ ] Two-factor authentication
- [ ] Advanced search and filtering
- [ ] Automated report generation
- [ ] Multi-language support

## 📄 License

Proprietary - TraceGuard Confidential Reporting System

## 📧 Support

For assistance, contact: support@traceguard.com

---

**Built with care for privacy, security, and trust.**
