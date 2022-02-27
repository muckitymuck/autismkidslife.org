import React from "react"
import { connect } from "frontity"

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    const html2react = libraries.heml2react.Component

    return (
        <div>
            <h2>{page.title.rendered}</h2>
            <Html2React html={page.content.rendered } />
        </div>
    )
}
export default connect(Page)