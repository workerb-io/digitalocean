var eventConfig = {
    eventType: "keyup",
    eventProps: {
        key: "a",
        code: "keyA",
        keyCode: 65,
        which: 65,
        bubbles: true,
    }
}

var retryConfig = {
    numberOfTries: 20,
    retryDuration: 500
}

open("https://cloud.digitalocean.com/networking/domains")
type(args[0] + ".com", "Enter domain", {
    method: "by_placeholder",
    numberOfTries: 20,
    retryDuration: 500
})

click("Add Domain", retryConfig)

type("@", "Enter @ or hostname", {
    method: "by_placeholder",
    numberOfTries: 20,
    retryDuration: 500
})

click('[title="' + args[1] + '"]', {
    method: "by_query_selector"
})

type("1800", "Enter TTL", {
    method: "by_placeholder"
})

click("Create Record")

// var locationURL = readURL()
// open(locationURL)

click("CNAME", retryConfig)

type("www", "Enter hostname", {
    method: "by_placeholder"
})

type("@", "Enter @ or hostname", {
    method: "by_placeholder"
})

type("1800", "Enter TTL", {
    method: "by_placeholder"
})

click("Create Record")