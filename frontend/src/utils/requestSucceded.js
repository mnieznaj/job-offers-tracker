export const requestSucceded = () => {
    document.getElementById("done").classList.remove("done--hide");
    setTimeout(() => {
        document.getElementById("done").classList.add("done--hide");
    }, 2000)
}