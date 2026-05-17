import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sleep Quality Meeting Correlator',
  description: 'Correlate sleep quality with meeting performance. AI-powered scheduling for executives and knowledge workers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="57c8bda6-cda0-49fd-85ba-d3ae7d2e93e2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
