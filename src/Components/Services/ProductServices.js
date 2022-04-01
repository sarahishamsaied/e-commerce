import {productsCollection} from '../../Firebase'
import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'
const productsCollectionRef = collection(productsCollection,"Products")
class ProductServices {
    addProduct = (newProduct)=>{
        return addDoc(productsCollectionRef,newProduct);
    };
    getAllProducts = ()=>{
        return getDocs(productsCollectionRef)
    };
    getProduct = (id)=>{
        const productDoc = doc(productsCollection,"Products",id);
        return getDoc(productDoc);
    };
}
export default new ProductServices()