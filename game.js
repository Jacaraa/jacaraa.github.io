const scenes = {

    chambre:{

        image:"chambre.jpg",

        dialogue:[
            "Nika, complétement en pétard décida d'aller à la Fabrik pour faire sa pussycat (même si s'en est pas une) [cliquer pour passer au dialogue suivant]",
            "Elle va rassembler tout ses shabs pour aller en boîte",
            "Mais il faut d'abord qu'elle s'enfuit !"
        ],

        hotspots:[

            {
                x:50,
                y:53.3,
                width:200,
                height:200,

                action:"text",

                text:"Jamais éteint depuis 1 an"

            },

            {
                x:48.7,
                y:41,
                width:20,
                height:20,

                action:"text",

                text:"Le fruit de Nika ! :D"

            },

            {

                x:200,
                y:400,
                width:290,
                height:180,

                action:"text",

                text:"Un setup tah les fous pour faire des big pentakill (actuellement 2 à mon actif en aram depuis 10 ans de jeu)"

            },

            {

                x:520,
                y:140,
                width:80,
                height:280,

                action:"scene",

                target:"jardin"

            }

        ]

    },

    couloir:{

        image:"pâtes_blanches.png",

        dialogue:[

            "Tu arrives dans le couloir.",
            "Le silence est pesant..."

        ],

        hotspots:[

            {

                x:600,
                y:200,
                width:140,
                height:260,

                action:"scene",

                target:"fin"

            }

        ]

    },

    fin:{

        image:"images/fin.jpg",

        dialogue:[

            "Bravo !",
            "Tu as terminé cette petite démo."

        ],

        hotspots:[

        ]

    }

};

let currentScene = "";
let dialogueIndex = 0;

const scene = document.getElementById("scene");
const text = document.getElementById("text");
const dialogue = document.getElementById("dialogue");
const hotspotContainer = document.getElementById("hotspots");

loadScene("chambre");

dialogue.onclick = ()=>{

    dialogueIndex++;

    const d = scenes[currentScene].dialogue;

    if(dialogueIndex<d.length){

        text.innerText=d[dialogueIndex];

    }

};

function loadScene(name){

    currentScene=name;

    dialogueIndex=0;

    const data=scenes[name];

    scene.style.backgroundImage=`url(${data.image})`;

    text.innerText=data.dialogue[0];

    hotspotContainer.innerHTML="";

    data.hotspots.forEach(h=>{

        const div=document.createElement("div");

        div.className="hotspot";

        div.style.left=h.x+"%";
        div.style.top=h.y+"%";

        div.style.width=h.width+"%";
        div.style.height=h.height+"%";

        div.onclick=(e)=>{

            e.stopPropagation();

            if(h.action==="text"){

                text.innerText=h.text;

            }

            if(h.action==="scene"){

                loadScene(h.target);

            }

        };

        hotspotContainer.appendChild(div);

    });

}
