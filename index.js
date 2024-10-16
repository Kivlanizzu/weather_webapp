const d = new Date(); 
document.getElementById("date").innerHTML = d;

const daily = { 
    time: [ 
        "2024-10-14", 
        "2024-10-15",
        "2024-10-16",
        "2024-10-17",
        "2024-10-18",
        "2024-10-19",
        "2024-10-20",
    ],
    temperature_2m: [11.5, 11.8, 13.7, 15.5, 16.5, 15.3, 13.5], 
};

//* Membuat fungsi untuk mengubah format tanggal
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = new Date(date);
    const formatId = formattedDate.toLocaleDateString('id-ID', options);
    return formatId;
}

console.log(formatDate(daily.time[daily.time.length - 1]));

daily.time.forEach((date, index) => {
    console.log(index)
    document.getElementById("days").innerHTML += `
    <div class="col-12 col-md-3">
        <div class="card text-bg-light mb-3">
            <div class="card-body">
                <h5 class="card-title">${formatDate(date)}</h5>
                <p class="card-text">${daily.temperature_2m[index]}</p>
            </div>
        </div>
    </div>`
})