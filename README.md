# 🚀 Harshith's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and MongoDB Atlas. Features dynamic data fetching, beautiful animations, and a professional design that showcases my work as a Software Engineer.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with glass morphism effects
- 📱 **Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js 14 and optimized for speed
- 🎭 **Animations**: Smooth transitions and micro-interactions with Framer Motion
- 🗄️ **Dynamic Data**: MongoDB Atlas integration for real-time content updates
- 🔒 **Type Safety**: Full TypeScript implementation
- 🎯 **SEO Optimized**: Meta tags, structured data, and performance optimization
- 🌟 **Interactive Elements**: Tracing beam timeline, hover effects, and scroll animations

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React PowerGlitch** - Glitch effects

### Backend & Database

- **MongoDB Atlas** - Cloud database
- **Next.js API Routes** - Serverless functions
- **MongoDB Driver** - Database connectivity

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/harshith/harshith-portfolio.git
   cd harshith-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your MongoDB connection string:

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

4. **Set up the database**

   ```bash
   node scripts/setup-database.js
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
harshith-portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers
├── constants/            # Static data
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
├── scripts/             # Database setup scripts
└── types/               # TypeScript type definitions
```

## 🎨 Sections

- **Hero** - Introduction with animated background
- **Experience** - Interactive timeline with tracing beam
- **Projects** - Portfolio showcase with hover effects
- **Technologies** - Tech stack with animated icons
- **Footer** - Contact information and social links

## 🗄️ Database Schema

### Collections

- `experiences` - Work experience data
- `projects` - Project portfolio
- `technologies` - Technology stack
- `socialLinks` - Social media links

### API Endpoints

- `GET /api/portfolio` - All portfolio data
- `GET /api/experiences` - Experience data
- `GET /api/projects` - Project data
- `GET /api/technologies` - Technology data
- `GET /api/social-links` - Social links data

## 🎯 Key Features Explained

### Tracing Beam Timeline

Interactive experience timeline that animates as you scroll, creating an engaging visual story of career progression.

### Dynamic Data Fetching

Portfolio content is fetched from MongoDB Atlas, allowing for real-time updates without code changes.

### Responsive Design

Mobile-first approach with breakpoints for tablets and desktops, ensuring optimal experience across all devices.

### Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Efficient data fetching with React hooks

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with MongoDB integration
- **DigitalOcean**: App Platform deployment

## 🔧 Customization

### Adding New Sections

1. Create component in `components/sections/`
2. Add to `app/page.tsx`
3. Update navigation in `constants/`

### Modifying Data

- **Database**: Update MongoDB collections
- **Static**: Modify files in `constants/` directory

### Styling

- **Colors**: Update Tailwind config
- **Animations**: Modify Framer Motion components
- **Layout**: Adjust component structure

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google ranking
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 2s initial load time

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: harshith@example.com
- **LinkedIn**: [linkedin.com/in/harshith](https://linkedin.com/in/harshith)
- **GitHub**: [github.com/harshith](https://github.com/harshith)
- **Portfolio**: [harshith.dev](https://harshith.dev)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [MongoDB Atlas](https://www.mongodb.com/atlas) for the database service

---

⭐ **Star this repository if you found it helpful!**
