import styled from "styled-components";

const Container = styled.div`

`

export default function ChannelListContainer({loading,children}){
    const loadingText = " "

    return
    <Container>
     {loading ? <div className="loading-text" ></div> : children}
    </Container>
}