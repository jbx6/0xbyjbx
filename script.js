function yes() {
    const el = document.getElementById('contact');
    let formHTML = 
    `<div class='contact'>
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
        <fieldset style="display: flex; flex-direction: column;">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="your name"><br>
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" placeholder="address@domain.com"><br>
            <label for="comment">Comment:</label>
            <textarea name="comment" id="comment" rows="6"></textarea><br>
            <fieldset>
                <input type="radio" name="consent" id="consent">
                <label for="consent" role="checkbox" aria-required="true">I consent to my data being stored and processed by this website in order to appropriately manage and delivery my inquiry.</label><br><br>
                <input type="submit" value="Submit">
                <button class="primary" type="submit">Submit</button>
            </fieldset>
        </fieldset>
        </form>
    </div>`
    ;
    el.innerHTML = formHTML;
  }
  
  function no() {
    const el = document.getElementById('contact');
    let formHTML = ``;
    el.innerHTML = formHTML;
  }