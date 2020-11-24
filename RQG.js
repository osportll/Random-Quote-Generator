const quotes = [
  '"One may stray from path of MAN, one may stray from path of WOMAN, but there is no straying from path of HUMAN" - bon clay',

  '"When do people die? When they are shot by a pistol? No. When they are ravaged by an incurable disease? No. When they drink poisonous soup? No. People die when they are forgotten" - Dr. Hiriluk',

  '“Inherited Will, The Destiny of the Age, and The Dreams of the People. As long as people continue to pursue the meaning of Freedom, these things will never cease to be!" - Gol D. Roger”',

  '"Neither God nor the Devil can give aid to those without the will to fight." – Brook',

  '"You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.” – Roronoa Zoro"',

  "“Fools who don’t respect the past are likely to repeat it.” – Nico Robin",

  '"No matter how hard or impossible it is, never lose sight of your goal.” – Monkey D Luffy"',
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];
  console.log(randomNumber);

  if (randomNumber === 0) {
    document.querySelector(".quote-img").src =
      "https://pm1.narvii.com/6854/30789a925117ab4dba145e1fe40baf04ae126ee1v2_hq.jpg";
  } else if (randomNumber === 1) {
    document.querySelector(".quote-img").src =
      "https://pm1.narvii.com/6358/03244065e99f745e9545868e349ff18338dc35d8_hq.jpg";
  } else if (randomNumber === 2) {
    document.querySelector(".quote-img").src =
      "https://pm1.narvii.com/6905/9eed9b5b5905aa5d315daff3f2a268a024901ac4r1-560-315v2_00.jpg";
  } else if (randomNumber === 3) {
    document.querySelector(".quote-img").src =
      "https://pm1.narvii.com/6338/745bdd49095ad182fdb8ed363a387e894f399186_hq.jpg";
  } else if (randomNumber === 4) {
    document.querySelector(".quote-img").src =
      "https://www.alfabetajuega.com/wp-content/uploads/2020/06/one-piece-zoro-1-780x405.jpg";
  } else if (randomNumber === 5) {
    document.querySelector(".quote-img").src =
      "https://www.alfabetajuega.com/wp-content/uploads/2019/06/Nico-Robin-770x378.jpg";
  } else if (randomNumber === 6) {
    document.querySelector(".quote-img").src =
      "https://elcomercio.pe/resizer/xJ2z3Geb28JVnMhSknmPC_2KQhQ=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NG4OXH2E65FZLDFCYTHPSGJT5Q.png";
  }
}
