import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from './contexts/CartContext';
import Script from "next/script"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mostf",
  description: "Mostf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ✅ Meta Pixel base script — runs once globally */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '569386696176592');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1632618700755968&ev=PageView&noscript=1"
          />
        </noscript>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
