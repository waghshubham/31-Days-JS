const data = [
    {
        id : 1,
        name : "Robert Downey",
        job : "IronMan",
        phone : '8169747165',
        photo : 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80',
        text : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id : 2,
        name : 'Thor Odinson',
        job : 'Builder',
        phone : '7020433632',
        photo : 'https://images.unsplash.com/photo-1512663150964-d8f43c899f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80',
        text : "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id : 3,
        name : 'Loreal Paris',
        job : 'Manager',
        phone : '1234567899',
        photo : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        text : "It was in Brighton, on the beach and near New Year’s, when it was cold and dark and there was a wind blowing and you could walk across the pebbles of the beach, climb over the groynes and feel the slow erosion of the earth"
    },
    {
        id : 4,
        name : 'Margot Robbie',
        job : 'Designer',
        phone : '9876543211',
        photo : 'https://images.unsplash.com/photo-1517779548443-852211706367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        text : "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id : 5,
        name : 'Dakota Johnson',
        job : 'Queen',
        phone : '5678943213',
        photo : 'https://images.unsplash.com/photo-1539624791278-4f11683f9036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
        text : "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id : 6,
        name : 'Harley Quinn',
        job : 'Joker',
        phone : '1928374655',
        photo : 'https://images.unsplash.com/photo-1553880607-dbed5f97aba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
        text : 'I dated Danny Derkins while we both wrestled for a little Midwest indie. We made a loop of bingo halls and fairgrounds that summer, barely making ends meet.'
    },
    {
        id : 7,
        name : 'Johnny Depp',
        job : 'Pirate',
        phone : '9567843213',
        photo : 'https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        text : 'Hey there! Check out our latest issue, featuring Cheryl Aguirre, Lannie Stabile, Brian McCabe, Michael Chin, Alison Cao, Dawn Gernhardt, Lalini Ranaraja, Nachi Keta, and so so many more!'
    },
    {
        id : 8,
        name : 'Stormy Bean',
        job : 'Developer',
        phone : '4567321988',
        photo : 'https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        text : 'You all ready for our prose nominations for the Pushcart Prize? Of course you are! A hearty congratulations to Mike Chin Callan Preece, and Annina Claesson for their amazing pieces from Issue 6.'
    },
    {
        id : 9,
        name : 'John Snow',
        job : 'DragonKing',
        phone : '9678345211',
        photo : 'https://images.unsplash.com/flagged/photo-1596479042555-9265a7fa7983?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text : 'So if there was one thing I could offer about how to keep going is to follow your joys when you can, follow the bright edges, let yourself be drawn to what you love and then make poems from that place.” —Ada Limón.'
    },
    {
        id : 10,
        name : 'King Joffery',
        job : 'Hunter',
        phone : '55555555555',
        photo : 'https://images.unsplash.com/photo-1596478261452-7a16ddc97c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        text : 'Want to learn about lit mags & be on the other side of the submission process? We are growing our team & we would love for you to come be Random with us. We are all volunteers but we have a good time reading and sharing the amazing work'
    },
    {
        id : 11,
        name : 'Dolly Singh',
        job : 'Architect',
        phone : '4598675123',
        photo : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        text : 'In my dreams, my grandmother is not dead, or a mother, or a woman, really. Instead she is a snake, yellow-eyed and fork-tongued, her body as wide and shadowed as the trunk of an enormous tree'
    },
    {
        id : 12,
        name : 'Arya Stark',
        job : 'Killer',
        phone : '1298347655',
        photo : 'https://images.unsplash.com/photo-1535467728855-93fe6218a7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
        text : 'Submission update! We said on the website we would reopen for subs in Oct. and somehow the month is already halfway over! We may be delayed, but we have something amazing in the works. More soon!'
    },
    {
        id : 13,
        name : 'Hugh Jackman',
        job : 'Wolverine',
        phone : '6574839122',
        photo : 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        text : 'What a great group!! I feel like I am in fantastic company here. Thank you all so much. I love all of you and everything that you do.'
    },
    {
        id : 14,
        name : 'Agent Clint',
        job : 'Hawkaye',
        phone : '78345693211',
        photo : 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80',
        text : 'There is some poeticism to today being what would have been my Grandma Jean’s 104th birthday. She is one of the 3 grandparents the book is dedicated to, the greatest encouraging force of my childhood.'
    },
    {
        id : 15,
        name : 'Elia Martell',
        job : 'Witch',
        phone : '12985684744',
        photo : 'https://images.unsplash.com/photo-1548626008-5bdca8c9552a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
        text : 'If you are thinking about doing some submitting today, add Random Sample Review to your list of mags to submit to. We are here & we want to read your work!'
    }
]

const next = document.getElementById('next');
const pht = document.getElementById('photo');
const nm = document.getElementById('nm');
const tel = document.getElementById('phn');
const info = document.getElementById('inf');
const jb = document.getElementById('job');

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const getRandomNumber = () => {
    return Math.floor(Math.random()*arr.length);
}
const changeColor = () => {
    let str = "#";
    for (let i=0; i<6; i++) {
        str+=arr[getRandomNumber()];
    }
    document.body.style.color = str;
}

let count = 0;
function setElements(count) {
    tel.innerHTML = data[count].phone;
    nm.innerHTML = data[count].name;
    pht.src = data[count].photo;
    info.innerHTML = data[count].text;
    jb.innerHTML = data[count].job;
}

const change = () => {
    //const random = getRandomNumber();
    changeColor();
    // for (let i=0; i<10; i++) {
    //     tel.innerHTML = data[random].phone;
    //     nm.innerHTML = data[random].name;
    //     pht.src = data[random].photo;
    //     info.innerHTML = data[random].text;
    //     jb.innerHTML = data[random].job;
    // }
    if (count === 15)
    count = 0;
    setElements(count);
    count++;
    //console.log(count);
}

next.addEventListener('click', change);