import './globals.css'; 
import '../../styles/css/bootstrap.css';
import '../../styles/css/bootstrap.min.css';
import '../../styles/css/style.css';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata = {
  title: "Admissions Open for PG Programme in Public Policy, Design and Management Class of 2025 | ISPP",
  description:
    "India's first 1-year full-time post graduate public policy programme with a focus on design thinking and management. Shape your policy journey with ISPP's flagship PG Programme in Public Policy.",
  keywords: "",
  viewport: "width=device-width, initial-scale=1",
  charSet: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

        <link rel="shortcut icon" href="https://apply.ispp.org.in/images/favicon.ico" type="image/x-icon"/>

        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'/>

        <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
/>
      
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJPXHLX');
            `,
          }}
        />

       
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7XL97NBW00"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7XL97NBW00');
            `,
          }}
        />


        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10881036372"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10881036372');
            `,
          }}
        />

      
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "fdng4tho8u");
            `,
          }}
        />
      </head>
      <body>
       
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJPXHLX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>


        {children}


        <Footer/>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' defer></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js' defer></script>

      {/* <script src='../../assets/js/bootstrap.js'></script>
      <script src='../../assets/js/bootstrap.min.js'></script> */}
      </body>
    </html>
  );
}
