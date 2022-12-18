import { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";
import styled from "styled-components";
import ChannelItem from "./ChannelItem";

const Container = styled.div`
    display:flex;
    ul{
        width:100%;
        padding:0;
    }
`

export default function BrowseChannels({onClose}){
    const {client,setActiveChannel} = useChatContext();
    const[channels,setChannels] = useState([])
    const [loadingChannels, setLoadingChannels] = useState(true);

    useEffect(()=>{
        const fetchChannels = async () => {
            const response = await client.queryChannels();

            const filteredChannels = response.filter(c => c.type === 'team')
            setChannels(filteredChannels);
            setLoadingChannels(false);
        };
        fetchChannels();
    },[])

    const joinChannel = (id) => {
        const channel = channels.find(c=>c.id===id)
        if(!channel) return onClose();
        channel.addMembers([client.user.id])
        setActiveChannel(channel)
        onClose();
    }

    return(
        <Container>
            {loadingChannels ? (
                <div className="loading-text">Loading Channels...</div>

            ):(
                <ul>
                {channels.map((c)=> (<ChannelItem key={c.cid} onJoin={joinChannel} channel={c} /> ))}
                </ul>
            )}
        </Container>
    )
}