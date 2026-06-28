const scenes = {

    chambre:{

        image:"image_modified.png",

        dialogue:[
            "Tu te réveilles dans une étrange chambre.",
            "La porte semble fermée.",
            "Il doit y avoir un moyen de sortir..."
        ],

        hotspots:[

            {
                x:70,
                y:40,
                width:100,
                height:200,

                action:"scene",

                target:"couloir"

            },

            {

                x:320,
                y:260,
                width:90,
                height:60,

                action:"text",

                text:"Une vieille photo... derrière elle il n'y a rien."

            },

            {

                x:540,
                y:180,
                width:80,
                height:120,

                action:"text",

                text:"Le tiroir est vide."

            }

        ]

    },

    couloir:{

        image:"gateau.jpg",

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

        div.style.left=h.x+"px";
        div.style.top=h.y+"px";

        div.style.width=h.width+"px";
        div.style.height=h.height+"px";

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
