
cases = [
    {
       a1 : "firstURL",
       a2 : "secondURL",
       img : "./assets/images/cases.jpg",
       title : "Oflod Investment" ,
       body : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempore impedit culpa provident ipsam aut eos quibusdam laudantium quasi voluptatibus?"
    },
    {
        a1 : "firstURL",
        a2 : "secondURL",
        img : "./assets/images/cases.jpg",
        title : "Oflod Investment" ,
        body : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempore impedit culpa provident ipsam aut eos quibusdam laudantium quasi voluptatibus?"
     },
     {
        a1 : "firstURL",
        a2 : "secondURL",
        img : "./assets/images/cases.jpg",
        title : "Oflod Investment" ,
        body : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempore impedit culpa provident ipsam aut eos quibusdam laudantium quasi voluptatibus?"
     },
     {
        a1 : "firstURL",
        a2 : "secondURL",
        img : "./assets/images/cases.jpg",
        title : "Oflod Investment" ,
        body : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempore impedit culpa provident ipsam aut eos quibusdam laudantium quasi voluptatibus?"
     }
]

//  you can add in alt property later
module.exports = cases.map(c=>{
    return (`
    <div class="card">
    <div class="card_image">
        <img src="${c.img}" alt="" >
        <div class="image_hover">
                <a href="${c.a2}"> view case</a>
        </div>
    </div>
    <div class="card_body">
        <h3 class="orbitron py-1"> ${c.title}</h3>
        <p>
        ${c.body}
        </p>
    </div>
</div>
`)
}).join("")