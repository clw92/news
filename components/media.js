import { useState } from 'react';
import axios from 'axios';
import useAxios from "../components/hooks/useAxios"

export default function Media() {
    let http = useAxios();
    const [files,setFiles] = useState()
    const uploadImage = async (e) => {
      
        e.preventDefault();
    
        const formData = new FormData()
    
        formData.append('files', files[0])
    
        http.post("/upload", formData)
        .then((response)=>{
    
          const imageId = response.data[0].id
    
          http.post({image:imageId}).then((response)=>{
            //handle success
          }).catch((error)=>{
              //handle error
            })
        }).catch((error)=>{
            //handle error
        })
    
    }
    
  
    return (
        <form onSubmit={uploadImage}>
          <input 
              type="file"
              onChange={(e)=>setFiles(e.target.files)}
          />
          <input type="submit" value="Submit" />
        </form>
    );
}
