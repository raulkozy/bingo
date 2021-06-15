export const data = {
  title: "Online Conferencing",
  phrases: [
    "(Child noises in the background)",
    "Hello, hello ?",
    "I need to jump in another call",
    "Can everyone go on mute",
    "Could you please get closer to the mic",
    "(Load painful echo/feedback)",
    "Next slide please",
    "Can we take this ofline",
    "is __ on this call ?",
    "Could you share these slides afterwards ?",
    "can somebody grant presenter rights ?",
    "can you email that to everyone ?",
    "Sorry, I had problem logging in",
    "(animal noises in the background)",
    "Sorry, I didn't found the conference Id",
    "I was having connection Issues",
    "I'll have to get back to you",
    "who just joined ?",
    "Sorry, something __ with my calander",
    "do you see my screen",
    "Lets wait for ___",
    "You will send the minutes",
    "Sorry, I was on mute",
    "Can you repeat please",
    "is anyone there ?"
  ],
};

const shuffle = function (array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const phrases = async (data) => {
  const shuffledPhrases = await shuffle(data.phrases);
//   console.log(shuffledPhrases);
  return shuffledPhrases.splice(12,0,data.title);

  // return textPhrase;
};
