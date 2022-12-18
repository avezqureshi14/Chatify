import { useEffect, useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import styled from "styled-components";
import ChannelListContainer from "./ChannelListContainer";

const Container = styled.div`

    .header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:23px;

        h2{
            color:#333;
            margin: 0 0 10px;
            font-size:16px;
        }

        button{
            color:white;
            font-size:20px;
            background:#333;
            border:none;
            cursor:pointer;
        }
    }
`
const randomstr = () => Math.random().toString(36).substring(7);
export default function CustomChannelList({onClickAdd}){
    const {client} = useChatContext();
    const [channelList,setchannelListKey] = useState(randomstr());
    const filters = {
        members:{$in:[client.user.id]},
    }
    useEffect(()=>{

    },[])
    return (
    <Container>
    <div className="header">
    <h2>Channels</h2>
    <button className="plus" onClick={onClickAdd} >+</button>
    </div>

    <ChannelList key={channelList} list={listProps => <ChannelListContainer {...listProps} filters={filters} />} t/>
    </Container>)
}