import axios from "axios";

const googlelLogin=async(userData)=>{
    const response=await axios.post("https://b2training.beaconhouse.net/tag_scanner/api/google",userData,{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    // console.log(userData)
)
    if(response.data){
       // console.log(response.data)
        return response.data
        
    }
}


export const loginService={
    googlelLogin
}