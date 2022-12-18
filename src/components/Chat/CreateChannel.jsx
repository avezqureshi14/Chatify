import styled from "styled-components";
import { useChatContext } from "stream-chat-react";
import { useState } from "react";

const Form = styled.form`
 border:1px solid #999;
 max-width:500px;
 margin:50px auto;
 padding:20px;
 border-radius:10px;

 .input-group{
    margin-bottom:20px;
    label{
        display:block;
        color:#333;
        margin-bottom:10px;
        font-size:15px;
    }
    input,
    textarea{
        padding:15px;
        width:100%;
        background:transparent;
        border:1px solid #999;
        color:#333;
        font-size:17px;
    }
 }

 .submit{
    button{
        padding:20px;
        text-align:center;
        background-color:black;
        color:#fff;
        width:100%;
    }
 }
`

export default function CreateChannek({onClose}){
    const {client,setActiveChannel} = useChatContext()
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const[desc,setDesc] = useState('')
    const createChannel = (e) => {
        e.preventDefault()

        const channelId =name.replace(/\s/g,"-").toLowerCase();
        const channel = client.channel("team", channelId,{
            name,
            image,
            desc,
            members:[client.user.id],
        })
        setActiveChannel(channel)
        onClose()
    }
    return( 
    <Form onSubmit={createChannel} >
    <div className="input-group">
    <label htmlFor="name" >Channel Name</label>
    <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} />
    </div>
    <div className="input-group">
    <label htmlFor="image" >Image URL</label>
    <input name="image" id="image" onChange={(e)=> setName(e.target.value)} />
    </div>
    <div className="input-group">
    <label htmlFor="name" >Channel Description</label>
    <textarea name="desc" id="desc" onChange={(e)=> setName(e.target.value)} />
    </div>
    <div className="submit">
    <button type="submit" >Create Channel</button>
    </div>
    
    </Form>
    )
}