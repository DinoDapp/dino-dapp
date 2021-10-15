async function subscribe() {
    const email = document.getElementById('emailsign').value
    const api = `https://api.dreamhost.com?key=C7RMT9KFDCWA4AQ9&cmd=announcement_list-add_subscriber&listname=news&domain=dinodapp.com&email=${email}`
    try {
        const response = fetch(api)
        const raw = (await response).json()
        console.log(raw)
    } catch (ex) {
        console.error(ex)
    }
}