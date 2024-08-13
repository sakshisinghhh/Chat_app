import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  current: null,
  isLoading:true,
  fetchUserInfo: async(uid) =>{
    if(!uid) return set({current:null, isLoading:false});

    try{
        const docRef = doc(db,"users",uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            set({current:docSnap.data(), isLoading:false});
        }else{
            set({current:null, isLoading:false});
        }

    }catch(err){
        console.error(err);
        return set({current:null, isLoading:false});
    }
  },
}));