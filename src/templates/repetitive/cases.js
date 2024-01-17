
cases = [
    {
       url : "https://temenosglobal.com",
       img : "./assets/images/case.jpg",
       title : "Temenos global" ,
       body : "Temenos manages unique alternative investment solutions aside from our banking technologies that offer investors as well as banks, private and public firms the benefits of better diversification.",
       anim : "fade-down-right"
    },
    {
        url : "https://chukwuebukastanley.com",
        img : "./assets/images/case2.png",
        title : "Portfolio website" ,
        body : "Chukwuebuka portfolio website is a unique way to showcase his work and let others know about himself. It’s like an evergreen platform for his projects, case studies, and information about himself. In addition, it’s one of the best ways to express your personality, experience, and capabilities",
        anim : "fade-down-left"
     },
     {
        url : "https://www.chellinsgroup.com/",
        img : "./assets/images/case3.png",
        title : "Real Estate" ,
        body : "Chellins Group Limited is a delivery-conscious conglomerate of companies, that are driven by a passionate purpose to assist our clients in fulfilling their dreams within these subsidiaries of Home Ownership (Chellins Properties), Building, and Civil Works (Chellins Engineering), and financial freedom (Chellins Partnership)",
        anim : "fade-down-right"
     },
     {
        url : "https://www.cenuelconstruction.com/",
        img : "./assets/images/case4.png",
        title : "Designs and construction" ,
        body : "Cenuel Designs and Construction was established in 2018 and incoporated with CAC in 2021, the company is founded with the vision to share in the fast growth in construction industry in Nigeria.",
        anim : "fade-down-left"
     }
]

//  you can add in alt property later
module.exports = cases.map(c=>{
    return (`
    <div class="card" data-aos="${c.anim}" data-aos-delay="${Math.round(Math.random() * 100)*100}">
    <div class="card_image">
        <img src="${c.img}" alt="" >
        <div class="image_hover">
                <a href="${c.url}" target="_blank"> view case</a>
        </div>
    </div>
    <div class="card_body">
        <h3 class="orbitron py-1"> ${c.title}</h3>
        <p class="paragraph">
        ${c.body.slice(0,300)}...
        </p>
    </div>
</div>
`)
}).join("")