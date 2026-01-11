import './globals.css';
import MainHeader from '../components/main-header';
import MainHeaderBackground from '../components/main-header-background';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
