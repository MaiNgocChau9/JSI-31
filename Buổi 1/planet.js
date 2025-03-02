const planet = document.querySelector(".planet");
const planet_image = document.querySelector(".planet_img");

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let index = Math.floor(Math.random() * json.length);
            
            planet.innerHTML = json[index].name;
            planet_image.src = json[index].image;
        })
        .catch(function(error) {
            console.log(error);
        });
});

//! 1
async function call_api_1() {
    try {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        const planets = await response.json();

        // Tạo danh sách HTML từ dữ liệu planets
        const html = planets.map((planet) => `<h6>${planet.name}</h6>`).join("");

        // Hiển thị danh sách lên màn hình
        document.write(html);
    } catch (error) {
        document.write(error);
    }
}

call_api_1();

//! 2
async function call_api_2() {
    try {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        const planets = await response.json();
        const result = [];
        const html = planets.map((planet) => {
            result.unshift(`<h6>${planet.name}</h6>`);
        });
        document.write(html);
    }
    catch (error) {
        console.log(error);
    }
}