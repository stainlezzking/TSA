const HWP  = require('html-webpack-plugin')
const path = require('path')

module.exports = [new HWP({
    title : "THE SEVEN APEX STUDIO | BUILD WEBSITES AND BUSINESS BRANDING",
    template : path.resolve(__dirname, "src/templates/index.ejs"),
    filename : 'index.html'
}),
new HWP({
    // i could use webpack-ejs-loader to load data into the template with the data property : {},
     template : path.resolve(__dirname, "src/templates/about.ejs"),
     filename : 'about.html'
}),
new HWP({
    // i could use webpack-ejs-loader to load data into the template with the data property : {},
     template : path.resolve(__dirname, "src/templates/expertise.ejs"),
     filename : 'expertise.html'
}),
new HWP({
    // i could use webpack-ejs-loader to load data into the template with the data property : {},
     template : path.resolve(__dirname, "src/templates/blogs.ejs"),
     filename : 'blogs.html'
}),
new HWP({
    template : path.resolve(__dirname,'src/templates/services/webdev.ejs'),
    filename : 'webdev.html'
}),
new HWP({
    template : path.resolve(__dirname,'src/templates/services/design.ejs'),
    filename : 'design.html'
}),
new HWP({
    template : path.resolve(__dirname,'src/templates/services/UI-UX-design.ejs'),
    filename : 'UI-UX-design.html'
}),
// blogs section
new HWP({
    template : path.resolve(__dirname,'src/templates/blogs/school-benefits.ejs'),
    filename : 'school-benefits.html'
}),
new HWP({
    template : path.resolve(__dirname,'src/templates/blogs/good-business-brand.ejs'),
    filename : 'good-business-brand.html'
}),
new HWP({
    template : path.resolve(__dirname,'src/templates/blogs/online-presence.ejs'),
    filename : 'online-presence.html'
})
]