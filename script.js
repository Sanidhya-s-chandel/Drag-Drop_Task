const data = [
    {
        class:"P1",
        image:"https://images.unsplash.com/photo-1544211412-2a32426e7fd5?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Elephant",
        draggable:"true"
    },

    {
        class:"P1",
        image:"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        name :"Lion",
        draggable:"true"
    },

    {
        class:"P1",
        image:"https://images.unsplash.com/photo-1536514900905-0d5511b9d489?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Peacock",
        draggable:"true"
    },

    {
        class:"P1",
        image:"https://images.unsplash.com/photo-1471602671180-19fb2b491359?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Flamingo",
        draggable:"true"
    },


    {
        class:"P1",
        image:"https://plus.unsplash.com/premium_photo-1666238814567-7f076738a865?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Giraffe",
        draggable:"true"
    },
     
    {
        class:"P1",
        image:"https://plus.unsplash.com/premium_photo-1673454201378-3867e051dca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Parrot",
        draggable:"true"
    },

    {
        class:"P1",
        image:"https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Zebra",
        draggable:"true"
    },

    {
        class:"P1",
        image:"https://images.unsplash.com/photo-1540382658444-5f53c7f12ac3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name :"Pigeon",
        draggable:"true"
    },
]

var M = document.querySelector(".M-1")

container = ""

data.forEach(function(e){
    container += `   <div class=${e.class} draggable= ${e.draggable}>
                <div class="image"><img src="${e.image}" alt=""></div>
                <div class="name"><h3>${e.name}</h3></div>
            </div>`
})

M.innerHTML = container;
let lists = document.getElementsByClassName("P1");
let rightBox = document.querySelector(".M-2");
let leftBox = document.querySelector(".M-1");

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}