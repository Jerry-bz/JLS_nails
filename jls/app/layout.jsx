import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

// Métadonnées
export const metadata = {
  title: "JLS NAIL'S, prothésiste ongulaire à Léré",
  description:"Découvrez l'univers de JLS NAIL'S, votre destination de choix pour la santé et la beauté de vos ongles.\nLaissez-moi exprimer votre style avec confiance et élégance."
  ,
  icons: {
    icon: ["/logoJLS.ico"]
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
