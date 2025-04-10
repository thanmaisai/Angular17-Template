import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',
        textPrimary: 'hsl(var(--color-text-primary))',
        textSecondary: 'hsl(var(--color-text-secondary))',
        positive: 'hsl(var(--color-positive))',
        negative: 'hsl(var(--color-negative))'
      },
      fontFamily: {
        primary: 'var(--font-primary)'
      },
      spacing: {
        small: 'var(--spacing-small)',
        medium: 'var(--spacing-medium)',
        large: 'var(--spacing-large)'
      }
    }
  }
});
