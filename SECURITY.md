# 🔐 Security Guidelines for CUTM OS

## Critical: Never Commit These Files

### ❌ NEVER commit:
- `firebase-service-account.json` - Firebase admin credentials
- `.env` - Environment variables with secrets
- `*.key` or `*.pem` - Private keys
- API keys, tokens, or passwords in code

### ✅ These are protected by `.gitignore`
Check [.gitignore](.gitignore) for the complete list.

---

## Firebase Credentials Management

### Local Development
- Keep `firebase-service-account.json` in `backend/` directory
- **This file is NEVER committed to git** (protected by `.gitignore`)
- File is in `.git/info/exclude` and `.gitignore`

### Production (Render)
- Use **Base64-encoded environment variable**: `FIREBASE_SERVICE_ACCOUNT_BASE64`
- Never expose the JSON file in git
- Credentials are injected at runtime via environment variables

---

## How We Prevent Credential Leaks

### 1. `.gitignore` Protection
```
firebase-service-account.json
firebase-service-account*.json
.env
.env.*
```

### 2. Pre-Commit Hooks
Git hooks automatically check before commits:
- **Bash version**: `.git/hooks/pre-commit`
- **PowerShell version**: `.git/hooks/pre-commit.ps1`

These prevent staging files matching:
- Firebase credentials
- Environment files
- Private keys
- Secret patterns

### 3. GitHub Push Protection
GitHub's built-in secret scanning blocks pushes containing:
- AWS credentials
- Google Cloud credentials
- Cryptographic keys
- API tokens

---

## If Credentials Were Accidentally Exposed

### Immediate Actions:
1. **Invalidate the credentials** on Google Cloud Console
2. **Generate new service account** in Firebase
3. **Update environment variables** on Render
4. **Clean git history** if credentials were committed

### How to Clean Git History (if needed):
```bash
git filter-branch --tree-filter 'rm -f sensitive-file' --prune-empty -f HEAD
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push origin main --force
```

---

## Deployment Security Checklist

- [ ] Firebase credentials are base64-encoded in Render `.env`
- [ ] `firebase-service-account.json` is NOT in git
- [ ] `.gitignore` includes all sensitive files
- [ ] No hardcoded secrets in code
- [ ] No API keys in frontend code
- [ ] Environment variables used for all credentials
- [ ] GitHub secret scanning is enabled

---

## Questions?
If you're unsure whether something should be committed:
1. **Ask yourself**: "Would I want this on the internet?"
2. **If no** → Add it to `.gitignore`
3. **If yes** → It's probably safe to commit

---

**Last Updated**: March 10, 2026
**Maintained by**: Security Team
