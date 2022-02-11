const itemListTotal = [];
let idList = 1;
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "Any day above ground is a good day",
      "Others can help you now",
      "The small courtesies sweeten life",
      "There is no mistake so great as that of being always right",
      "You will always have good luck in your personal affairs",
    ];
    let randIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randIndex];

    res.status(200).send(randomFortune);
  },
  addList: (req, res) => {
    let { text } = req.body;
    let listIt = {
      id: idList,
      text,
    };
    itemListTotal.push(listIt);
    res.status(200).send(itemListTotal);
    idList++;
  },
  removeList: (req, res) => {
    let { id } = req.params;
    itemListTotal.forEach((item, index) => {
      if (item.id === +id) {
        itemListTotal.splice(index, 1);
        if (itemListTotal.length === 0) {
          idList = 1;
        }
      }
    });
    res.status(200).send(itemListTotal);
  },
  updateList: (req, res) => {
    let {id} = req.params;
    let {text} = req.body;
    console.log("text",req);
    for (let i = 0; i < itemListTotal.length; i++) {
      if (itemListTotal[i].id === +id) {
        itemListTotal[i].text = text;
      }
    }
    res.status(200).send(itemListTotal);
  },
};
