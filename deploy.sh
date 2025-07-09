#!/bin/bash

# Professional Portfolio - Vercel Deployment Script

echo "🚀 Starting deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo "🎉 Deployment completed!"
    echo "📝 Don't forget to:"
    echo "   - Set up environment variables in Vercel dashboard"
    echo "   - Configure custom domain if needed"
    echo "   - Test the contact form functionality"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 