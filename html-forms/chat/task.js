const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector( '.chat-widget__messages' );

chatWidget.addEventListener("click", e =>{
    chatWidget.classList.add("chat-widget_active");

});

chatWidget.addEventListener("keyup",  event => {
    if(event.key === "Enter"){
        let userMassage = document.getElementById("chat-widget__input").value;
        if(userMassage != "") {

            messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time last_time"></div>
                        <div class="message__text last_massage">
                        </div>
                        </div>`;

            let now = new Date(),
                h = now.getHours(),
                m = now.getMinutes();

            let lastTime = document.querySelector(".last_time"),
                lastMassage = document.querySelector(".last_massage");

            lastTime.innerHTML = h + ":" + m;
            lastMassage.innerHTML = userMassage;
            lastTime.classList.remove("last_time");
            lastMassage.classList.remove("last_massage");
            document.getElementById("chat-widget__input").value = "";

            messages.innerHTML += `
                    <div class="message">
                        <div class="message__time last_time"></div>
                        <div class="message__text last_massage">
                        </div>
                        </div>`;

            lastTime = document.querySelector(".last_time");
            lastMassage = document.querySelector(".last_massage");

            lastTime.innerHTML = h + ":" + m;
            lastMassage.innerHTML = getWord();
            lastTime.classList.remove("last_time");
            lastMassage.classList.remove("last_massage");

            $('.chat-widget__messages-container').stop ().animate ({
                scrollTop: $('.chat-widget__messages-container')[0].scrollHeight
            });

        }
    }
});

function getWord() {
    const words = [
            'Здравствуйте!',
            'Как дела?',
            "Как устроиться на работу в Нетологию?:)"
        ],
        index = Math.floor(Math.random() * words.length);

    return words[index];
}
