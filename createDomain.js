var eventConfig = {
    eventType: "keyup",
    eventProps: {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
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

event("Enter domain", {
    method: "by_placeholder"
}, eventConfig)

click("Add Domain", retryConfig)

type("@", "Enter @ or hostname", {
    method: "by_placeholder",
    numberOfTries: 20,
    retryDuration: 500
})

event("Enter @ or hostname", {
    method: "by_placeholder"
}, eventConfig)

click('[title="' + args[1] + '"]', {
    method: "by_query_selector"
})

type("1800", "Enter TTL", {
    method: "by_placeholder"
})

click("Create Record")

var locationURL = readURL()
open(locationURL)

click("CNAME", retryConfig)

type("www", "Enter hostname", {
    method: "by_placeholder"
})

event("Enter hostname", {
    method: "by_placeholder"
}, eventConfig)

type("@", "Enter @ or hostname", {
    method: "by_placeholder"
})

event("Enter @ or hostname", {
    method: "by_placeholder"
}, eventConfig)

type("1800", "Enter TTL", {
    method: "by_placeholder"
})

click("Create Record")