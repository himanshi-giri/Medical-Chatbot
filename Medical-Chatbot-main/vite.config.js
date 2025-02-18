import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["zf244k-5173.csb.app"], // Allow this host
    host: true, // Ensure it runs on all network interfaces
    strictPort: true, // Avoid port conflicts
  }
});