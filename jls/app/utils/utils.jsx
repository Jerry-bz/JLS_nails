/**
   - Object.values retourne un tableau qui contient les valeurs de l'objet (supprime les clés)
   - Flat supprime les tableaux imbriqué pour créer un tableau unique
 */

function concatData(objectData) {
    return Object.values(objectData)
        .flat()
        .map(data => data);
}


export default concatData;