// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6UkHVT1wvl4RQGiOA1lqi67nT4p7srM",
  authDomain: "octogatomaket.firebaseapp.com",
  projectId: "octogatomaket",
  storageBucket: "octogatomaket.appspot.com",
  messagingSenderId: "657220273898",
  appId: "1:657220273898:web:e0d775080a96416a073993"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb)

export async function getAllItems(){ 
const collectionTest = collection(db, 'octoGatos') 
const snapShotTest = await getDocs (collectionTest)
const docsCatArray = snapShotTest.docs
const dataCats = docsCatArray.map((doc) => {
  return { 
    ...doc.data(), id: doc.id,
  }
});
return dataCats;
}

export async function getAllCategory(categoryId){
const collectionTest = collection(db, 'octoGatos') 
const queryCollection = query(collectionTest, where('categoryId', '==', categoryId));
const snapShotTest = await getDocs (queryCollection)
const docsCatArray = snapShotTest.docs
const dataCats = docsCatArray.map((doc) => {
  return { 
    ...doc.data(), id: doc.id,
  }
});
return dataCats;
}

export async function getSingleCat(id){
  const uniqueCatRef = doc(db, 'octoGatos', id) 
  const snapShotTest = await getDoc(uniqueCatRef)
  const catItem = snapShotTest.data()
  catItem.id = snapShotTest.id
  return catItem;
  }
  






export {db}