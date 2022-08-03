let arr = [
    {
        title : 'People',
        body : 'We value relationships with our clients, partners and employees and put people’s interests before anything else.',
        url : './assets/images/v-love.png'
    },
    {
        title : 'Communication',
        body : 'We always encourage our clients and team members to openly share their opinions and views.',
        url : './assets/images/v-message.png'
    },
    {
        title : 'Flexibility',
        body : 'Due to the nature of our jobs, we have greater control over our working schedule. this means we are able to prioritize our clients needs without compromising our work schedule.',
        url : './assets/images/v-flag.png'
    },
    {
        title : 'Meaning',
        body : 'Before creating a product, our team makes every effort to study the client’s goals in depth.',
        url : './assets/images/v-check.png'
    },
    {
        title : 'Creative',
        body : 'We never stop moving forward, developing, taking on new challenges. Each project brings us fresh ideas and insights.',
        url : './assets/images/v-bulb.png'
    },
    {
        title : 'Aesthetic',
        body : 'We obsess over details and strive to be perfectionists in every piece of code and every pixel of the interface.',
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