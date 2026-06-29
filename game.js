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

                x:15,
                y:40,
                width:290,
                height:250,

                action:"text",

                text:"Un setup tah les fous pour faire des big pentakill (actuellement 2 à mon actif en aram depuis 10 ans de jeu)"

            },

            {

                x:38,
                y:14,
                width:80,
                height:280,

                action:"scene",

                target:"jardin"

            },

            {
                x:65,
                y:83,
                width:100,
                height:50,

                action:"text",

                text:"Chauffage à bain d'huile à vendre, état quasi neuf, très peu servi"

            }

        ]

    },

    pito:{

        image:"pito_baraque.png",

        dialogue:[

            "Nika arrive enfin chez Pito pour aller en boîte",
            "Nika : Wesh pit-pit ça va ou quoi ?",
            "Pito : Arrête de m'appeler comme ça stp c'est cringe...",
            "Nika : Pito pas content...",
            "Pito : azy ftg slp, kestufoula ?",
            "Nika : Bah je me suis barré de chez mon kassos de daron, ça te dit d'aller en teboi avec timtim et temtem ?",
            "Pito : Ah ouais mais t'es un bandit meuuuuuf tu slayyyy !",
            "Pito : azy je suis chaude mais tu veux vraiment y aller avec les 2 gros pd ?",
            "Nika : mais oui tkt ça va être goleri",
            "Nika : on va peut-être pécho inshallah",
            "Pito : Bismillah heureusement qu'on est stérilisée, flemme d'avoir des gosses.",
            "Nika : Mais c'est parce que t'as pas goûté aussi",
            "Pito : De ?",
            "Nika : Nan rien tkt.",
            "Pito : Eh vas'y t'es trop une galère toi, je me prep et go go go.",
            "Nika : Dans le bueno tout ça.",
            "Pito : Binks",
            "Nika : Binks"

        ],

        action:"scene",
        target:"fin"

    },

    jardin:{

        image:"jardin.jpg",

        dialogue:[

            "Nika : faut que je prennes la voiture de l'autre bouffon pour aller chez Pito !"

        ],

        hotspots:[
            {
                x:32.5,
                y:33,
                width:50,
                height:50,

                action:"scene",
                target:"pito"
            }

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
