import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import ChannelBody from '../Chat/ChannelBody'
import CustomChannelList from '../Chat/CustomChannelList'
import { Chat, Channel } from "stream-chat-react";
import 'stream-chat-react/dist/css/index.css'
import AddingChannel from "../Chat/AddingChannel";
import styled from "styled-components";
import ChatHeader from "../Common/ChatHeader";

const API_KEY = process.env.REACT_APP_API_KEY

const Container = styled.div`
  display:flex;
  .left-column{
    width:300px;
  }

  .right-column{
    flex:1;
  }
`

const USER1 = {
  id: "user1",
  name: "user1",
  image: "https://avatars.githubusercontent.com/u/81325730?s=100&v=4"
}
const USER2 = {
  id: "user2",
  name: "user2",
  image: "https://avatars.githubusercontent.com/u/89730354?s=100&v=4"
}
const USER3 = {
  id: "user3",
  name: "user3",
  image: "https://avatars.githubusercontent.com/u/1296369?s=100&v=4"
}
const USER4 = {
  id: "user4",
  name: "user4",
  image: "https://avatars.githubusercontent.com/u/45865775?s=100&v=4"
}

const users = [USER1, USER2, USER3, USER4];

const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

function Stream() {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [addingTeamChannel, setAddingTeamChannel] = useState(false);
  useEffect(() => {
    async function initChat() {
      const client = StreamChat.getInstance(API_KEY);
      const user = getRandomUser()

      client.connectUser(user, client.devToken(user.id))
      const channel = client.channel("team", "general", {
        name: "Stream Hackathon",
        image: "https://tse3.mm.bing.net/th?id=OIP.SiVeFrZjOhdaQmcd5NI-CQHaEK&pid=Api&P=0"
      });
      await channel.create();
      channel.addMembers([user.id])
      setChannel(channel)
      setChatClient(client);
    }

    initChat()

    return () => {
      if (chatClient) chatClient.disconnectUser();
    }
  }, []);

  if (!chatClient || !channel) return <></>
  return (
    <div>
    <ChatHeader/>
      <Chat client={chatClient} theme={'messaging light'}>
        <Container>
          <div className="left-column" >
            <CustomChannelList onClickAdd={()=> setAddingTeamChannel(true) }  />
          </div>
          <div className="right-column" >
            <Channel>
              {addingTeamChannel ? <AddingChannel onClose={()=>setAddingTeamChannel(false)} /> : <ChannelBody />}
            </Channel>
          </div>
        </Container>
      </Chat>
    </div>
  );
}

export default Stream;
