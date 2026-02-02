# GitHub Secrets Setup Guide

To enable automatic FTP deployment, you need to add the following secrets to your GitHub repository:

## How to Add Secrets:

1. Go to your GitHub repository: `https://github.com/raoasifraza11/hekyhomes.com`
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each of the following secrets:

## Required Secrets:

### FTP_SERVER
- **Name:** `FTP_SERVER`
- **Value:** `ftp.margham.app`

### FTP_USERNAME
- **Name:** `FTP_USERNAME`
- **Value:** `deploy@hekyhomes.com`

### FTP_PASSWORD
- **Name:** `FTP_PASSWORD`
- **Value:** `[Your FTP password - keep this secure!]`

## Verification:

After adding the secrets, the workflow will automatically run on:
- Every push to `main` or `master` branch
- Manual trigger via GitHub Actions tab

## Testing the Workflow:

1. Push your code to GitHub
2. Go to the **Actions** tab in your repository
3. Watch the workflow run
4. Check for ✅ success or ❌ errors

## Deployment Details:

- **Build folder:** `dist/` (Astro's output directory)
- **Server directory:** `/` (root)
- **Node version:** 20 LTS
- **Deploy on:** Every push to main/master

Your site will automatically deploy to **https://hekyhomes.com** after each successful build!

