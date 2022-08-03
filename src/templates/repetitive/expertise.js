let arr = [
    {
        title : 'E-learning',
        body : 'Online training, learning management systems and web apps',
        url : './assets/images/expertise-2.png'
    },
    {
        title : 'E-commerce',
        body : 'Online stores, retail marketplace and ecommerce startups',
        url : './assets/images/expertise-3.png'
    },
    {
        title : 'Real Estate',
        body : 'Smart buildings, digital twins and real estate app development',
        url : './assets/images/expertise-1.png'
    },
    {
        title : 'Healthcare',
        body : 'Clinical & workforce management and telehealth solutions.',
        url : './assets/images/expertise-4.png'
    },
    {
        title : 'Travel',
        body : 'Solutions for tour operators and travel agencies and corperate clients.',
        url : './assets/images/expertise-5.png'
    },
  
]


module.exports = arr.map(item=>{
    return (`
    <li>
    <div>
        <img src="${item.url}" alt="">
        <div>
            <h3 class="orbitron"> ${item.title}</h3>
            <p>
            ${item.body}
            </p>
        </div>
    </div>
</li>
    `)
}).join('')