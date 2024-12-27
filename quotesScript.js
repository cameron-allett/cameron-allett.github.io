quotes = {
  writing: [
    {text: "Thanks to an eternal and providential decree, everything produced by a man in every sphere, when he is ruled by the spirit of justice and truth, is endowed with the radiance of beauty.", author: "S. Weil"},
    {text: "You must write for yourself, above all. That is your only hope of creating something beautiful.", author: "G. Flaubert"},
    {text: "Beauty is an experience, nothing else. It is not a fixed pattern or an arrangement of features. It is something felt, a glow or a communicated sense of fineness.", author: "D. H. Lawrence"},
    {text: "When we come upon beautiful things they lift us, letting the ground rotate beneath us several inches so that when we land, we find we are standing in a different relation to the world than we were a moment before.", author: "E. Scarry"}
  ],

  science: [
    {text: "Every time that a human being succeeds in making an effort of attention with the sole idea of increasing his grasp of the truth, he acquires a greater aptitude for grasping it, even if his effort produces no visible fruit.", author: "S. Weil"},
    {text: "The true definition of science is this: the study of the beauty of the world.", author: "S. Weil"},
    {text: "The task is, not so much to see what no one has yet seen; but to think what nobody has yet thought, about that which everybody sees.", author: "A. Schopenhauer"},
    {text: "What we observe is not nature itself, but nature exposed to our method of questioning.", author: "W. Heisenberg"},
    {text: "Not how the world is, but that it is, is the mystery.", author: "L. Wittgenstein"},
    {text: "The problems are solved, not by giving new information, but by arranging what we have known since long.", author: "L. Wittgenstein"},
    {text: "Logic takes care of itself; all we have to do is to look and see how it does it.", author: "L. Wittgenstein"},
    {text: "I don't believe in empirical science. I only believe in a priori truth.", author: "K. Gödel"},
    {text: "Never regard your study as a duty, but as the enviable opportunity to learn the liberating beauty of the intellect for your own personal joy and for the profit of the community to which your later work will belong.", author: "A. Einstein"},
    {text: "Education is the kindling of a flame, not the filling of a vessel.", author: "Socrates"},
    {text: "We do not describe the world we see, we see the world we can describe.", author: "R. Descartes"},
    {text: "The eternal mystery of the world is its comprehensibility.", author: "A. Einstein"}
  ]
}

function hash(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += (i + 1) * str.codePointAt(i) / (1 << 8)

    return ((sum % 1) * 10) % 1;
}

function onLoad() {
  let now = new Date();
  let fullDaysSinceEpoch = Math.floor(now/8.64e7);
  let quoteTypeHash = hash("TYPE" + fullDaysSinceEpoch);
  let quoteHash = hash("QUOTE" + fullDaysSinceEpoch);

  let quoteType = "writing";
  if(quoteTypeHash < 0.5)
    quoteType = "science";

  let quote = quotes[quoteType][Math.floor(quoteHash * quotes[quoteType].length)];

  document.getElementById("quoteText").innerHTML = quote.text;
  document.getElementById("quoteAuthor").innerHTML = "<i>" + quote.author + "</i>";
}
