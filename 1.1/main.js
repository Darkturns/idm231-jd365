// const soundButtons = document.querySelectorAll('.soundtrack');
const soundStopButton = document.getElementById('btn-stop-sounds');
// const speakers = document.getElementById('speakers');
// const icons = document.getElementById('image');

// soundButtons.forEach(button => {
//   const sound = button.dataset.sound;
//   button.addEventListener('click', () => {
//     speakers.src = `MP4/${sound}.mp4`;
//     speakers.play();
//   });
// });

// const icons = document.createElement("image");

// soundButtons.forEach(button => {
//     const image = button.dataset.image;
//     const icons = document.createElement("image");
//     image.src = `icons/${image}.svg`;
// });

soundStopButton.addEventListener('click', () => {
    video.src = "";
});

// ~~~~~~~~~~~~~
let sign;

const signButton = document.querySelectorAll('#signButton button');

for (let i = 0; i < 12; i++) {

    signButton[i].addEventListener('click', () => {
        sign = signs[i];
        signOutput();
        console.log(sign);
    });
};

const video = document.querySelector('#video');
const flavorText = document.querySelector('#flavorText');

function signOutput() {
    video.src = sign.video;
    flavorText.innerHTML = sign.flavorText;
    flavorText.hidden = false;
}

const dragon_ball = {
    signName: "Dragon Ball Z",
    icon: 'icons/dragonball.svg',
    video: 'videos/dragonBall.mp4',
    flavorText: "Dragon Ball Z \n Dragon Ball Z follows the adventures of the adult Goku who, along with his companions, defends the earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids and near indestructible magical creatures."
}

const cowboy_bebop = {
    signName: "Cowbow Bebop",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/cowboyBebop.mp4',
    flavorText: "In the year 2071, the Solar System is linked by a network of hyperspace gateways. Police lose their grasp on crime and a bounty hunting system has been implemented. On an old fishing starship called the Bebop, a cool as Zen man of mystery, a macho former hard-boiled cop, a brash and fickle woman with a large debt, a whimsical whiz kid hacker and an unsuspecting Welsh Corgi band together to hunt bounty heads for a meager living. Unfortunately, they are some of the unluckiest people in the star system. These are the stories of the adventurous (and misadventurous) lives of four struggling people and a dog."
}

const steins_gate = {
    signName: "Steins Gate",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/steinsGate.mp4',
    flavorText: "Okabe Rintarou, a university student who refers to himself as Crazy Mad Scientist Hououin Kyouma and his lab's members work on a microwave device that can transfer messages to the past. Without getting captured, they should get it working in order to beat the evil organization, SERN and stop their evil plans."
}

const flcl = {
    signName: "FLCL",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/flcl.mp4',
    flavorText: "A 12-year old boy named Naota one day meets a strange woman, riding a Vespa and wielding a big guitar. As soon as she appears, mysterious things start happening."
}

const fullmetal_alchemist = {
    signName: "Fullmetal Alchemist",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/fullmetalAlchemist.mp4',
    flavorText: "When a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the one thing that can save them; the fabled philosopher's stone."
}

const ghost_in_the_shell = {
    signName: "Ghost in the Shell",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/ghostInTheShell.mp4',
    flavorText: "In the near future, Major Mira Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals."
}

const neon_genesis = {
    signName: "Neon Genesis",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/neonGenesis.mp4',
    flavorText: "In the year 2015, the world stands on the brink of destruction. Humanity's last hope lies in the hands of Nerv, a special agency under the United Nations, and their Evangelions, giant machines capable of defeating the Angels who herald Earth's ruin."
}

const pokemon = {
    signName: "Pokemon",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/pokemon.mp4',
    flavorText: "Ten-year-old Ash aspires to be the greatest Pokémon trainer in the world. To do this, he enlists the help of many friends, and his own Pokémon, Pikachu. Together, they must search their world for new Pokémon, while avoiding the likes of Team Rocket, as well as other evil organizations, as well as battling rivals, and meeting legendary Pokémon."
}

