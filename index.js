const btn = document.querySelector(".getmilk")
btn.addEventListener("click", twittermessage)

function twittermessage() {
    const twitterLink = "https://twitter.com/intent/tweet?text="
    window.open(`https://twitter.com/intent/tweet?text=I%20collected%20my%20%24zkEggs%20on%20%40zkEggs%F0%9F%A5%9A%0D%0A%0D%0AThe%20first%20%24EGG%20fork%20coming%20on%20%23zkSync%20&`)
}