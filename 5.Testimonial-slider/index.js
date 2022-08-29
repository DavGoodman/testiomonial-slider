const testimonials = [
    {
        name: "Michelina Q",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        text: '"WASD has completely surpassed our expectations. The very best. Nice work on your WASD. Needless to say we are extremely satisfied with the results."'
    },
    {
        name: "Maxim H",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        text: '"I wish I would have thought of it first. Since I invested in WASD I made over 100,000 dollars profits. Just what I was looking for."'
    },
    {
        name: "Ingeborg P",
        photoUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        text: '"WASD is the real deal! Its all good."'
    },
    {
        name: "Sula T",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        text: 'I made back the purchase price in just 48 hours! I would gladly pay over 600 dollars for WASD.'
    },
    {
        name: "Selina T",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        text: 'Absolutely wonderful! Keep up the excellent work. I will let my mum know about this, she could really make use of WASD! WASD is the real deal!'
    },
]

const containerEl = document.querySelector(".container")

let idx = 0

updateTestimonial()
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx]
    containerEl.innerHTML = `
    <img src="${photoUrl}" alt="">
    <p class="text">
            ${text}
    </p>
    <h4>${name}</h4>`
    idx++
    if (idx == 4) {idx = 0}
}

setInterval(updateTestimonial, 10000)