const avatar = {
    signName: "Avatar",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/avatar.mp4',
    flavorText: "The four nations of Air, Water, Earth and Fire lived in harmony until the Fire Nation declared war. A century later, there is still no end in sight to the destruction, then, an Avatar named Aang discovers that he has the power to control the four elements. He joins forces with Katara, a Waterbender, and her brother, Sokka, to restore balance and harmony to their world."
}

const berserk = {
    signName: "Berserk",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/berserk.mp4',
    flavorText: "Guts is a skilled swordsman who joins forces with a mercenary group named 'The Band of the Hawk', lead by the charismatic Griffith, and fights with them as they battle their way into the royal court."
}

const rick_morty = {
    signName: "Rick & Morty",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/rickMorty.mp4',
    flavorText: "Rick, an alcoholic mad scientist, stumbles into his grandson Morty's room begging for help on an intergalactic adventure. Morty reluctantly agrees and finds himself on a never ending quest across time, dimension and space. Morty must keep Rick in check as he causes havoc everywhere they go."
}

const psycho_pass = {
    signName: "Psycho Pass",
    icon: 'icons/cowbow_bebop.svg',
    video: 'videos/psychoPass.mp4',
    flavorText: "Justice, and the enforcement of it, has changed. In the 22nd century, Japan enforces the Sibyl System, an objective means of determining the threat level of each citizen by examining their mental state for signs of criminal intent, known as their Psycho-Pass. Inspectors uphold the law by subjugating, often with lethal force, anyone harboring the slightest ill-will; alongside them are Enforcers, jaded Inspectors that have become latent criminals, granted relative freedom in exchange for carrying out the Inspectors' dirty work."
}

const signs = [dragon_ball, berserk, cowboy_bebop, neon_genesis, fullmetal_alchemist, steins_gate, pokemon, ghost_in_the_shell, avatar, psycho_pass, flcl, rick_morty];

document.querySelector('#submit').addEventListener('click', () => {
    event.preventDefault();
    zodiacQuery();
});

function zodiacQuery() {
    const bdayinput = document.querySelector('#bdayinput').value;
    console.log("raw input: " + bdayinput);

    const bdayArray = bdayinput.split('-');

    const year = bdayArray[0];
    const month = bdayArray[1];
    const day = bdayArray[2];
    console.log('Year: ' + year + ' | ' + 'Month: ' + month + ' | ' + 'Day: ' + day);

    //Sign Query

    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        day


        sign = dragon_ball;

    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {



        sign = berserk;

    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {



        sign = cowboy_bebop;

    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {



        sign = neon_genesis;

    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {



        sign = fullmetal_alchemist;

    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {



        sign = steins_gate;

    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {



        sign = pokemon;

    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {



        sign = ghost_in_the_shell;

    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {



        sign = avatar;

    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {



        sign = psycho_pass;

    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {



        sign = flcl;

    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {



        sign = rick_morty;

    } else if ((month == 0 && day >= 0) || (month == 0 && day <= 0)) {

        alert('Please enter a vaild date!');

    } else if ((month == 2 && day > 29) || (month == 4 && day > 30) || (month == 6 && day > 30) || (month == 9 && day > 30) || (month == 11 && day > 30)) { alart('Please enter a vaild date!'); }

    signOutput();

};

const movingBackground = document.querySelector('#theDrive');

// movingBackground.addEventListener("mousemove", (e) => {
//     movingBackground.style.backgroundPositionX = -e.offsetX + "px";
//     movingBackground.style.backgroundPositionY = -e.offsetY + "px";
// });

function myFunction() {
    var x = document.getElementById("signButton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var x = document.getElementById("showButton");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

// helpModel
// const helpModel = document.getElementById('helpModel');
// const question = document.getElementById('question');

// question.addEventListener('click', () => {
//     helpModel.removeAttribute('hidden');
// });


function model() {
    // document.getElementById("helpModel").style.display = "block";
    var y = document.getElementById("helpModel");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    // var x = document.getElementById("showButton");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "block";
    // }
};

// function hideShowButton() {
//     var x = document.getElementById("showButton");
//     onclick;
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// };
