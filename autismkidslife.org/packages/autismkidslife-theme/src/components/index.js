import React from "react"
import { connect, Global, css, styled  } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"

const Root = ( { state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
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
      <Header>
          <HeaderContent>
            <h1>AutismKidsLife</h1>
            <p>Current URL: {state.router.link}</p>
            <Menu>
              <Link link="/">Home</Link>
              <br />
              <Link link="/page/2">More Posts</Link>
              <br />
              <Link link="/about-us">About Us</Link>
            </Menu>
          </HeaderContent>
      </Header>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive}></List>
          <Post when={data.isPost} />
          <Post when={data.isPage} />
        </Switch>
      </main>
    </>
  )
}

export default connect(Root)

const Header = styled.header `
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: maroon;

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

  