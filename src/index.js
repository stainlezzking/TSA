import'./styles/style.scss'
require.context("./images/", true, /\.(png|svg|jpg|gif|)$/i)
require.context("./fonts/", true, /\.(png|svg|jpg|gif|woff2|woff|)$/i)
// this require context is just supported by webpack, i dont think its pure node


// import menu functionality
import "./modules/menuFunctionality"
console.log('here code')
