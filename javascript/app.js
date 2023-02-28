const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const sum = document.querySelector("#sum")

const convert = (elem,target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET","data.json")
        request.setRequestHeader("Content-type","application/json")
        request.send()
        request.addEventListener("load", () => {
            console.log(request.response)
            const data = JSON.parse(request.response)

            target.forEach(e => {
                target2 ?
                    e.value = (elem.value / data[e.id]).toFixed(2)
                    : e === som ?
                        e.value = (elem.value * data[e.id]).toFixed(2)
                        : e.value= ((elem.value * data [elem.id]) / data[e.id]).toFixed(2)
            })
            elem.value === "" ? (target.forEach(e => e.value = "")) : null
        })
    })
}

convert(som, [usd, sum],true)
convert(usd, [som,sum])
convert(sum, [som,usd])