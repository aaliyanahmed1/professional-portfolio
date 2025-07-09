# Professional Portfolio - AI Engineer

A modern, responsive portfolio website showcasing AI engineering projects and skills. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark theme
- 📱 Mobile-first approach
- 🚀 Fast performance with Vite
- 📧 Contact form with API integration
- 🎯 Project showcase with detailed descriptions
- 💼 Skills and experience sections
- 🔗 Social media integration

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: TanStack Query
- **Backend**: Vercel Serverless Functions
- **Database**: In-memory storage (can be upgraded to PostgreSQL)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ProfessionalPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment on Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Vercel:
```bash
vercel --prod
```

### Environment Variables

The following environment variables can be configured in Vercel:

- `DATABASE_URL` - PostgreSQL connection string (optional, for future database integration)
- `SMTP_HOST` - SMTP server for email notifications (optional)
- `SMTP_PORT` - SMTP port (optional)
- `SMTP_USER` - SMTP username (optional)
- `SMTP_PASS` - SMTP password (optional)

## Project Structure

```
ProfessionalPortfolio/
├── api/                    # Vercel serverless functions
│   └── contact.ts         # Contact form API
├── client/                # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── data/         # Static data
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities
│   │   └── pages/        # Page components
│   └── index.html        # HTML template
├── public/               # Static assets
├── shared/              # Shared types and schemas
├── dist/                # Build output
└── vercel.json          # Vercel configuration
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "projectType": "computer-vision",
  "message": "I need help with a computer vision project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### GET /api/contact
Retrieve all contact messages (for admin purposes).

## Customization

### Updating Personal Information

1. **Hero Section**: Edit `client/src/data/heroData.ts`
2. **Projects**: Edit `client/src/data/projects.ts`
3. **Skills**: Edit `client/src/data/skillsData.ts`
4. **Experience**: Edit `client/src/data/experienceData.ts`

### Styling

- Global styles: `client/src/index.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Use Tailwind classes in components

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Add the component to the main page in `client/src/pages/home.tsx`
3. Add any necessary data files in `client/src/data/`

## Database Integration (Future)

To integrate with a real database:

1. Set up a PostgreSQL database (e.g., Neon, Supabase, or Vercel Postgres)
2. Update the `DATABASE_URL` environment variable
3. Replace the in-memory storage in `api/contact.ts` with Drizzle ORM queries
4. Run database migrations: `npm run db:push`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please open an issue on GitHub or contact via the portfolio contact form. 