# Modern E-commerce with Astro

A modern, high-performance e-commerce website built with Astro, React, and TailwindCSS. This project demonstrates best practices for building scalable web applications with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Modern Stack**: Built with Astro, React, and TailwindCSS
- **Internationalization**: Support for multiple languages (English, Khmer, Chinese, Japanese)
- **Type Safety**: Full TypeScript support with Zod validation
- **Form Handling**: Integrated with React Hook Form and Zod
- **State Management**: Using Nanostores for lightweight state management
- **Dark Mode**: Built-in dark mode support with system preference detection
- **SEO Optimized**: Built-in SEO component with meta tags and JSON-LD
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **API Integration**: Example integration with DummyJSON API
- **Authentication**: Basic auth flow with login/register forms
- **Shopping Cart**: Persistent cart with local storage
- **Performance**: Built-in image optimization and code splitting

## 📦 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── atoms/      # Basic building blocks
│   │   ├── molecules/  # Combinations of atoms
│   │   └── organisms/  # Complex components
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   │   └── [lang]/     # Language-specific routes
│   ├── i18n/          # Translations
│   ├── store/         # State management
│   ├── utils/         # Utility functions
│   └── lib/           # Core functionality
└── package.json
```

## 🛠️ Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🧞 Commands

| Command           | Action                                       |
|:-----------------|:---------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally                       |

## 🌐 Internationalization

The project supports multiple languages:
- English (en)
- Khmer (km)
- Chinese (zh)
- Japanese (ja)

Language files are located in `src/i18n/translations/`.

## 🎨 Component Usage

### Buttons

```astro
<Button variant="primary" size="lg">Click me</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="outline" size="sm">Outline</Button>
```

### Forms

```tsx
import { z } from 'zod';
import Form from '../components/molecules/Form';
import FormField from '../components/molecules/FormField';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

function LoginForm() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      <FormField name="email" label="Email" type="email" required />
      <FormField name="password" label="Password" type="password" required />
      <Button type="submit">Login</Button>
    </Form>
  );
}
```

## 🔒 Environment Variables

Required environment variables:

```bash
PUBLIC_API_URL=https://dummyjson.com
PUBLIC_AUTH_DOMAIN=your-auth-domain
PUBLIC_AUTH_CLIENT_ID=your-client-id
PUBLIC_ENABLE_NEWSLETTER=true
PUBLIC_ENABLE_REVIEWS=true
PUBLIC_CACHE_TTL=3600
```

## 🎯 Best Practices

1. **Component Organization**
   - Use atomic design principles (atoms, molecules, organisms)
   - Keep components small and focused
   - Use TypeScript for type safety

2. **State Management**
   - Use Nanostores for global state
   - Keep state close to where it's used
   - Use React's useState for local state

3. **Performance**
   - Use Astro's built-in optimizations
   - Lazy load images and components
   - Minimize JavaScript bundle size

4. **Accessibility**
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast

5. **SEO**
   - Use the SEO component for meta tags
   - Include JSON-LD structured data
   - Use semantic HTML structure

## 📚 Utility Functions

The project includes several utility functions for common operations:

### Date Formatting
```typescript
import { formatDate, timeAgo } from '../utils/date';

formatDate('2024-03-20'); // March 20, 2024
timeAgo('2024-03-19');    // 1 day ago
```

### Currency Formatting
```typescript
import { formatCurrency, calculateDiscount } from '../utils/currency';

formatCurrency(29.99);              // $29.99
calculateDiscount(100, 20);         // 80 (20% off)
```

### String Manipulation
```typescript
import { truncate, slugify } from '../utils/string';

truncate('Long text...', 10);       // "Long te..."
slugify('Hello World');             // "hello-world"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.