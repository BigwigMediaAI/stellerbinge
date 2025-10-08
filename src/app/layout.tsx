// src/app/layout.tsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../../components/floatingBtn";
import Script from "next/script";
// import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Stellar Binge | Best Restaurant & Banquet in Noida",
//   description:
//     "Discover Stellar Binge – a top dining destination and banquet hall in Greater Noida offering fine dining, luxury events, and unforgettable experiences.",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Stellar Binge | Best Restaurant & Banquet in Noida</title>
        <meta
          name="description"
          content="Discover Stellar Binge – a top dining destination and banquet hall in Greater Noida offering fine dining, luxury events, and unforgettable experiences."
        />
        {/* Google Search Console verification */}
        <link rel="canonical" href="https://www.stellarbinge.com" />
        <meta
          name="google-site-verification"
          content="dxj-iVuktppnnUldgn-dECo6FjjBkVmAMqzMsoF6Yx8"
        />
{/* Meta Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2183816655461000');
            fbq('track', 'PageView');
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2183816655461000&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}

        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G6GE5ZCT45"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G6GE5ZCT45');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t8im2kkd40");
          `}
        </Script>

        {/* Microsoft verification */}
        <meta name="msvalidate.01" content="A5873C26CCEEFFC7DEA52B82C10701C7" />

        {/* Google Tag Manager script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWCVMPW8');
          `}
        </Script>
       {/* ✅ JSON-LD SCHEMA MARKUP — rendered server-side for Googlebot */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Stellar Binge",
        image:
          "https://www.stellarbinge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.3fb31e53.png&w=384&q=75&dpl=dpl_98rTGm9NedXRUez1qDrPvZfLjDCK",
        url: "https://www.stellarbinge.com/",
        description:
          "From our humble beginnings, we have grown into more than just a dining space – we’ve become a place where stories are shared, friendships are nurtured, and moments are celebrated. What started as a simple idea has blossomed into a welcoming home for anyone who believes that food has the power to bring people closer together.",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector 62",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201307",
          addressCountry: "IN",
        },
        telephone: "+91 95998 16865",
        sameAs: [
          "https://www.facebook.com/bingenoida",
          "https://www.instagram.com/stellar_binge",
          "https://www.youtube.com/@Stellar_Binge",
          "https://www.linkedin.com/in/stellar-binge-78691321a/",
        ],
      }),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Menu",
        name: "Stellar Binge Menu",
        url: "https://www.stellarbinge.com/menu",
        hasMenuSection: [
          { "@type": "MenuSection", name: "Soups & Greens" },
          { "@type": "MenuSection", name: "Signature Sips" },
          { "@type": "MenuSection", name: "Entrée" },
          { "@type": "MenuSection", name: "The Stellar Spread" },
          { "@type": "MenuSection", name: "Stellar Indulgence" },
        ],
      }),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Restaurant",
          name: "Stellar Binge",
        },
        review: [
          {
            "@type": "Review",
            author: "Anshul Bajpai",
            datePublished: "2025-10-05",
            reviewBody:
              "The taste and ambient is nice peaceful and delicious.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: "Vishwas Saxena",
            datePublished: "2025-10-04",
            reviewBody: "Food and drinks were good. Atmosphere was great.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4.5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: "Jagannath Sahu",
            datePublished: "2025-10-03",
            reviewBody: "Buffet is great, so is the food and service.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: "Rashmi Chouhan",
            datePublished: "2025-10-02",
            reviewBody:
              "This café feels like a little escape ✨ Freshly brewed coffee, delicious food, and the warmest hospitality.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
        ],
      }),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Stellar Binge offer a buffet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Stellar Binge offers a wide buffet with multi-cuisine options including Indian and continental dishes, perfect for both lunch and dinner gatherings.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a table in advance at Stellar Binge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! You can reserve your table in advance by calling our team or visiting our website to ensure a seamless dining experience.",
            },
          },
          {
            "@type": "Question",
            name: "Does Stellar Binge host private events or parties?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we have a dedicated banquet area ideal for hosting small private gatherings, family dinners, and corporate events.",
            },
          },
          {
            "@type": "Question",
            name: "What are the opening hours of Stellar Binge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Stellar Binge is open daily from 11:00 AM to 11:00 PM, serving guests for both lunch and dinner.",
            },
          },
          {
            "@type": "Question",
            name: "Does Stellar Binge provide easy access for guests with vehicles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Stellar Binge offers ample parking nearby, ensuring guests can enjoy their dining experience without parking hassles.",
            },
          },
        ],
      }),
    }}
  />
       
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWCVMPW8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
