import axios from "axios";

const filterCat=async(userData)=>{
    const response=await axios.post("https://b2training.beaconhouse.net/tag_scanner/api/getcategory",{category_id:userData},{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
     
)
    if(response.data){
        // console.log("filter data",response.data)
        return response.data.data
    }
}

export const filterService={
    filterCat
}