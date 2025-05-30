import { styled } from "styled-components";
const Main=(props)=>{
    return(
        <Container>
            <ShareBox>Share
            <div>
                <img src="/images/user.svg" alt=""/>
                <button>Start a post</button>
            </div>
            <div>
                <button>
                    <img src="/images/photo-icon.svg" alt=""/>
                    <span>Photo</span>
                </button>
                <button>
                    <img src="/images/video-icon.svg" alt=""/>
                    <span>Video</span>
                </button>
                <button>
                    <img src="/images/event-icon.svg" alt=""/>
                    <span>Event</span>
                </button>
                <button>
                    <img src="/images/article-icon.svg" alt=""/>
                    <span>Write Articles</span>
                </button>
            </div>
            </ShareBox>
        </Container>
    )
}
const Container=styled.div`
grid-area: main;
`;
const CommonCard=styled.div`
box-shadow:  0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #ffff;
border-radius:5px;
position: relative;
border: none;
transition: box-shadow 83ms;
`;
const ShareBox=styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
div{
    button{
        outline: none;
        color: rgba(0,0,0,0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height:48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight:600;
    }
    &:first-child{
        display: flex;
        align-items: center;
        padding: 0px 16px 0px 16px;
        img{
            width: 48px;
            border-radius: 50%;
            margin-right: 8px;
        }
        button{
            flex-grow: 1;
            margin: 4px 0;
            border-radius: 35px;
            border: 1px solid rgba(0,0,0,0.15);
            padding-left: 16px;
            background-color: white;
            text-align: left;
        }
    }
    &:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom:4px;
        button{
            img{
                margin: 0 4px 0 -2px;
            }
            span{
                color: #70b5f9;
            }
        }
    }
}
`;

export default Main;