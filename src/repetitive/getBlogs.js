const blogs = require("./db/blog-db.json")

module.exports = blogs.map(blog=>{
    return(`
    <div class="card">
    <div class="card-image">
        <img src="${blog.url}" alt="" srcset="">
    </div>
        <div class="card-body">
        <a href="#">
            <h3> ${blog.title}</h3>
            <p>
               ${blog.body}
            </p>
        </a>
        </div>
</div>
    `)
})
.join("")