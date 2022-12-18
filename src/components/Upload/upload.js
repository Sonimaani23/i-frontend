import React , {useState} from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./upload.css";


const Upload = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [PostImage, setPostImage] = useState("");
    let img;

    const handleSubmit = async () => {
        const newPost = new FormData();
        newPost.append("file", image);
        newPost.append("upload_preset", "p8uout4k");
        newPost.append("name", name);
        newPost.append("location", location);
        newPost.append("description", description);

        await Axios.post("https://api.cloudinary.com/v1_1/dppdz9cu9/image/upload", newPost)
        .then(res=>{
            console.log(res);
            console.log(res.data.secure_url);
            setPostImage(res.data.secure_url);
            img=res.data.secure_url;
        });
        newPost.append("PostImage", PostImage);


        

        await Axios("https://new-3fn6.onrender.com/upload", {
            method : "post",
            headers: {
                "Content-Type":"application/json"
            },
            data:{
                name,
                location,
                description,
                PostImage: img
            }
        }).then(res=>{
          console.log(res);
            console.log({
              name,
              location,
              description,
              PostImage: img
          });
        }).catch(e=>{
            console.log(e.message);
        })

        navigate('/postview');


        

    }
  return (
    <div className="upload">
      <div className= "content">
        <div className="btn">
          <input type="file" name="Browse" id="image" onChange={(e)=>{setImage(e.target.files[0])}}/>
        </div>
        <input type="text" placeholder="name" value = {name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder="location" value = {location} onChange={(e)=>{setLocation(e.target.value)}} />
        <input type="text" placeholder="description" value = {description} onChange={(e)=>{setDescription(e.target.value)}} />


        <button type="submit"
        onClick={()=>handleSubmit()}
        >Create Post</button>
      </div>
    </div>
  );
}

export default Upload;

