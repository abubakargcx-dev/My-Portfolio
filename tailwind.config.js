/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        accent: 'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        foreground: 'var(--color-text)',
        'foreground-dim': 'var(--color-text-dim)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        name: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        editorial: '820px',
        content: '1280px',
      },
      transitionTimingFunction: {
        product: 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
}
