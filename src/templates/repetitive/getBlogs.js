const blogs = require("./db/blog-db.json")

module.exports = blogs.map(blog=>{
    return(`
    <div class="card" id="blog-preview">
    <div class="card-image">
        <img src="${blog.url1}" alt="" srcset="">
    </div>
        <div class="card-body">
        <a href="${blog.link}">
            <h3> ${blog.title}</h3>
            <p class="paragraph">
               ${blog.body.slice(0,250)}...
               <br>
            </p>
            <p><a style="text-align:end; color: blue;" href="${blog.link}"> Read</a></p>
        </a>
        </div>
</div>
    `)
})
.join("")