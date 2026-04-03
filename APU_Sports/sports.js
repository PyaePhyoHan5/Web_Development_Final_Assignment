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
    name:"Mobile Legends",
    desc:"Competitive esports team with tournaments and training.",
    img:"Sport_Image/Mobile Legends.png",
    president:"Kevin Ong",
    email:"ml@apu.edu",
    advisor:"Mr. Daniel"
},

{
    name:"Honor of Kings",
    desc:"Strategic MOBA gameplay with pro-level training.",
    img:"Sport_Image/Hok.png",
    president:"Wei Jian",
    email:"hok@apu.edu",
    advisor:"Mr. Tan"
},

{
    name:"FIFA",
    desc:"Football simulation esports competitions and leagues.",
    img:"Sport_Image/Fifa.png",
    president:"Adam Zaki",
    email:"fifa@apu.edu",
    advisor:"Mr. Hafiz"
}
];

const grid = document.getElementById("sportsGrid");

sportsData.forEach(sport=>{
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${sport.img}" class="card-img">

        <div class="card-content">
            <h3 class="card-title">${sport.name}</h3>
            <button class="read-btn">Read More</button>
        </div>
    `;

    card.querySelector(".read-btn").onclick = (e)=>{
        e.stopPropagation();
        openModal(sport);
    };

    grid.appendChild(card);
});

/* MODAL */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");

function openModal(sport){
    modal.style.display = "flex";

    document.getElementById("modalImg").src = sport.img;
    document.getElementById("modalTitle").textContent = sport.name;
    document.getElementById("modalDesc").textContent = sport.desc;

    document.getElementById("modalPresident").textContent = sport.president || "N/A";
    document.getElementById("modalEmail").textContent = sport.email || "N/A";
    document.getElementById("modalAdvisor").textContent = sport.advisor || "N/A";
}

document.querySelector(".join-btn").onclick = ()=>{
    window.location.href = "register.html";
};

window.onclick = (e)=>{
    if(e.target === modal){
        modal.style.display = "none";
    }
};