import React from "react";
import styles from "@/app/prices/prices.module.css";

export const metadata = {
  title: "Grille tarifaire - JLS Nail's",
  description: "Consultez nos tarifs pour les services de prothésie ongulaire à Léré. Des options abordables pour prendre soin de vos ongles et de votre style.",
};

/**
 * @component
 * @returns {Component} - PricesPage
 */

export default function PricesPage() {
  return (
    <>
      <main className={styles.mainPrices} >
        <table className={styles.mainTable}>
          <caption>GRILLE TARIFAIRE</caption>
          <thead>
            <tr>
              <th colSpan={2}>Semi Permanent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pose semi permanent main</td>
              <td className={styles.alignRight}>30€</td>
            </tr>

            <tr>
              <td>Pose semi permanent pied</td>
              <td className={styles.alignRight}>30€</td>
            </tr>

            <tr>
              <td>Forfait mains/pieds</td>
              <td className={styles.alignRight}>50€</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>Extension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Première pose chablon</td>
              <td className={styles.alignRight}>
                 55€
              </td>
            </tr>
            <tr>
              <td>Supplément ongles rongés</td>
              <td className={styles.alignRight}>
                 5€
              </td>
            </tr>


            <tr>
              <td>Remplissage</td>
              <td className={styles.alignRight}>50€</td>
            </tr>

            <tr>
              <td>Gainage</td>
              <td className={styles.alignRight}>45€</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>{`Dépose et déco d'ongle`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strass/stickers</td>
              <td className={styles.alignRight}>1€/doigt</td>
            </tr>

            <tr>
              <td>Nail art simple</td>
              <td className={styles.alignRight}>2€/doigt</td>
            </tr>

            <tr>
              <td>Babyboomer/babycolor</td>
              <td className={styles.alignRight}>5€</td>
            </tr>

            <tr>
              <td>Dépose gel</td>
              <td className={styles.alignRight}>20€</td>
            </tr>

            <tr>
              <td>Dépose semi permanent</td>
              <td className={styles.alignRight}>15€</td>
            </tr>

            <tr>
              <td>Réparation ongle cassé</td>
              <td className={styles.alignRight}>2€</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
