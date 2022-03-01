import React from "react";
import { connect, Global, css, styled, Head  } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";

const Root = ( { state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <title>AutismKidsLife</title>
        <meta
          name="description"
          content="One Family's journey to recover from childhood Autism"
          />
      </Head>

      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
      {/* checks if the page is a Post or a Page  */}
      <Header isPostType={data.isPostType} isPage={data.isPage}>

        <HeaderContent>

          <h1>AutismKidsLife</h1>

          { state.theme.isUrlVisible ? ( 
            <>
              Current URL: {state.router.link}{" "} 
              <button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</button>
            </> 
          ) : ( 
              <button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</button>
            ) 
          }
          <Menu>
            <Link link="/">Home</Link>
            <Link link="/destinations">Destinations</Link>
            <Link link="/about-us">About Us</Link>
          </Menu>


        </HeaderContent>
      </Header>
      <hr />
      <main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </main>
    </>
  )
}



const Header = styled.header `
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};

  h1 {
    color: #4a4a4a;
  }
  `
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 1em;
  margin: auto;  
  
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }  
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`
const button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`


export default connect(Root)