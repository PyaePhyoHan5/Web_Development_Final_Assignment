console.log("JS WORKING");

const sportsData = [
{
    name:"Badminton",
    desc:"Join our badminton club and compete in university tournaments.",
    img:"Sport_Image/Badminton.png",
    president:"Ali Tan",
    email:"badminton@apu.edu",
    advisor:"Mr. Lim"
},
{
    name:"Basketball",
    desc:"Be part of our basketball team and train professionally.",
    img:"Sport_Image/Basketball.png",
    president:"Jason Lee",
    email:"basketball@apu.edu",
    advisor:"Mr. Kumar"
},
{
    name:"Futsal",
    desc:"Fast-paced futsal games and competitions every semester.",
    img:"Sport_Image/Futsal.png",
    president:"Ahmad Rizal",
    email:"futsal@apu.edu",
    advisor:"Mr. Wong"
},
{
    name:"Cricket",
    desc:"Join our cricket team and participate in inter-university matches.",
    img:"Sport_Image/Cricket.png",
    president:"Raj Singh",
    email:"cricket@apu.edu",
    advisor:"Mr. Arjun"
},
{
    name:"Volleyball",
    desc:"Train and compete with APU volleyball club.",
    img:"Sport_Image/volleyball.png",
    president:"Siti Nur",
    email:"volleyball@apu.edu",
    advisor:"Ms. Aina"
},
{
    name:"Honor of Kings",
    desc:"Strategic MOBA gameplay with pro-level training.",
    img:"Sport_Image/Hok.png",
    president:"Wei Jian",
    email:"hok@apu.edu",
    advisor:"Mr. Tan"
},
];

const grid = document.getElementById("sportsGrid");

sportsData.forEach(sport=>{
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${sport.img}" class="card-img">

        <div class="card-content">
            <div class="card-top">
                <h3 class="card-title">${sport.name}</h3>
                <button class="view-btn">View →</button>
            </div>
        </div>
    `;

    // CLICK CARD → OPEN MODAL
    card.onclick = ()=>{
        openModal(sport);
    };

    // VIEW MORE BUTTON → PAGE
    card.querySelector(".view-btn").onclick = (e)=>{
    e.stopPropagation();

    let page = "";

    switch(sport.name){
        case "Badminton": page = "badminton.html"; break;
        case "Basketball": page = "basketball.html"; break;
        case "Futsal": page = "futsal.html"; break;
        case "Cricket": page = "cricket.html"; break;
        case "Volleyball": page = "volleyball.html"; break;
        case "Honor of Kings": page = "hok.html"; break;
    }

    window.location.href = page;   // ✅ THIS IS THE FIX
};

    grid.appendChild(card);
});


/* MODAL */
const modal = document.getElementById("modal");

function openModal(sport){
    modal.style.display = "flex";

    document.getElementById("modalImg").src = sport.img;
    document.getElementById("modalTitle").textContent = sport.name;
    document.getElementById("modalDesc").textContent = sport.desc;

    document.getElementById("modalPresident").textContent = sport.president;
    document.getElementById("modalEmail").textContent = sport.email;
    document.getElementById("modalAdvisor").textContent = sport.advisor;
}

/* JOIN BUTTON */
document.querySelector(".join-btn").onclick = ()=>{
    window.location.href = "register.html";
};

/* CLOSE MODAL */
window.onclick = (e)=>{
    if(e.target === modal){
        modal.style.display = "none";
    }
};