
let services = [
    {
        svg :     `
        <svg  viewBox="0 0 293 292" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M122.362 182.46H49.4107V73.0342C49.4107 66.585 51.9726 60.3999 56.533 55.8396C61.0933 51.2792 67.2784 48.7173 73.7276 48.7173H219.629C226.079 48.7173 232.264 51.2792 236.824 55.8396C241.384 60.3999 243.946 66.585 243.946 73.0342V97.3512M25.0938 218.936H170.995" stroke="#7BFF66" stroke-width="4.70651" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M219.629 206.777H219.751M170.996 111.941C170.996 103.88 178.254 97.3511 187.203 97.3511H252.056C261.005 97.3511 268.263 103.88 268.263 111.941V228.663C268.263 236.724 261.005 243.253 252.056 243.253H187.203C178.254 243.253 170.996 236.724 170.996 228.663V111.941Z" stroke="#7BFF66" stroke-width="4.70651" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M148.966 101.012L160.21 112.256L148.966 123.499M120.858 101.012L109.615 112.256L120.858 123.499" stroke="#24FF00" stroke-width="4.70651" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M231.723 153.568L241.397 163.242L231.723 172.917M207.536 153.568L197.862 163.242L207.536 172.917" stroke="#24FF00" stroke-width="4.04978" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        title : "Web Developement",
        plans : ` Business website, School website, Shopping website, 
        Banking website, Church website, Bitcoin website, Exam website, Website Management.
        All kinds of website.`,
        url : "./webdev.html"
    },
    {
        svg :`
        <svg width="293" height="292" viewBox="0 0 293 292" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M145.9 231.009L231.008 145.9L267.483 182.375L182.375 267.484L145.9 231.009Z" stroke="#7BFF66" stroke-width="4.71" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.3169 24.3169L116.55 116.55M218.85 158.059L200.613 66.8711L24.3169 24.3169L66.8711 200.613L158.059 218.85L218.85 158.059Z" stroke="#7BFF66" stroke-width="4.71" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M133.741 158.059C147.171 158.059 158.058 147.172 158.058 133.742C158.058 120.313 147.171 109.426 133.741 109.426C120.312 109.426 109.425 120.313 109.425 133.742C109.425 147.172 120.312 158.059 133.741 158.059Z" stroke="#7BFF66" stroke-width="4.71" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        title : 'Design',
        plans : `
        Logo designs, Business Card, ID card, Banners, Flyers, Brand arts, Events Ticket,Textbook covers, music cover...
        `,
        url : "./design.html"
    },
    {
        svg : ` <svg viewBox="0 0 361 274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M107.503 255.282C156.595 255.282 196.392 215.485 196.392 166.393C196.392 117.3 156.595 77.5029 107.503 77.5029C58.4103 77.5029 18.613 117.3 18.613 166.393C18.613 215.485 58.4103 255.282 107.503 255.282Z" stroke="#7BFF66" stroke-width="4.70651"/>
        <path d="M254.314 255.282C303.406 255.282 343.204 215.485 343.204 166.393C343.204 117.3 303.406 77.5029 254.314 77.5029C205.222 77.5029 165.424 117.3 165.424 166.393C165.424 215.485 205.222 255.282 254.314 255.282Z" stroke="#7BFF66" stroke-width="4.70651"/>
        <circle cx="178.615" cy="106.751" r="91.2429" stroke="#24FF00" stroke-width="4.70651" stroke-dasharray="6.88 6.88"/>
    </svg> `,
        title : 'UI/UX Design',
        plans : `UI design, UX design, Product design, Web design,
        Research, Usability testing.`   ,
        url : "./UI-UX-design.html"
    }
]

module.exports = services.map(service=>{
    return (`
    <div class="card">
                ${service.svg}         
    <div class="info">
        <h3 class="mb-1"> ${service.title}</h3>
        <div>
            ${service.plans}
        </div>
    </div>
    <p style="text-align:end; margin-top:1rem; font-weight:bold;"><a class="orbitron" href="${service.url}"> Open </a></p>
</div>
    ` )
}).join('')