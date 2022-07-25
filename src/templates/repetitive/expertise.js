let arr = [
    {
        title : 'Real Estate',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/expertise-1.png'
    },
    {
        title : 'E-learning',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/expertise-2.png'
    },
    {
        title : 'E-commerce',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/expertise-3.png'
    },
    {
        title : 'Healthcare',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/expertise-4.png'
    },
    {
        title : 'Travel',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
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