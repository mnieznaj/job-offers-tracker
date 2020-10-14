export const requestSucceded = (timeout) => {
    document.getElementById("done").classList.remove("done--hide");
    setTimeout(() => {
        document.getElementById("done").classList.add("done--hide");
    }, timeout)
}