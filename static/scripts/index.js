window.addEventListener("load", () => {
    document.querySelector("input").addEventListener("keydown", event => {
        const query = event.target.value.trim()

        if(event.key !== "Enter" || query === "") return
        window.location.href = `https://duckduckgo.com/?q=${query}`
    })
})