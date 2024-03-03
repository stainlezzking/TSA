
cases = [
    {
       url : "https://www.studyhabitschool.com/",
       img : "./assets/images/studyhabit.png",
       title : "Study Habit" ,
       body : "Temenos manages unique alternative investment solutions aside from our banking technologies that offer investors as well as banks, private and public firms the benefits of better diversification.",
       anim : "fade-down-right"
    },
    {
        url : "#",
        img : "./assets/images/citypride.png",
        title : "City Pride School" ,
        body : "Chukwuebuka portfolio website is a unique way to showcase his work and let others know about himself. It’s like an evergreen platform for his projects, case studies, and information about himself. In addition, it’s one of the best ways to express your personality, experience, and capabilities",
        anim : "fade-down-left"
     },
     {
        url : "#",
        img : "./assets/images/claudiaRydel.png",
        title : "Claudia Rydel School" ,
        body : "Chellins Group Limited is a delivery-conscious conglomerate of companies, that are driven by a passionate purpose to assist our clients in fulfilling their dreams within these subsidiaries of Home Ownership (Chellins Properties), Building, and Civil Works (Chellins Engineering), and financial freedom (Chellins Partnership)",
        anim : "fade-down-right"
     },
     {
        url : "#",
        img : "./assets/images/monterivera.png",
        title : "Monte Rivera School" ,
        body : "Cenuel Designs and Construction was established in 2018 and incoporated with CAC in 2021, the company is founded with the vision to share in the fast growth in construction industry in Nigeria.",
        anim : "fade-down-left"
     }
]

//  you can add in alt property later
// YOU CAN VIEW PREVIOUS COMMITS TO BRING BACK URL AND TEXTS
module.exports = cases.map(c=>{
    return (`
    <div class="card">
    <div class="card_image">
        <img src="${c.img}" alt="" >
        </div>
        <a href="${c.url}" ${ c.url !== "#" ? 'target="_blank"': ''} class="card_body" style="text-decoration:none;">
            <h3 class="orbitron py-1 text-center"> 🔗 ${c.title}</h3>
        </a>
    </div>
    `)
}).join("")