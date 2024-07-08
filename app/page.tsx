import axios from "axios";

async function getUserData(){
  // await new Promise((r)=>{setTimeout(r,5000)})
  const response= await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data 
  
}


export default async  function Home() {
  const userDetails=await getUserData();

  return<div>
    {userDetails.name}
    {userDetails.email}

     </div>;
}
