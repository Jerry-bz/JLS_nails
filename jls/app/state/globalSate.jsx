// Donées de l'application
import data from "@/app/data/data.json";
import concatData from "../utils/utils";


// Fonction qui fusinne l'objet en un tableau unique
const dataImgArray = concatData(data)

// Définition du reducer
const dataImgReducer = (state, action) => {
  switch (action.type) {
    // Données initiales de l'objet data
    case "Tous":
      return { dataImg: dataImgArray };

    // Données Chablon
    case "Chablon": {
      console.log(action, "action");
      return { dataImg: action.payload };
    }
    // Données Gel
    case "Gel":
      return { dataImg: action.payload };
    // Données VSP
    case "VSP":
      return { dataImg: action.payload };
    // Envoi la source de l'image
    case "Image":
      return { ...state, idImg: action.payload }; // VSP
    default:
      return { ...state };
  }
};

export { dataImgReducer, data };
