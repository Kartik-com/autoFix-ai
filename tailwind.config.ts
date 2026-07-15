import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070A12',
        panel: '#0E1324',
        line: '#202842',
        brand: '#8B5CF6',
        cyan: '#22D3EE'
      },
      boxShadow: { glow: '0 0 60px rgba(139, 92, 246, 0.25)' }
    }
  },
  plugins: []
};
export default config;
