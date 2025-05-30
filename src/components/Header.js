import { styled } from "styled-components";
const Header=(props)=>{
    return(
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt=""/>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="search"/>
                    </div>
                    <SearchItem>
                    <img src="/images/search-icon.svg" alt=""/>
                    </SearchItem>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt=""/>
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-network.svg" alt=""/>
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-jobs.svg" alt=""/>
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-messaging.svg" alt=""/>
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt=""/>
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                <img src="/images/user.svg" alt=""/>
                                <span>Me</span>
                                <img src="/images/down-icon.svg" alt=""/>
                            </a>
                            <SignOut>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                        <a>
                            <img src="/images/nav-work.svg" alt=""/>
                            <span>Works                                
                               <img src="/images/down-icon.svg" alt=""/>
                            </span>
                        </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    );
}
const Container=styled.div`
    padding:0px 24px;
    z-index: 100;
    position: fixed;
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left:0;
    top:0;
    width:100vw;
`;
const Content=styled.div`
display: flex;
align-items: center;
margin:0 auto;
min-height:100%;
max-width: 1128px;
`;
const Logo=styled.div`
margin-right: 8px;
font-size: 0px;
img{

}
`;
const Search=styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
&>div{
max-width: 280px;
input{
    border: none;
    background-color: #eef3f8;
    color: rgba(0,0,0,0.9);
    width:218px;
    box-shadow: none;
    border-radius: 2px;
    padding:0 8px 0 40px;
    line-height: 1.75px;
    font-weight: 400;
    font-size: 14px;
    height:34px;
    border-color: #dce6f1;
    vertical-align: text-top;
}
}
`;
const SearchItem=styled.div`
  width:40px;
  position: absolute;
  z-index: 1;
  top:10px;
  border-radius: 0 2px 2px 0;
  margin:0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav=styled.nav`
margin-left: auto;
display: block;
@media(max-width:768px){
    width: 100%;
    left:0;
    bottom:0;
    background:white;
    position: fixed;
}
`;
const NavListWrap=styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;
.active{
    span:after{
        content: "";
        transform: scaleX(1);
        border-bottom: 2px solid var(--white,#ffff);
        bottom: 0;
        left:0;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        width:100%;
        border-color: rgba(0,0,0,0.9);
    }
}
`;
const NavList=styled.li`
display: flex;
margin-right: 20px;
align-items: center;
a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    font-weight: 400;
    line-height: 1.5;
    min-height: 42px;
    max-width: 80px;
    text-decoration: none;
    position:relative;
    span{
        color:rgba(0,0,0,0.5);
        display: flex;
align-items: center;
    } 
    @media(max-width:768px){
    width: 70px;
    }
}
&:hover,&:active{
    a{
        span{
            color:rgba(0,0,0,0.9);
        }
    }

}
`;
const SignOut=styled.div`
position: absolute;
top:60px;
right:16%;
width:100px;
height:40px;
border-radius: 0 0 5px 5px;
background: white;
transition-duration:167ms;
font-size: 16px;
display: none;
text-align: center;
`;
const User=styled(NavList)`
a>span{
    width:24px;
    border-radius: 50%;
}
a>img{
    width:24px;
    height:24px;
    border-radius: 50%;
}
span{
    display: flex;
    align-items: center;
}
&:hover{
    ${SignOut}{
        align-items: center;
        justify-content: center;
        display: flex;
    }
}
`;
const Work=styled(User)`
border-left:1px solid rgba(0,0,0,0.08);
`;

export default Header;