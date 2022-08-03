

module.exports = `
<section id="contact-us" class="about">
<h2 class="big_t"> Contact us</h2>
<form method="GET" action="mailto:enquiries@thesevenapex.com">
    <div class="group-input">
        <div style="width: 100%;">
            <label for="subject" class="mb-1"> *subject </label>
            <input name="subject" type="text" placeholder="Start a project">
        </div>
    </div>
    <div class="my-2">
        <label for="body" class="mb-1"> message</label>
        <textarea name="body" id="body">
        </textarea>
    </div>
    <button> Send</button>
</form>
</section>
`