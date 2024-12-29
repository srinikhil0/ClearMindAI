# Deployment Strategy

## 🚀 Hosting Platform: Firebase

We're using Firebase Hosting for several key benefits:
- Global CDN
- Automatic SSL
- Fast deployment
- Easy rollbacks
- Custom domain support
- Integration with other Firebase services

### Firebase Project Structure
```
Production: attf-prod
Staging: attf-staging
Development: attf-dev
```

## 📦 CI/CD with GitHub Actions

### Workflow Structure
```
.github/
└── workflows/
    ├── deploy-prod.yml    # Production deployment
    ├── deploy-staging.yml # Staging deployment
    └── pr-checks.yml      # PR validation
```

### Automated Workflows

#### 1. Pull Request Checks (`pr-checks.yml`)
```yaml
Triggers: On Pull Request to develop/main
Steps:
- Lint code
- Run tests
- Build check
- Security scan
- Deploy to preview URL
```

#### 2. Staging Deployment (`deploy-staging.yml`)
```yaml
Triggers: On merge to develop
Steps:
- Run tests
- Build application
- Deploy to Firebase Staging
- Run E2E tests
```

#### 3. Production Deployment (`deploy-prod.yml`)
```yaml
Triggers: On merge to main
Steps:
- Run tests
- Build application
- Deploy to Firebase Production
- Run smoke tests
```

## 🔑 Environment Management

### Environment Variables
- Stored in GitHub Secrets
- Firebase project-specific configs
- Separate .env files per environment

### Firebase Configuration
```
├── .firebaserc           # Project aliases
├── firebase.json         # Firebase configuration
└── .github/workflows     # Deployment workflows
```

## 🔄 Deployment Process

### 1. Development
- Local development using Firebase Emulators
- Push to feature branch
- Automated PR preview deployments

### 2. Staging
- Merge PR to develop branch
- Automatic deployment to staging
- QA testing environment

### 3. Production
- Merge develop to main
- Manual approval required
- Automatic deployment to production

## 🛠️ Setup Instructions

### 1. Initial Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init
```

### 2. GitHub Actions Setup
```bash
# Required secrets
FIREBASE_SERVICE_ACCOUNT_PROD
FIREBASE_SERVICE_ACCOUNT_STAGING
FIREBASE_PROJECT_ID_PROD
FIREBASE_PROJECT_ID_STAGING
```

### 3. Local Development
```bash
# Start local development
npm run dev

# Test production build
npm run build
firebase serve
```

## 🔍 Monitoring & Rollback

### Monitoring
- Firebase Hosting Dashboard
- GitHub Actions logs
- Firebase Performance Monitoring

### Rollback Process
```bash
# Via Firebase Console
Select version > Rollback

# Via CLI
firebase hosting:clone VERSION_ID
```

## 🚨 Emergency Procedures

### Quick Rollback
```bash
# Immediate rollback to last known good version
firebase hosting:rollback

# Disable automatic deployments
# Via GitHub: Disable workflow
```

### Health Checks
- Automated smoke tests post-deployment
- Performance monitoring alerts
- Error tracking via Firebase Crashlytics

## 📊 Deployment Metrics

### Tracked Metrics
- Deployment frequency
- Lead time for changes
- Change failure rate
- Time to recovery

### Success Criteria
- Zero downtime deployments
- <1% error rate post-deployment
- <2s initial page load
- 100% automated deployment process 