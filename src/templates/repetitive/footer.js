
module.exports = `
<style>
#chat-wa{
    display : block;
    position : fixed;
    bottom : 8%;
    right : 5%;
    width : 40%;
    max-width : 60px;
}
@media screen and (min-width:900px){
    #chat-wa{
        max-width:100px;
    }
}
#chat-wa img {
    max-width: 100%;
}
</style>
<a href="https://wa.me/message/EGWYLEIIIRY6I1" id="chat-wa"> 
    <img src="./assets/images/chat.png" alt="chat button to reach the seven apex on whatsapp" />
</a>
<footer id="seventh_view">
<h2 class="my-1 title"> Let's talk</h2>
<div class="content">
    <div class="contact">
        <a href="mailto:azukachukwuebuka07+theseven@gmail.com">
            azukachukwuebuka07+theseven@gmail.com
        </a>
        <p> lagos, Nigeria.</p>
    </div>
    <div class="fast-links">
        <h3> Quick Links</h3>
        <a href="./index.html#sec_view"> Cases</a>
        <a href="./about.html"> About us</a>
        <a href="./about.html#contact-us"> Contact us </a>
    </div>
    <div class="donation" style="color: #e5dbdb;">
        <h3 class="mb-1"> Support the team </h3>
        <p class="mb-1 paragraph" > Your support can make a significant difference in our mission. By donating or contributing,
         you're helping us continue our work and expand our impact. Every contribution, big or small,
          brings us one step closer to making quality education accessible to all. </p>
          <h4>
          Azuka Chukwuebuka Stanley <br> Kuda Bank <br> 2016970379 
          </h4>
          </p>
    </div>
</div>
</footer>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    document.querySelector("#support").addEventListener("click", function(e){
        document.getElementsByClassName("bt_context")[0].style.display = "none"
        document.getElementsByClassName("bt_info")[0].style.display = "block"
    })
</script>
<script>
AOS.init();

AOS.init({
disable: false, 
startEvent: 'DOMContentLoaded', 
initClassName: 'aos-init',
animatedClassName: 'aos-animate', 
useClassNames: false, 
disableMutationObserver: false, 
debounceDelay: 50, 
throttleDelay: 99, 
offset: 120,
delay: 0, 
duration: 400,
easing: 'ease',
once: true, 
mirror: false,
anchorPlacement: 'top-bottom',
});
 </script>
`