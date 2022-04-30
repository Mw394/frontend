const domain = process.env.DOMAIN || "localhost";

export async function post(url, payload, credentials, port) {
    console.log(url)
    const response = await fetch(`http://${domain}:${port}/${url}`, {
        method: "POST", 
        headers: {
            "content-type": "application/json",
            "accept" : "application/json"
        },
        credentials: credentials && "include",
        body: JSON.stringify(payload)
    }
    )
    return response
}

export async function get(url, credentials, port) {
    const removeSpaces = str => str.replace(/\s/g, '');
    var newUrl = removeSpaces(url)
    const response = await fetch(`http://${domain}:${port}/${newUrl}`, {
        method: "GET", 
        headers: {
            "accept" : "application/json"
        },
        credentials: credentials && "include",
    }
    )
    return response
}
