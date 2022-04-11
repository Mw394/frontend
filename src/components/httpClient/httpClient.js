const domain = process.env.DOMAIN || "localhost";
const port = process.env.PORT || 8087;

export async function post(url, payload, credentials) {
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
    if (!response.ok) throw new Error(response.status)

    return await response.json()
}

export async function get(url, credentials) {
    const response = await fetch(`http://${domain}:${port}/${url}`, {
        method: "GET", 
        headers: {
            "accept" : "application/json"
        },
        credentials: credentials && "include",
    }
    )
    if (!response.ok) throw new Error(response.status)

    return await response.json()
}
