import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userData:{
    userId: "",
    username: "",
    email: "",
    gallery: {
      videos: [],
    },
    storage: {
      totalStorage: 52428800,
      UsedStorage: 0,
      FreeStorage: 52428800,
    },
    usage: {
      bandwidthTotalUsage: 0,
      bandwidthDailyUsage: 0,
      dailyLimit: 104857600,
    },
  }
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserData:(state,action)=>{
   
      state.userData=action.payload.data
    },
    setVideosData: (state, action) => {
      console.log(action.payload.gallery.videos);
      const gallery = action.payload.gallery;
    
      // Ensure immutability when updating nested state
      state.userData.gallery = {
        ...state.userData.gallery,
        // Create a new array for videos to trigger a re-render
        videos: gallery?.videos ? [...gallery?.videos] : [], 
      };
    
      // Ensure that the storage and usage are updated immutably
      state.userData.storage = {
        ...state.userData.storage,
        UsedStorage: 52428800 - gallery.freeStorage,
        FreeStorage: gallery.freeStorage,
      };
    
      state.userData.usage = {
        ...state.userData.usage,
        bandwidthDailyUsage: 104857600 - gallery.freeBandwidth,
      };
    }
  },
     
    
})

export const { setUserData,setVideosData } = UserSlice.actions

export default UserSlice.reducer