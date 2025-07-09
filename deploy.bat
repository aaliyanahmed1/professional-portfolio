@echo off
echo 🚀 Starting deployment process...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI is not installed. Installing...
    npm install -g vercel
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the project
echo 🔨 Building the project...
npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build completed successfully!
    
    REM Deploy to Vercel
    echo 🚀 Deploying to Vercel...
    vercel --prod
    
    echo 🎉 Deployment completed!
    echo 📝 Don't forget to:
    echo    - Set up environment variables in Vercel dashboard
    echo    - Configure custom domain if needed
    echo    - Test the contact form functionality
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

pause 