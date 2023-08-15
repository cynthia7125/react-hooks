const cartoonCharacterData = [
  {
    id: 1,
    firstName: 'Mickey',
    lastName: 'Mouse',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Mickey Mouse is an iconic cartoon character created by Walt Disney. He is known for his cheerful personality and adventures in various animated shorts and movies.',
  },
  {
    id: 2,
    firstName: 'SpongeBob',
    lastName: 'SquarePants',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'SpongeBob SquarePants is a friendly and optimistic sea sponge who lives in a pineapple under the sea. He works at the Krusty Krab and has numerous humorous adventures in the underwater city of Bikini Bottom.',
  },
  {
    id: 3,
    firstName: 'Bugs',
    lastName: 'Bunny',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Bugs Bunny is a clever and witty cartoon character known for his catchphrase "What\'s up, doc?" He often outsmarts his enemies with his quick thinking and humorous antics.',
  },
  {
    id: 4,
    firstName: 'Scooby',
    lastName: 'Doo',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Scooby Doo is a lovable Great Dane who solves mysteries with his friends in the Mystery Inc. gang. He is known for his insatiable appetite and his distinctive speech pattern.',
  },
  {
    id: 5,
    firstName: 'Homer',
    lastName: 'Simpson',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'Homer Simpson is a bumbling but well-meaning character from "The Simpsons." He works at the Springfield Nuclear Power Plant and often finds himself in humorous situations.',
  },
  {
    id: 6,
    firstName: 'Dora',
    lastName: 'the Explorer',
    sat: true,
    sun: false,
    favorite: true,
    bio:
      'Dora is an adventurous young girl who embarks on educational journeys with her talking backpack and monkey friend Boots. She teaches children about language, culture, and problem-solving.',
  },
  {
    id: 7,
    firstName: 'Mulan',
    lastName: '',
    sat: true,
    sun: false,
    favorite: true,
    bio:
      'Mulan is a brave warrior who disguises herself as a man to take her father\'s place in the Chinese army. She saves her country from invaders and challenges traditional gender roles.',
  },
  {
    id: 8,
    firstName: 'Snoopy',
    lastName: '',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'Snoopy is a beagle and the main character in the "Peanuts" comic strip. He has a vivid imagination, often imagining himself as a World War I flying ace, and his best friend is Charlie Brown.',
  },
  {
    id: 9,
    firstName: 'Pikachu',
    lastName: '',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Pikachu is an electric-type Pokémon known for its yellow fur and lightning bolt-shaped tail. It is the mascot of the Pokémon franchise and is often seen accompanying its trainer, Ash Ketchum.',
  },
  {
    id: 10,
    firstName: 'Daffy',
    lastName: 'Duck',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'Daffy Duck is a zany cartoon character often paired with Bugs Bunny. He is known for his wacky behavior, distinctive lisp, and endless pursuit of fame and fortune.',
  },
  {
    id: 11,
    firstName: 'Winnie',
    lastName: 'the Pooh',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Winnie the Pooh is a honey-loving bear who lives in the Hundred Acre Wood. He has a close group of friends, including Piglet, Tigger, and Eeyore, and their adventures teach valuable life lessons.',
  },
  {
    id: 12,
    firstName: 'Bart',
    lastName: 'Simpson',
    sat: true,
    sun: false,
    favorite: true,
    bio:
      'Bart Simpson is the mischievous eldest son of the Simpson family in the show "The Simpsons." He is known for his catchphrases and rebellious behavior.',
  },
  {
    id: 13,
    firstName: 'Dexter',
    lastName: '',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'Dexter is a child genius with a secret laboratory in his bedroom. He invents various gadgets and conducts scientific experiments while trying to keep his sister Dee Dee out of his lab.',
  },
  {
    id: 15,
    firstName: 'Sylvester',
    lastName: '',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'Sylvester is a black-and-white cat known for his never-ending pursuit of the elusive Tweety Bird. Despite his scheming, he often ends up outsmarted by the small canary.',
  },
  {
    id: 16,
    firstName: 'Tweety',
    lastName: 'Bird',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Tweety Bird is a small yellow canary who often finds himself in the clutches of the persistent Sylvester the cat. Despite the danger, Tweety remains clever and resourceful.',
  },
  {
    id: 17,
    firstName: 'Popeye',
    lastName: '',
    sat: false,
    sun: true,
    favorite: true,
    bio:
      'Popeye the Sailor is a spinach-loving sailor with a distinctive voice and a love for his sweetheart, Olive Oyl. When he eats spinach, he gains incredible strength to face challenges.',
  },
  {
    id: 1,
    firstName: 'Totally',
    lastName: 'Spies',
    sat: true,
    sun: true,
    favorite: true,
    bio:
      'Totally Spies is an animated series about three teenage girls who are also secret agents, balancing their high school lives with international espionage.',
  },
  {
    id: 2,
    firstName: 'Kim',
    lastName: 'Possible',
    sat: true,
    sun: true,
    favorite: true,
    bio:
      'Kim Possible is a teenage high school cheerleader who moonlights as a crime-fighting secret agent, aided by her tech-genius friend Ron Stoppable.',
  },
  {
    id: 3,
    firstName: 'Pinky',
    lastName: 'and the Brain',
    sat: true,
    sun: false,
    favorite: true,
    bio:
      'Pinky and the Brain are two genetically modified laboratory mice. Brain is a genius with a goal of world domination, while Pinky is his less intelligent but loyal friend.',
  },
  {
    id: 4,
    firstName: 'Boss',
    lastName: 'Baby',
    sat: true,
    sun: false,
    favorite: false,
    bio:
      "Boss Baby follows the adventures of a suit-wearing baby as he teams up with his older brother to thwart the evil plans of Baby Corp's rivals.",
  },
  {
    id: 5,
    firstName: 'Fox Family',
    lastName: 'and Friends',
    sat: true,
    sun: true,
    favorite: false,
    bio:
      'Fox Family and Friends features a group of animal friends who go on various adventures and learn important life lessons together.',
  },
  {
    id: 6,
    firstName: 'Tom',
    lastName: 'and Jerry',
    sat: true,
    sun: true,
    favorite: true,
    bio:
      'Tom and Jerry is a classic animated series that follows the comedic rivalry between Tom, the cat, and Jerry, the mouse, as they engage in various slapstick antics.',
  },
];

export default cartoonCharacterData;
