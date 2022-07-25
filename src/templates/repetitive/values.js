let arr = [
    {
        title : 'People',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/v-love.png'
    },
    {
        title : 'Communication',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/v-message.png'
    },
    {
        title : 'People',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/v-flag.png'
    },
    {
        title : 'People',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/v-check.png'
    },
    {
        title : 'People',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/v-bulb.png'
    },
    {
        title : 'People',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugitquidem maiores dolore, placeat dignissimos quisquam quos eum illo magni?',
        url : './assets/images/v-breese.png'
    }
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