const React = require('react')
const Layout = require('./src/layout').default

exports.wrapPageElement = ({ element, props }) => (
    <Layout {...props} location={props.location}>
        {element}
    </Layout>
)
