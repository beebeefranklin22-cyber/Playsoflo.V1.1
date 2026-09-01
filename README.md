# Playsoflo v1.1

A social entertainment platform built with Next.js, React, TypeScript, and Supabase.

## Features

- **Home**: Main feed and discover content
- **Discover**: Explore trending content and creators
- **Apps**: Mini apps including wallet, music, and rides
- **Profile**: User profiles and content management
- **Live**: Real-time streaming capabilities

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Supabase credentials to `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── discover/          # Discover page
│   ├── apps/              # Apps section
│   │   ├── wallet/        # Wallet app
│   │   ├── music/         # Music app
│   │   └── rides/         # Rides app
│   ├── profile/           # User profiles
│   └── live/              # Live streaming
├── components/            # React components
│   └── BottomNav.tsx     # Bottom navigation
├── lib/                   # Utility functions
│   ├── supabase-browser.ts
│   └── supabase-server.ts
├── supabase/              # Database configuration
│   ├── schema.sql        # Database schema
│   └── feed_view.sql     # Database views
└── tailwind.config.ts    # Tailwind configuration
```

## API Routes

API routes can be added in the `app/api` directory following Next.js conventions.

## Database Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL scripts in the `supabase/` directory in your Supabase dashboard
3. Update `.env.local` with your project credentials

## License

MIT License - feel free to use this project for your own purposes.
