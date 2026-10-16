// item: [title, type, release, in-universe year, confidence o=official/on-screen e=estimate, fork year for What If twigs]
// type: F film, S series, A animated, E episode, X special, O One-Shot, T TV film
const UNIS = [
  {id:"616", name:"Sacred Timeline", label:"Sacred Timeline", des:"Earth-616", fork:null,
   note:"The main MCU reality, held together by Loki at the End of Time. The order follows Marvel's own Disney+ Complete Timeline, which also slots in Loki, What If...?, Marvel Zombies and First Steps; those live on their own branches here.",
   items:[
    ["Eyes of Wakanda","A","2025-08-01","1260 BC–1896","o"],
    ["Captain America: The First Avenger","F","2011-07-22","1943–45","o"],
    ["Agent Carter","O","2013-09-24","1946","o"],
    ["Captain Marvel","F","2019-03-08","1995","o"],
    ["Iron Man","F","2008-05-02","2008","o"],
    ["Iron Man 2","F","2010-05-07","2010","o"],
    ["The Incredible Hulk","F","2008-06-13","2010","o"],
    ["A Funny Thing Happened on the Way to Thor's Hammer","O","2011-10-25","2010","o"],
    ["Thor","F","2011-05-06","2010","o"],
    ["The Consultant","O","2011-09-13","2010","o"],
    ["The Avengers","F","2012-05-04","2012","o"],
    ["Item 47","O","2012-09-25","2012","o"],
    ["Thor: The Dark World","F","2013-11-08","2013","o"],
    ["Iron Man 3","F","2013-05-03","2013–14","o"],
    ["All Hail the King","O","2014-02-25","2014","o"],
    ["Captain America: The Winter Soldier","F","2014-04-04","2014","o"],
    ["Guardians of the Galaxy","F","2014-08-01","2014","o"],
    ["Guardians of the Galaxy Vol. 2","F","2017-05-05","2014","o"],
    ["I Am Groot (Season 1)","A","2022-08-10","2014","o"],
    ["I Am Groot (Season 2)","A","2023-09-06","2014","e"],
    ["Daredevil (Season 1)","S","2015-04-10","2015","o"],
    ["Jessica Jones (Season 1)","S","2015-11-20","2015","o"],
    ["Avengers: Age of Ultron","F","2015-05-01","2015","o"],
    ["Ant-Man","F","2015-07-17","2015","o"],
    ["Daredevil (Season 2)","S","2016-03-18","2015","o"],
    ["Luke Cage (Season 1)","S","2016-09-30","2015","o"],
    ["Iron Fist (Season 1)","S","2017-03-17","2016","o"],
    ["The Defenders","S","2017-08-18","2016","o"],
    ["Captain America: Civil War","F","2016-05-06","2016","o"],
    ["Black Widow","F","2021-07-09","2016","o"],
    ["Black Panther","F","2018-02-16","2016","o"],
    ["Spider-Man: Homecoming","F","2017-07-07","2016","o"],
    ["The Punisher (Season 1)","S","2017-11-17","2016","o"],
    ["Doctor Strange","F","2016-11-04","2016–17","o"],
    ["Jessica Jones (Season 2)","S","2018-03-08","2017","o"],
    ["Luke Cage (Season 2)","S","2018-06-22","2017","o"],
    ["Iron Fist (Season 2)","S","2018-09-07","2017","o"],
    ["Daredevil (Season 3)","S","2018-10-19","2017","o"],
    ["Thor: Ragnarok","F","2017-11-03","2017","o"],
    ["The Punisher (Season 2)","S","2019-01-18","2018","o"],
    ["Jessica Jones (Season 3)","S","2019-06-14","2018","o"],
    ["Ant-Man and the Wasp","F","2018-07-06","2018","o"],
    ["Avengers: Infinity War","F","2018-04-27","2018","o"],
    ["Avengers: Endgame","F","2019-04-26","2018 / 2023","o"],
    ["WandaVision","S","2021-01-15","2023","o"],
    ["Shang-Chi and the Legend of the Ten Rings","F","2021-09-03","2024","o"],
    ["The Falcon and the Winter Soldier","S","2021-03-19","2024","o"],
    ["Spider-Man: Far From Home","F","2019-07-02","2024","o"],
    ["Eternals","F","2021-11-05","2024","o"],
    ["Spider-Man: No Way Home","F","2021-12-17","2024","o"],
    ["Doctor Strange in the Multiverse of Madness","F","2022-05-06","2024","o"],
    ["Hawkeye","S","2021-11-24","2024","o"],
    ["Moon Knight","S","2022-03-30","2025","o"],
    ["Black Panther: Wakanda Forever","F","2022-11-11","2025","o"],
    ["Echo","S","2024-01-09","2025","o"],
    ["She-Hulk: Attorney at Law","S","2022-08-18","2024–25","o"],
    ["Ms. Marvel","S","2022-06-08","2025","o"],
    ["Thor: Love and Thunder","F","2022-07-08","2025","o"],
    ["Ironheart","S","2025-06-24","2025","o"],
    ["Werewolf by Night","X","2022-10-07","2025","o"],
    ["The Guardians of the Galaxy Holiday Special","X","2022-11-25","2025","o"],
    ["Ant-Man and the Wasp: Quantumania","F","2023-02-17","2026","o"],
    ["Guardians of the Galaxy Vol. 3","F","2023-05-05","2026","o"],
    ["Secret Invasion","S","2023-06-21","2026","o"],
    ["The Marvels","F","2023-11-10","2026","o"],
    ["Deadpool & Wolverine","F","2024-07-26","Earth-10005 & the Void","o"],
    ["Agatha All Along","S","2024-09-18","2026","o"],
    ["Daredevil: Born Again (Season 1)","S","2025-03-04","2025–27","o"],
    ["Captain America: Brave New World","F","2025-02-14","2026–27","o"],
    ["Thunderbolts*","F","2025-05-02","2027","o"],
    ["Wonder Man","S","2026-01-27","2025–27","o"],
    ["Daredevil: Born Again (Season 2)","S","2026-03-24","2027","o"],
    ["The Punisher: One Last Kill","X","2026-05-12","2027","o"],
    ["Spider-Man: Brand New Day","F","2026-07-31","2028","o"],
    ["VisionQuest","S","2026-10-13","2028","e"],
    ["Avengers: Doomsday","F","2026-12-18","2028–29","o"],
   ]},
  {id:"tva", name:"Loki & the TVA", label:"Loki & the TVA", des:"Branched 2012", fork:2012, at:"avengersendgame",
   note:"During the Endgame time heist, the 2012 Loki grabs the Tesseract and escapes. The TVA catches him, the timeline splinters, and Loki ends up at the End of Time weaving the branches into Yggdrasil.",
   items:[["Avengers: Endgame","F","2019-04-26","2012","o"],["Loki (Season 1)","S","2021-06-09","2012 / outside time","o"],["Loki (Season 2)","S","2023-10-05","Outside time","o"]]},
  {id:"whatif", name:"What If...? Realities", label:"What If...?", des:"26 realities", fork:null, at:"avengersendgame",
   note:"Each episode is its own reality, branching off the Sacred Timeline at a different moment. The twigs on the trunk mark where they split.",
   items:[
    ["What If... Captain Carter Were the First Avenger?","E","2021-08-11","1943","o",1943],
    ["What If... T'Challa Became a Star-Lord?","E","2021-08-18","1988","o",1988],
    ["What If... the World Lost Its Mightiest Heroes?","E","2021-08-25","2010","e",2010],
    ["What If... Doctor Strange Lost His Heart Instead of His Hands?","E","2021-09-01","2016","o",2016],
    ["What If... Zombies?!","E","2021-09-08","2018","o",2018],
    ["What If... Killmonger Rescued Tony Stark?","E","2021-09-15","2008","o",2008],
    ["What If... Thor Were an Only Child?","E","2021-09-22","965 AD / present day","o"],
    ["What If... Ultron Won?","E","2021-09-29","2015","o",2015],
    ["What If... the Watcher Broke His Oath?","E","2021-10-06","Across realities","o"],
    ["What If... Nebula Joined the Nova Corps?","E","2023-12-22","2014","e",2014],
    ["What If... Peter Quill Attacked Earth's Mightiest Heroes?","E","2023-12-23","1988","e",1988],
    ["What If... Happy Hogan Saved Christmas?","E","2023-12-24","Christmas, year unstated","e"],
    ["What If... Iron Man Crashed into the Grandmaster?","E","2023-12-25","2012","e",2012],
    ["What If... Captain Carter Fought the Hydra Stomper?","E","2023-12-26","Captain Carter's reality","e"],
    ["What If... Kahhori Reshaped the World?","E","2023-12-27","Late 15th century","e"],
    ["What If... Hela Found the Ten Rings?","E","2023-12-28","Shang-Chi's past","e"],
    ["What If... the Avengers Assembled in 1602?","E","2023-12-29","1602","o"],
    ["What If... Strange Supreme Intervened?","E","2023-12-30","Across realities","o"],
    ["What If... the Hulk Fought the Mech Avengers?","E","2024-12-22","Unknown","e"],
    ["What If... Agatha Went to Hollywood?","E","2024-12-23","Mid-20th century","e"],
    ["What If... the Red Guardian Stopped the Winter Soldier?","E","2024-12-24","1991","e",1991],
    ["What If... Howard the Duck Got Hitched?","E","2024-12-25","Unknown","e"],
    ["What If... the Emergence Destroyed the Earth?","E","2024-12-26","Eternals era","e"],
    ["What If... 1872?","E","2024-12-27","1872","o"],
    ["What If... the Watcher Disappeared?","E","2024-12-28","Across realities","e"],
    ["What If... What If?","E","2024-12-29","Across realities","e"],
   ]},

  {id:"zombies", name:"Marvel Zombies", label:"Marvel Zombies", des:"Branched 2018", fork:2018, at:"avengersendgame",
   note:"Hank Pym rescues Janet van Dyne from the Quantum Realm and brings a virus back with her. The series picks up five years later.",
   items:[["What If... Zombies?!","E","2021-09-08","2018","o"],["Marvel Zombies","A","2025-09-24","2023","o"]]},
  // Marvel Studios limb
  {id:"838", limb:"Marvel Studios", name:"Earth-838", label:"Earth-838", des:"Earth-838", fork:null,
   note:"Home of the Illuminati, where Strange and America Chavez land in Multiverse of Madness.",
   items:[["Doctor Strange in the Multiverse of Madness","F","2022-05-06","2024","o"]]},
  {id:"828", limb:"Marvel Studios", name:"Fantastic Four's World", label:"Earth-828", des:"First Steps", fork:null, at:"thunderbolts",
   note:"A retro-futurist 1960s New York where the Fantastic Four are the world's only heroes. Marvel's Disney+ timeline lists it after Thunderbolts*.",
   items:[["The Fantastic Four: First Steps","F","2025-07-25","1960s","e"]]},
  {id:"x97", limb:"Marvel Studios", name:"X-Men '97", label:"X-Men '97", des:"Earth-92131 (handbook no.)", fork:null,
   note:"The 1990s animated X-Men. Marvel Studios Animation's X-Men '97 picks up right where the original series ended. Not part of the Sacred Timeline.",
   items:[["X-Men: The Animated Series","A","1992-10-31","1990s","e"],["X-Men '97 (Season 1)","A","2024-03-20","1990s","e"],["X-Men '97 (Season 2)","A","2026-07-01","1990s","e"]]},
  {id:"yfnsm", limb:"Marvel Studios", name:"Your Friendly Neighborhood Spider-Man", label:"Friendly Spidey", des:"Separate reality", fork:null,
   note:"A Peter Parker who starts out under Norman Osborn instead of Tony Stark. Marvel places it outside the Sacred Timeline.",
   items:[["Your Friendly Neighborhood Spider-Man (Season 1)","A","2025-01-29","Around Civil War","e"]]},
  {id:"mtv", limb:"Marvel Studios", name:"Marvel Television", label:"Marvel TV", des:"Canon unclear", fork:null,
   note:"The ABC, Hulu and Freeform shows. They reference the films, but Marvel left them out of its official timeline book and its Disney+ timeline order, which does include the Netflix shows. Helstrom's showrunner has called it separate from the MCU.",
   items:[
    ["Agent Carter (Season 1)","S","2015-01-06","1946","o"],["Agent Carter (Season 2)","S","2016-01-19","1947","o"],
    ["Agents of S.H.I.E.L.D. (Season 1)","S","2013-09-24","2013–14","e"],["Agents of S.H.I.E.L.D. (Season 2)","S","2014-09-23","2014–15","e"],
    ["Agents of S.H.I.E.L.D. (Season 3)","S","2015-09-29","2015–16","e"],["Agents of S.H.I.E.L.D. (Season 4)","S","2016-09-20","2016–17","e"],
    ["Inhumans","S","2017-09-29","2017","e"],["Runaways (Season 1)","S","2017-11-21","2017","e"],
    ["Agents of S.H.I.E.L.D. (Season 5)","S","2017-12-01","2018–19","e"],["Cloak & Dagger (Season 1)","S","2018-06-07","2018","e"],
    ["Runaways (Season 2)","S","2018-12-21","2018","e"],["Cloak & Dagger (Season 2)","S","2019-04-04","2019","e"],
    ["Agents of S.H.I.E.L.D. (Season 6)","S","2019-05-10","2019","e"],["Runaways (Season 3)","S","2019-12-13","2019","e"],
    ["Agents of S.H.I.E.L.D. (Season 7)","S","2020-05-27","1931–2019","e"],["Helstrom","S","2020-10-16","2020","e"],
   ]},

  // 20th Century Fox limb
  {id:"10005", limb:"20th Century Fox", name:"Fox X-Men", label:"Fox X-Men", des:"Earth-10005", fork:null,
   note:"The Fox mutant films. Days of Future Past rewrites history after 1973, so the early films' future no longer happens the same way. Logan dies here, and in Deadpool & Wolverine the TVA marks the whole timeline for deletion.",
   items:[
    ["X-Men: First Class","F","2011-06-03","1962","o"],["X-Men: Days of Future Past","F","2014-05-23","1973 / 2023","o"],
    ["X-Men Origins: Wolverine","F","2009-05-01","1845–1979","o"],["X-Men: Apocalypse","F","2016-05-27","1983","o"],
    ["Dark Phoenix","F","2019-06-07","1992","o"],["X-Men","F","2000-07-14","Near future","o"],["X2","F","2003-05-02","Near future","o"],
    ["X-Men: The Last Stand","F","2006-05-26","Near future","o"],["The Wolverine","F","2013-07-26","After The Last Stand","o"],
    ["The New Mutants","F","2020-08-28","Present day","e"],["Deadpool","F","2016-02-12","2016","e"],["Deadpool 2","F","2018-05-18","2018","e"],
    ["Logan","F","2017-03-03","2029","o"],["Deadpool & Wolverine","F","2024-07-26","After Logan","e"],
   ]},
  {id:"foxtv", limb:"20th Century Fox", name:"Legion & The Gifted", label:"Legion & Gifted", des:"No official number", fork:null,
   note:"Fox's two X-Men TV shows. Each runs loosely alongside the films without lining up with them.",
   items:[["Legion (Season 1)","S","2017-02-08","Present day","e"],["The Gifted (Season 1)","S","2017-10-02","Present day","e"],["Legion (Season 2)","S","2018-04-03","Present day","e"],
     ["The Gifted (Season 2)","S","2018-09-25","Present day","e"],["Legion (Season 3)","S","2019-06-24","Present day","e"]]},
  {id:"foxff", limb:"20th Century Fox", name:"Fox Fantastic Four", label:"Fox FF", des:"No official number", fork:null,
   note:"Chris Evans' Johnny Storm from this world turns up in the Void in Deadpool & Wolverine.",
   items:[["Fantastic Four","F","2005-07-08","2005","e"],["Fantastic Four: Rise of the Silver Surfer","F","2007-06-15","2007","e"]]},
  {id:"fant4", limb:"20th Century Fox", name:"Fantastic Four (2015)", label:"Fant4stic", des:"No official number", fork:null,
   note:"Fox's 2015 reboot, unconnected to the 2005 films.",
   items:[["Fantastic Four (2015)","F","2015-08-07","2015","e"]]},
  {id:"dd03", limb:"20th Century Fox", name:"Daredevil & Elektra", label:"Daredevil 2003", des:"No official number", fork:null,
   note:"Jennifer Garner's Elektra from this world fights alongside Deadpool and Wolverine in the Void.",
   items:[["Daredevil (2003)","F","2003-02-14","2003","e"],["Elektra","F","2005-01-14","2004","e"]]},

  // Sony limb
  {id:"raimi", limb:"Sony Pictures", name:"Raimi's Spider-Man", label:"Raimi Spider-Man", des:"Earth-96283 (fan no.)", fork:null,
   note:"Sam Raimi's trilogy. This Peter Parker is pulled into the MCU during No Way Home.",
   items:[["Spider-Man (2002)","F","2002-05-03","2002","e"],["Spider-Man 2","F","2004-06-30","2004","e"],["Spider-Man 3","F","2007-05-04","2007","e"],["Spider-Man: No Way Home","F","2021-12-17","Years later","o"]]},
  {id:"webb", limb:"Sony Pictures", name:"The Amazing Spider-Man", label:"Webb Spider-Man", des:"Earth-120703 (fan no.)", fork:null,
   note:"Marc Webb's two films. This Peter Parker is pulled into the MCU during No Way Home.",
   items:[["The Amazing Spider-Man","F","2012-07-03","2012","e"],["The Amazing Spider-Man 2","F","2014-05-02","2014","e"],["Spider-Man: No Way Home","F","2021-12-17","Years later","o"]]},
  {id:"ssu", limb:"Sony Pictures", name:"Sony's Spider-Man Universe", label:"Venom-verse", des:"No official number", fork:null,
   note:"Sony's Venom films and spin-offs. Eddie Brock is briefly pulled into the MCU at the end of Let There Be Carnage, then sent home in No Way Home.",
   items:[["Madame Web","F","2024-02-14","2003","o"],["Venom","F","2018-10-05","2018","e"],["Venom: Let There Be Carnage","F","2021-10-01","2019","e"],
     ["Morbius","F","2022-04-01","Present day","e"],["Kraven the Hunter","F","2024-12-13","Present day","e"],["Venom: The Last Dance","F","2024-10-25","Present day","e"]]},
  {id:"verse", limb:"Sony Pictures", name:"The Spider-Verse", label:"Spider-Verse", des:"Earth-1610", fork:null,
   note:"Miles Morales' animated multiverse. Across the Spider-Verse even shows MCU and Sony live-action footage as other Earths.",
   items:[["Spider-Man: Into the Spider-Verse","A","2018-12-14","Present day","e"],["Spider-Man: Across the Spider-Verse","A","2023-06-02","Present day","e"],["Spider-Man: Beyond the Spider-Verse","A","2027-06-18","Present day","e"]]},

  // Before the MCU limb
  {id:"blade", limb:"Before the MCU", name:"Blade Trilogy", label:"Blade", des:"No official number", fork:null,
   note:"Wesley Snipes' Blade. He returns in the Void in Deadpool & Wolverine. Blade: The Series, from the films' writer David S. Goyer, continued on TV with a new lead.",
   items:[["Blade","F","1998-08-21","1998","e"],["Blade II","F","2002-03-22","2000","e"],["Blade: Trinity","F","2004-12-08","2004","e"],["Blade: The Series","S","2006-06-28","2006","e"]]},
  {id:"ghost", limb:"Before the MCU", name:"Ghost Rider", label:"Ghost Rider", des:"No official number", fork:null,
   note:"Nicolas Cage's Johnny Blaze. Spirit of Vengeance works as a loose sequel.",
   items:[["Ghost Rider","F","2007-02-16","2007","e"],["Ghost Rider: Spirit of Vengeance","F","2012-02-17","2012","e"]]},
  {id:"hulk03", limb:"Before the MCU", name:"Ang Lee's Hulk", label:"Hulk 2003", des:"No official number", fork:null,
   note:"Universal's Hulk with Eric Bana. The 2008 MCU film is not a sequel to it.",
   items:[["Hulk (2003)","F","2003-06-20","2003","e"]]},
  {id:"punisher", limb:"Before the MCU", name:"Punisher Films", label:"Punisher films", des:"3 separate takes", fork:null,
   note:"Three unconnected Punisher films, each its own continuity. The 1989 film opened in West Germany in October 1989 and went straight to video in the US in 1991.",
   items:[["The Punisher (1989)","F","1989-10-05","1989","e"],["The Punisher (2004)","F","2004-04-16","2004","e"],["Punisher: War Zone","F","2008-12-05","2008","e"]]},
  {id:"classic", limb:"Before the MCU", name:"Classic TV", label:"Classic TV", des:"1977–1990", fork:null,
   note:"Live-action TV from the 1970s and 80s. The Hulk shows share one continuity; the Spider-Man, Doctor Strange and Captain America films each stand alone.",
   items:[["The Amazing Spider-Man (1977)","T","1977-09-14","1977","e"],["The Incredible Hulk (1977)","T","1977-11-04","1977","e"],
     ["The Incredible Hulk (series)","S","1978-03-10","1978–82","e"],["Doctor Strange (1978)","T","1978-09-06","1978","e"],
     ["Captain America (1979)","T","1979-01-19","1979","e"],["Captain America II: Death Too Soon","T","1979-11-23","1979","e"],
     ["The Incredible Hulk Returns","T","1988-05-22","1988","e"],["The Trial of the Incredible Hulk","T","1989-05-07","1989","e"],
     ["The Death of the Incredible Hulk","T","1990-02-18","1990","e"]]},
  {id:"odd", limb:"Before the MCU", name:"Early Oddities", label:"Oddities", des:"Each stands alone", fork:null,
   note:"One-off films, TV movies and shows, each in its own reality. Captain America (1990) opened in the UK and went to video in the US in 1992. The 1994 Fantastic Four was never officially released.",
   items:[["Howard the Duck","F","1986-08-01","1986","e"],["Captain America (1990)","F","1990-12-14","1943 / 1990s","e"],
     ["The Fantastic Four (1994)","F","","1994","e"],["Generation X","T","1996-02-20","1996","e"],["Nick Fury: Agent of S.H.I.E.L.D.","T","1998-05-26","1998","e"],["Mutant X","S","2001-10-06","2001","e"],["Man-Thing","F","2005-04-30","2005","e"]]},
];

const LIMBS = ["Before the MCU","20th Century Fox","Marvel Studios","Sony Pictures","Your universes"];
const TYPE = {F:"Film",S:"Series",A:"Animated",E:"Episode",X:"Special",O:"One-Shot",T:"TV film"};

// Fan "Narrative Order" (r/marvelstudios post, updated 08/10/26): [title, optional, note]. "@branch Title" points into another universe.
const NARRATIVE = {
  credit: `<b>Narrative order</b> is a fan-made viewing order built for story flow, from the r/marvelstudios “Narrative Order” post (<a href="https://www.reddit.com/r/marvelstudios/comments/14lccgy/" target="_blank" rel="noopener noreferrer">original post</a>, updated 08/10/26). It's an alternative to Marvel's official order, not a correction.`,
  items: [
    ["Captain America: The First Avenger"], ["Iron Man"], ["The Incredible Hulk"], ["Iron Man 2"], ["Thor"], ["The Avengers"],
    ["Thor: The Dark World"], ["Guardians of the Galaxy"], ["Captain America: The Winter Soldier"], ["Iron Man 3"],
    ["Guardians of the Galaxy Vol. 2"], ["I Am Groot (Season 1)", 1], ["I Am Groot (Season 2)", 1],
    ["Avengers: Age of Ultron"], ["Doctor Strange"], ["Ant-Man"], ["Captain America: Civil War"],
    ["Black Widow", 0, "Save its post-credit scene for after Avengers: Endgame."], ["Black Panther"], ["Spider-Man: Homecoming"],
    ["Ant-Man and the Wasp", 0, "Save its post-credit scene for after Avengers: Infinity War."], ["Thor: Ragnarok"],
    ["Avengers: Infinity War"], ["Captain Marvel"], ["Avengers: Endgame"], ["WandaVision"], ["The Falcon and the Winter Soldier"],
    ["Spider-Man: Far From Home"], ["Spider-Man: No Way Home"], ["Hawkeye"], ["The Guardians of the Galaxy Holiday Special"],
    ["@tva Loki (Season 1)"], ["@whatif What If...? Season 1", 1], ["@whatif What If...? Season 2", 1], ["@whatif What If...? Season 3", 1],
    ["Ant-Man and the Wasp: Quantumania"], ["@tva Loki (Season 2)"], ["Deadpool & Wolverine"], ["Thor: Love and Thunder"],
    ["Guardians of the Galaxy Vol. 3"], ["Black Panther: Wakanda Forever"], ["Moon Knight", 1], ["Ironheart"],
    ["Shang-Chi and the Legend of the Ten Rings"], ["Doctor Strange in the Multiverse of Madness"], ["Agatha All Along"], ["Eternals"],
    ["She-Hulk: Attorney at Law"], ["Ms. Marvel"], ["The Marvels"], ["Secret Invasion", 1], ["Echo", 1],
    ["Daredevil: Born Again (Season 1)", 1], ["Daredevil: Born Again (Season 2)", 1], ["Wonder Man"], ["Captain America: Brave New World"],
    ["Thunderbolts*"], ["@828 The Fantastic Four: First Steps"], ["The Punisher: One Last Kill"], ["Spider-Man: Brand New Day"],
  ],
};
const localDay = () => new Date().toLocaleDateString("en-CA");   // YYYY-MM-DD in the visitor's time zone
let TODAY = localDay();
const MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
document.querySelectorAll(".kk").forEach(k => k.textContent = MAC ? "⌘K" : "Ctrl K");

const KEY = "mcu-yggdrasil-v2";
let S;
try { S = clean(JSON.parse(localStorage.getItem(KEY) || "{}"), 1); } catch { S = DEF(); }   // state.js: shape-checked, field by field
const readHash = () => { try { return decodeURIComponent(location.hash.slice(1)); } catch { return ""; } };
const hash = readHash();
let editing = null, confirming = null;
// A visitor action: stamps what fn changed (state.js) and tells sync. Returns the old values, for Undo.
let changed = false, storeWarned = false;
const act = fn => {
  const old = touch(S, fn), now = textMap(S), after = {};
  for (const k in old) after[k] = now[k];
  if (Object.keys(old).length) changed = true;
  return {old, after};
};
const save = () => {
  if (changed) { changed = false; window.mcuApp?.onSave?.(); }
  try { const r = clean(JSON.parse(localStorage.getItem(KEY) || "{}")); if (r.owner === S.owner && merge(S, r).changed) setTimeout(() => renderAll(), 0); } catch {}
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch {
    if (!storeWarned) { storeWarned = true; setTimeout(() => toast("This browser isn't saving your progress (its storage is full or blocked), so changes will be lost when you leave."), 0); }
  }
};
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "");
const yearNum = y => { const m = String(y).match(/\d{4}/); return m ? +m[0] : Infinity; };
// Films, series and seasons announced on TMDB but not yet placed by hand (upcoming.js, rebuilt from TMDB on
// every publish by tools/build_upcoming.py) join the end of their universe as estimates, set "TBA", until placed here.
const upSyn = {}, upSeries = new Set();
if (typeof UPCOMING !== "undefined") {
  // skip anything already on the site, including titles the visitor added themselves
  const listed = new Set([...UNIS.flatMap(u => u.items.filter(Array.isArray).map(it => slug(it[0]))),
    ...Object.values(S.cItems || {}).flat().map(e => slug(e.t || ""))]);
  for (const f of UPCOMING) {
    const home = UNIS.find(u => u.id === f.u) || UNIS.find(u => u.id === "616");
    if (listed.has(f.slug) || listed.has(slug(f.t)) || !TYPE[f.k]) continue;
    home.items.push([f.t, f.k, f.rel || "", "TBA", "e", undefined, f.slug]); listed.add(f.slug);   // keeps its first id
    if (f.syn) upSyn[f.slug] = f.syn;
    if (f.tv) upSeries.add(f.slug);
    if (f.art && typeof ART !== "undefined") ART.add(f.slug);
  }
}
// hand-written premise first (synopses.js), else TMDB's overview for an auto-added film
const synOf = id => (typeof SYN !== "undefined" && SYN[id]) || upSyn[id] || "";
const fmtDate = d => d ? new Date(d + "T00:00").toLocaleDateString(undefined, {year:"numeric",month:"short",day:"numeric"}) : "Unreleased";
const unis = () => UNIS.concat(S.cUnis);
const uni = id => unis().find(u => u.id === id);
if (uni(hash)) S.sel = hash;
else if (!uni(S.sel)) S.sel = "616";

function entries(u) {
  const base = (u.items || []).map(([t, k, rel, y, c, f, id], ord) => ({id:id || slug(t), t, k, rel, y, c, f, ord, base:true}))
    .filter(e => !S.removed.includes(u.id + ":" + e.id));
  const all = base.concat((S.cItems[u.id] || []).map(e => ({...e, c:"e"})));
  all.forEach(e => Object.assign(e, S.edits[u.id + ":" + e.id] || {}));
  // added titles slot in after the last listed title at or before their year
  all.forEach(e => {
    if (e.base) return;
    let o = -1;
    base.forEach(b => { if (yearNum(b.y) <= yearNum(e.y)) o = Math.max(o, b.ord); });
    e.ord = o + 0.5;
  });
  return all;
}
const stats = u => { const es = entries(u); return [es.length, es.filter(e => S.watched[e.id]).length]; };

function syncOrder(u, all) {
  const ids = new Set(all.map(e => e.id));
  const order = (S.order[u.id] || []).filter(id => ids.has(id));
  const story = [...all].sort((a, b) => a.ord - b.ord);
  story.forEach((e, i) => {
    if (order.includes(e.id)) return;
    order.splice(i ? order.indexOf(story[i - 1].id) + 1 : 0, 0, e.id);
  });
  return S.order[u.id] = order;
}

function moveTo(order, id, ref, after) {
  order.splice(order.indexOf(id), 1);
  const j = order.indexOf(ref);
  order.splice(after ? j + 1 : j, 0, id);
}

const ring = (p, label) => {
  const C = 2 * Math.PI * 18;
  return `<svg class="pring" viewBox="0 0 44 44" aria-hidden="true"><circle class="bgc" cx="22" cy="22" r="18"/><circle class="fgc" cx="22" cy="22" r="18" stroke-dasharray="${(p * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 22 22)"/><text x="22" y="26" text-anchor="middle">${label}</text></svg>`;
};

/* ---------- tree ---------- */
const CX = 600, CY = 560, R = 400, HUB = 215, BASE_Y = 960;
const rad = a => a * Math.PI / 180;
const polar = (r, a) => ({x:+(CX + r * Math.cos(rad(a))).toFixed(1), y:+(CY + r * Math.sin(rad(a))).toFixed(1)});
const forkY = yr => 940 - Math.max(0, Math.min(90, yr - 1940)) / 90 * 300;
let seed = 11;
const rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
const STARS = Array.from({length:170}, () => `<circle class="star" cx="${(rnd()*1200).toFixed(0)}" cy="${(-20 + rnd()*1050).toFixed(0)}" r="${(0.4+rnd()*1.3).toFixed(2)}" opacity="${(0.12+rnd()*0.5).toFixed(2)}"/>`).join("");
// Trunk: N strands twisted round each other like a rope. Every strand is one unbroken line from the tip of
// its root, up the trunk, to the crown, where the limbs carry on from the strand tops. The twist eases in
// and out (no sideways kink at either end) and the trunk flares at the base and the crown, so the roots
// spread out of it and the limbs grow out of it instead of meeting it at a seam.
const TOP_Y = CY + 30;
const TRUNK = (() => {
  const N = 11, H = BASE_Y - TOP_Y, ph = k => 2 * Math.PI * k / N;
  const w = t => 13 + 43 * (1 - t) ** 3 + 15 * t ** 4;             // flared at both ends, waisted between
  const turn = t => 8 * (3 * t * t - 2 * t * t * t);                // twist with zero slope at both ends
  const at = (k, t) => ({x:CX + w(t) * Math.sin(turn(t) + ph(k)), y:BASE_Y - H * t});
  let svg = "";
  const tops = [];
  for (let k = 0; k < N; k++) {
    const f = at(k, 0), sn = Math.sin(ph(k)), top = at(k, 1);
    tops.push(top);
    // the root carries on the way the strand was heading: outward by as much as the strand sits off-centre
    const R = {x:CX + (f.x - CX) * 5, y:BASE_Y + 30 + 12 * (1 - Math.abs(sn))};
    const c1 = {x:f.x + 129 * sn * .07, y:BASE_Y + 26}, c2 = {x:R.x - (R.x - f.x) * .45, y:R.y - 2};
    let d = `M${R.x.toFixed(1)} ${R.y.toFixed(1)} C${c2.x.toFixed(1)} ${c2.y.toFixed(1)},${c1.x.toFixed(1)} ${c1.y.toFixed(1)},${f.x.toFixed(1)} ${f.y}`;
    for (let i = 1; i <= 46; i++) { const q = at(k, i / 46); d += ` L${q.x.toFixed(1)} ${q.y.toFixed(1)}`; }
    // no wide halo strokes here: stacked on a braid they read as blocky slabs; the trunk's glow is .core
    svg += `<path pathLength="1" d="${d}"/>` + (k % 3 ? "" : `<path class="flow" d="${d}" style="animation-delay:-${k}s"/>`);
  }
  tops.sort((p, q) => p.x - q.x);
  return {svg, tops};
})();

// glow comes from a wide, faint halo stroke under the strands; an SVG blur filter here re-blurs on every
// animation frame (the flowing dashes alone made it work constantly) and made the branch animation lag
const curve = (p0, c1, c2, p3, flow, offs = [-5, 0, 5]) => {
  let s = `<path class="halo" pathLength="1" d="M${p0.x} ${p0.y} C${c1.x} ${c1.y},${c2.x} ${c2.y},${p3.x} ${p3.y}"/>`;
  for (const o of offs) s += `<path pathLength="1" d="M${p0.x} ${p0.y} C${c1.x + o} ${c1.y},${c2.x} ${c2.y + o},${p3.x} ${p3.y}"/>`;
  return s + (flow ? `<path class="flow" d="M${p0.x} ${p0.y} C${c1.x} ${c1.y},${c2.x} ${c2.y},${p3.x} ${p3.y}"/>` : "");
};
const cls = ids => ids.includes(S.sel) ? "on" : S.sel === "616" ? "" : "dim";

function leaf(u, x, y, label, st, gd = 1.6) {
  const [n, w] = st, r = 4 + Math.min(5, Math.sqrt(n) * 1.1), rr = r + 5, C = 2 * Math.PI * rr;
  return `<g class="leaf${u.id === S.sel ? " on" : ""}" data-u="${esc(u.id)}" tabindex="0" role="button" style="--gd:${gd.toFixed(2)}s" aria-label="${esc(u.label || u.name)} ${esc(u.des)}${u.label && u.label !== u.name ? ` (${esc(u.name)})` : ""}, ${w} of ${n} watched" aria-pressed="${u.id === S.sel}">
    <circle class="hit" cx="${x}" cy="${y}" r="22"/>
    ${w ? `<circle class="ring-bg" cx="${x}" cy="${y}" r="${rr}"/><circle class="ring" cx="${x}" cy="${y}" r="${rr}" stroke-dasharray="${(w / n * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 ${x} ${y})"/>` : ""}
    <circle class="dot" cx="${x}" cy="${y}" r="${r.toFixed(1)}"/>${label}</g>`;
}
const flatLabel = (u, x, y, anchor) => `<text aria-hidden="true" x="${x}" y="${y}" text-anchor="${anchor}"><tspan class="lbl">${esc(u.label || u.name)}</tspan><tspan font-size="0"> </tspan><tspan class="des" x="${x}" dy="17">${esc(u.des)}</tspan></text>`;

const GEOM = {};
function renderTree() {
  const ST = Object.fromEntries(unis().map(u => [u.id, stats(u)]));
  for (const k in GEOM) delete GEOM[k];
  GEOM["616"] = [[{x:CX, y:BASE_Y}, {x:CX, y:BASE_Y - 130}, {x:CX, y:CY + 130}, {x:CX, y:CY}]];
  let br = "", nodes = "", stemDefs = "";
  // crown: limbs radiate from the top of the trunk, universes fan out on an arc
  const groups = LIMBS.map(l => ({l, us:unis().filter(u => u.limb === l)})).filter(g => g.us.length);
  const slots = groups.reduce((n, g) => n + g.us.length, 0) + groups.length - 1;
  // ponytail: one arc of fixed slots; past ~30 universes the labels start to crowd
  const step = 172 / Math.max(slots - 1, 1);
  let slot = 0;
  groups.forEach((g, gi) => {
    const angles = g.us.map(() => -176 + step * slot++);
    slot++;
    const ha = angles.reduce((a, b) => a + b, 0) / angles.length, hub = polar(HUB, ha);
    // every trunk strand carries on into a limb: each limb takes the strand tops on its side of the crown
    // and its strands leave from those, heading on up the way they ran, then gather at the limb's hub
    const T = TRUNK.tops, a0 = Math.floor(gi * T.length / groups.length), a1 = Math.max(a0 + 1, Math.floor((gi + 1) * T.length / groups.length));
    const starts = T.slice(a0, a1), c2 = polar(HUB - 80, ha), up = q => ({x:q.x + (q.x - CX) * .6, y:CY - 80});
    const mid = starts[starts.length >> 1], line = (q, o) => `M${q.x.toFixed(1)} ${q.y} C${(up(q).x + o).toFixed(1)} ${up(q).y},${c2.x} ${c2.y + o},${hub.x} ${hub.y}`;
    // a lit limb fades from trunk green into gold along its own run, trunk to hub, so it meets the gold
    // branches beyond its hub without a seam, wherever on the crown that hub sits
    stemDefs += `<linearGradient id="stem${gi}" gradientUnits="userSpaceOnUse" x1="${mid.x.toFixed(1)}" y1="${mid.y}" x2="${hub.x}" y2="${hub.y}"><stop offset="0" style="stop-color:var(--strand);stop-opacity:.25"/><stop offset=".85" style="stop-color:var(--gold)"/></linearGradient>`;
    let limb = `<g class="stem" style="--gd:.75s;--stem:url(#stem${gi})"><path class="halo" pathLength="1" d="${line(mid, 0)}"/>${[-9, -4.5, 0, 4.5, 9].map((o, j) => `<path pathLength="1" d="${line(starts[Math.floor(j * starts.length / 5)], o)}"/>`).join("")}<path class="flow" d="${line(mid, 0)}"/></g>`;
    const limbSeg = [mid, up(mid), c2, hub];
    g.us.forEach((u, i) => {
      const a = angles[i], p = polar(R, a);
      GEOM[u.id] = [limbSeg, [hub, polar(HUB + 70, ha), polar(R - 90, a), p]];
      limb += `<g class="${cls([u.id])}" style="--gd:${(1.15 + slot * .018).toFixed(2)}s">${curve(hub, polar(HUB + 70, ha), polar(R - 90, a), p, false)}</g>`;
      const lp = polar(R + 18, a), left = a < -90, rot = (left ? a + 180 : a).toFixed(1);
      nodes += leaf(u, p.x, p.y, `<text aria-hidden="true" transform="translate(${lp.x} ${lp.y}) rotate(${rot})" text-anchor="${left ? "end" : "start"}"><tspan class="lbl" y="-2">${esc(u.label || u.name)}</tspan><tspan font-size="0"> </tspan><tspan class="des" x="0" dy="15">${esc(u.des)}</tspan></text>`, ST[u.id], 1.6 + slot * .03);
    });
    br += `<g class="${cls(g.us.map(u => u.id))}">${limb}</g>`;
    const lp = polar(HUB - 34, ha);
    nodes += `<text class="limb" x="${lp.x}" y="${lp.y}" text-anchor="middle">${esc(g.l.toUpperCase())}</text>`;
  });

  // What If twigs: one per episode, sprouting from the trunk at its divergence year
  const wi = uni("whatif");
  let twigs = "", dots = "";
  wi.items.filter(r => r[5]).forEach((r, i) => {
    const y = forkY(r[5]), side = i % 2 ? 1 : -1, L = 55 + (i % 4) * 22, tip = {x:CX + side * L, y:y - 26 - (i % 3) * 10};
    twigs += `<path d="M${CX} ${y} Q${CX + side * L * .55} ${y + 2} ${tip.x} ${tip.y}"/>`;
    dots += `<circle class="twig" cx="${tip.x}" cy="${tip.y}" r="3.5"><title>${esc(r[0])} · splits ${r[5]}</title></circle>`;
  });
  br += `<g class="${cls(["whatif"])}" style="--gd:.5s">${twigs}${curve({x:CX, y:880}, {x:CX - 60, y:882}, {x:420, y:895}, {x:350, y:880}, false)}${dots}</g>`;
  nodes += leaf(wi, 350, 880, flatLabel(wi, 328, 876, "end"), ST.whatif, 1.1);
  GEOM.whatif = [[{x:CX, y:880}, {x:CX - 60, y:882}, {x:420, y:895}, {x:350, y:880}]];

  // branched timelines with a single fork year
  [["tva", -1, 330, 720], ["zombies", 1, 870, 700]].forEach(([id, side, x, y]) => {
    const u = uni(id), fy = forkY(u.fork);
    GEOM[id] = [[{x:CX, y:fy}, {x:CX + side * 90, y:fy - 4}, {x:x - side * 120, y:y + 30}, {x, y}]];
    br += `<g class="${cls([id])}" style="--gd:.6s">${curve({x:CX, y:fy}, {x:CX + side * 90, y:fy - 4}, {x:x - side * 120, y:y + 30}, {x, y}, true)}</g>`;
    nodes += leaf(u, x, y, flatLabel(u, x + side * 22, y - 4, side < 0 ? "end" : "start"), ST[id], 1.2);
  });

  const trunk = uni("616");
  $("#tree").innerHTML = `<defs><filter id="glow" filterUnits="userSpaceOnUse" x="-100" y="-200" width="1400" height="1400"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="trunkFade" gradientUnits="userSpaceOnUse" x1="0" y1="${TOP_Y + 130}" x2="0" y2="${TOP_Y - 20}"><stop offset="0" style="stop-color:var(--gold)"/><stop offset="1" style="stop-color:var(--strand);stop-opacity:.45"/></linearGradient>
    <radialGradient id="knot"><stop offset="0" style="stop-color:var(--strand);stop-opacity:.22"/><stop offset=".5" style="stop-color:var(--strand);stop-opacity:.08"/><stop offset="1" style="stop-color:var(--strand);stop-opacity:0"/></radialGradient>
    <radialGradient id="throne"><stop offset="0" stop-color="#e8bb57" stop-opacity=".2"/><stop offset=".45" stop-color="#e8bb57" stop-opacity=".08"/><stop offset="1" stop-color="#e8bb57" stop-opacity="0"/></radialGradient>${stemDefs}</defs>
    <ellipse cx="${CX}" cy="${BASE_Y + 26}" rx="320" ry="64" fill="url(#throne)"/>
    <g class="tree"><g class="trunk ${cls(["616"])}"><ellipse class="core" cx="${CX}" cy="${(BASE_Y + TOP_Y) / 2 + 10}" rx="70" ry="${(BASE_Y - TOP_Y) / 2 + 40}" fill="url(#knot)"/>${TRUNK.svg}</g>${br}</g>
    <text class="base" x="${CX}" y="${BASE_Y + 46}" text-anchor="middle">THE END OF TIME</text>
    ${leaf(trunk, CX, 905, flatLabel(trunk, CX + 54, 901, "start"), ST["616"], .9)}${nodes}`;
}

/* ---------- panel ---------- */
let visible = [];
const CHECK = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5"/></svg>`;

// Films / Series switch. Series = shows, What If...? episodes and animated series (anything with an episode
// list); Films = everything else (films, one-shots, specials, TV films). The switch only appears, and only
// filters, in universes that have both; elsewhere every title shows.
const isSeries = e => e.k === "S" || e.k === "E" || upSeries.has(e.id) || (e.k === "A" && typeof EPS !== "undefined" && !!EPS[e.id]);
const isMixed = all => all.some(isSeries) && all.some(e => !isSeries(e));
let kindNow = "all";   // the filter in force for the universe on screen (set in renderPanel)
const kindOk = e => kindNow === "all" || (isSeries(e) ? kindNow === "series" : kindNow === "film");
const listed = e => kindOk(e) && !(S.hideSeen && S.watched[e.id]);
// make sure a title can be seen in the list before jumping to it (palette, "Show in list")
const unhide = e => { let hit = false; if (S.hideSeen && S.watched[e.id]) { S.hideSeen = false; hit = true; } if (!kindOk(e)) { S.kind = "all"; hit = true; } return hit; };

// the title to watch next: first unwatched, released one in story order (or the fan Narrative order).
// The classic "Up next" card and the TVA terminal's default case both use it, so they never disagree.
// out yet: released on or before today. A listed title with no date is still to come; titles the visitor added count as out.
const isOut = e => e.rel ? e.rel <= TODAY : !e.base;
function upNext(u, all = entries(u)) {
  let seq = [...all].sort((a, b) => a.ord - b.ord);
  if (S.mode === "narrative" && u.id === "616") {   // the fan order first, then anything it leaves out, in story order
    const narr = NARRATIVE.items.filter(([r]) => r[0] !== "@").map(([t]) => all.find(e => e.id === slug(t))).filter(Boolean), inN = new Set(narr);
    seq = narr.concat(seq.filter(e => !inN.has(e)));
  }
  return seq.find(e => !S.watched[e.id] && isOut(e));
}

function card(e, i, n, my) {
  const seen = S.watched[e.id], soon = e.rel && e.rel > TODAY;
  return `<li class="e k-${e.k}${seen ? " seen" : ""}${rowObs && !shownRows.has(e.id) ? " rv" : ""}" data-id="${esc(e.id)}" draggable="${my}">
    <div class="row">
      <button type="button" class="eye" data-act="watch" aria-pressed="${!!seen}" aria-label="${seen ? "Watched" : "Mark watched"}: ${esc(e.t)}">${CHECK}</button>
      <span class="th" aria-hidden="true">${typeof ART !== "undefined" && ART.has(e.id) ? `<img src="art/${e.id}-160.webp" alt="" width="160" height="90" loading="lazy" decoding="async">` : ""}</span>
      <div><div class="t" tabindex="0" role="button" aria-label="Details: ${esc(e.t)}">${e.num ? `<span class="yv">${e.num}.</span> ` : my ? `<span class="yv">${i + 1}.</span> ` : ""}${esc(e.t)}</div>
        <div class="sub"><span class="kd"></span>${TYPE[e.k] || "Title"} · ${soon ? "Out " : ""}${fmtDate(e.rel)}${soon ? ` <span class="soon">Upcoming</span>` : ""}${e.opt ? ` <span class="soon opt">Optional</span>` : ""}</div>${e.note ? `<div class="sub vnote">${esc(e.note)}</div>` : ""}</div>
      <div class="right">
        <div class="acts">
          ${my ? `<button type="button" data-act="up" aria-label="Move ${esc(e.t)} up"${i ? "" : " disabled"}>↑</button><button type="button" data-act="down" aria-label="Move ${esc(e.t)} down"${i < n - 1 ? "" : " disabled"}>↓</button>` : ""}
          <button type="button" data-act="edit">Edit</button><button type="button" data-act="del">Remove</button></div>
        <span class="yv${e.c === "e" ? " est" : ""}"${e.c === "e" ? ` title="Best estimate: no official date"` : ""}>${esc(e.y || "?")}</span>
      </div>
      ${editing === e.id ? `<form class="edit" data-act="save">
        <label class="form-l">Title<input class="in" name="t" value="${esc(e.t)}" required></label>
        <label class="form-l">In-universe year<input class="in" name="y" value="${esc(e.y)}"></label>
        <div class="rowx" style="align-self:end"><button class="btn primary" type="submit">Save</button><button class="btn ghost" type="button" data-act="cancel">Cancel</button></div>
      </form>` : ""}
    </div></li>`;
}

function renderHero() {
  const ids = new Set(unis().flatMap(x => entries(x).map(e => e.id)));
  const w = [...ids].filter(id => S.watched[id]).length;
  $("#nTitles").textContent = ids.size;
  $("#nUnis").textContent = unis().length;
  $("#meter").hidden = !w;
  $("#meter").innerHTML = `<i><b style="width:${ids.size ? w / ids.size * 100 : 0}%"></b></i><span>${w} of ${ids.size} watched across the multiverse</span>`;
}

function renderPanel(focusSel) {
  const u = uni(S.sel) || uni("616");
  S.sel = u.id;
  const all = entries(u), order = syncOrder(u, all);

  $("#uSel").innerHTML = [["", unis().filter(x => !x.limb)], ...LIMBS.map(l => [l, unis().filter(x => x.limb === l)])]
    .filter(([, us]) => us.length)
    .map(([l, us]) => (l ? `<optgroup label="${esc(l)}">` : "") + us.map(x => `<option value="${esc(x.id)}"${x.id === u.id ? " selected" : ""}>${esc(x.name)}</option>`).join("") + (l ? "</optgroup>" : "")).join("");
  const where = u.id === "616" ? "The trunk" : u.fork != null ? `Branched in ${esc(u.fork)}` : u.limb ? esc(u.limb) : "Many branches";
  $("#crumb").textContent = `${where.replace(/&amp;/g, "&")} / ${u.des}`;

  const custom = S.cUnis.includes(u);
  $("#uHead").innerHTML = `<h2>${esc(u.name)}</h2>${u.note ? `<p>${esc(u.note)}</p>` : ""}
    ${custom ? (confirming === "u" ? `<div class="rowx">Delete this universe and its titles? <button class="btn warn" type="button" data-act="delu-yes">Delete</button><button class="btn ghost" type="button" data-act="cancel-c">Keep</button></div>`
      : `<div class="rowx"><button class="btn ghost" type="button" data-act="delu">Delete universe</button></div>`) : ""}`;

  // up next: first unwatched, released title in story order (of the films or series, when filtered)
  const mixed = isMixed(all);
  kindNow = mixed ? S.kind : "all";
  const pool = all.filter(kindOk), seen = pool.filter(e => S.watched[e.id]).length, p = pool.length ? seen / pool.length : 0;
  const what = kindNow === "film" ? " films" : kindNow === "series" ? " series" : "";
  const narr = S.mode === "narrative" && u.id === "616";
  const nx = upNext(u, pool);
  keepOpen($("#next"), nx?.id || "", "details", () => $("#next").innerHTML = nx
    ? `<div class="next k-${nx.k}">${artImg(nx.id, "dt-art")}${ring(p, Math.round(p * 100) + "%")}<div><small>${seen ? "Up next" : "Start here"} · ${seen} of ${pool.length}${what} watched</small><strong>${esc(nx.t)}</strong>
        <div class="sub"><span class="kd"></span>${TYPE[nx.k]} · set ${esc(nx.y)}</div></div>
        <button class="btn primary" type="button" data-act="watch" data-id="${esc(nx.id)}">Mark watched</button></div>`
    : seen < pool.length ? `<div class="next">${ring(p, Math.round(p * 100) + "%")}<div><small>All caught up · ${seen} of ${pool.length}${what} watched</small><strong>You've seen everything that's out.</strong><div class="sub">${pool.length - seen} still to come. Pick another branch on the tree meanwhile.</div></div></div>`
    : pool.length ? `<div class="next">${ring(1, "100%")}<div><small>${what ? `All${what} watched` : "Universe complete"}</small><strong>You've seen everything here.</strong><div class="sub">Pick another branch on the tree.</div></div></div>` : "");

  document.querySelectorAll("#mode button").forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === S.mode));
  $("#f-seen").checked = S.hideSeen;
  $("#kind").hidden = !mixed;
  document.querySelectorAll("#kind button").forEach(b => b.setAttribute("aria-pressed", b.dataset.kind === kindNow));
  const my = S.mode === "my";
  $("#tl").classList.toggle("my", my);

  const mode = S.mode === "narrative" && !narr ? "story" : S.mode;
  let html = "";
  if (narr) {
    const placed = new Set();
    let n = 0;
    html = `<li class="credit">${NARRATIVE.credit}</li>`;
    NARRATIVE.items.forEach(([ref, opt, note]) => {
      n++;
      if (ref[0] === "@") {
        const sp = ref.indexOf(" "), go = ref.slice(1, sp);
        html += `<li class="fork"><button type="button" data-go="${esc(go)}">↳ ${n}. ${esc(ref.slice(sp + 1))}${opt ? " (optional)" : ""}, on the ${esc(uni(go).name)} branch</button></li>`;
        return;
      }
      const e = all.find(x => x.id === slug(ref));
      if (!e) return;
      placed.add(e.id);
      if (listed(e)) html += card({...e, num:n, opt, note}, 0, 0, false);
    });
    const rest = all.filter(e => !placed.has(e.id) && listed(e)).sort((a, b) => a.ord - b.ord);
    if (rest.length) html += `<li class="yr">Not placed in this order</li>` + rest.map(e => card(e, 0, 0, false)).join("");
    visible = [];
  } else {
  const list = all.filter(listed).sort(
    mode === "story" ? (a, b) => a.ord - b.ord
    : mode === "release" ? (a, b) => (a.rel || "9999").localeCompare(b.rel || "9999")
    : (a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  visible = list.map(e => e.id);
  // rows where Marvel's own timeline slots another universe into the trunk
  const forks = u.id === "616" && mode === "story" ? unis().filter(x => x.at) : [];
  const forkRow = x => `<li class="fork"><button type="button" data-go="${esc(x.id)}">↳ ${esc(x.name)} ${x.fork != null ? `branches off here (${esc(x.fork)})` : "fits here in Marvel's timeline"}</button></li>`;
  let last = null, lastNum = -Infinity;
  list.forEach((e, i) => {
    const n = yearNum(e.y);
    let key = null;
    // a year header never steps backwards; titles with an earlier start stay under the current header
    if (mode === "story") key = n === Infinity ? esc(e.y || "Undated") : n > lastNum ? n : null;
    else if (mode === "release") key = e.rel ? e.rel.slice(0, 4) : "Unreleased";
    if (key !== null && key !== last) { html += `<li class="yr">${key}</li>`; last = key; lastNum = typeof key === "number" ? key : -Infinity; }
    html += card(e, i, list.length, my);
    forks.filter(x => x.at === e.id).forEach(x => html += forkRow(x));
  });
  }
  $("#tl").innerHTML = html || `<li class="empty">${all.length ? "Everything here is watched. Turn off Hide watched to see it all." : "No titles yet. Add one below."}</li>`;
  revealRows();

  const removedHere = S.removed.filter(k => k.startsWith(u.id + ":")).length;
  $("#foot").innerHTML = (removedHere ? `<button class="btn ghost" type="button" data-act="restore">Restore ${removedHere} removed</button>` : "")
    + (confirming === "reset"
      ? `Erase every edit, added universe and watch mark? <button class="btn warn" type="button" data-act="reset-yes">Erase</button><button class="btn ghost" type="button" data-act="cancel-c">Keep</button>`
      : `<button class="btn ghost" type="button" data-act="reset">Reset sandbox</button>`);

  renderHero();
  renderDetail();
  save();
  window.mcuApp?.onRender?.();
  if (focusSel) document.querySelector(focusSel)?.focus();
}

const renderAll = f => { view === "branch" ? renderFocus(S.sel) : renderTree(); renderPanel(f); };
function select(id) {
  S.sel = id; editing = null; confirming = null; detailId = null;
  // each universe gets a history entry, so Back returns to the one before
  try { if (readHash() !== id) history.pushState(null, "", "#" + id); } catch {}
  renderPanel();
  if (animating) wantBranch = id;   // shown as soon as the zoom in or out ends
  else view === "branch" ? renderFocus(id, true) : enterBranch(id);
}
// the address changed by hand, or Back / Forward: follow it
const followHash = () => { const h = readHash(); if (h && h !== S.sel && uni(h)) select(h); };
addEventListener("hashchange", followHash);
addEventListener("popstate", followHash);

/* ---------- toast with undo ---------- */
let toastTimer, undoSnap = null;
function toast(msg, snap) {
  undoSnap = snap;
  $("#toastMsg").textContent = msg;
  $("#undo").hidden = !snap;
  $("#toast").hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").hidden = true, 4500);
}
$("#undo").addEventListener("click", () => {
  const u = undoSnap;
  if (u) { if (Object.keys(revert(S, u.old, u.after)).length) changed = true; if (!uni(S.sel)) S.sel = "616"; renderAll(); }
  undoSnap = null; $("#toast").hidden = true;
});
const withUndo = (msg, fn, focusSel) => { const old = act(fn); renderAll(focusSel); toast(msg, old); };

/* ---------- command palette ---------- */
const pal = $("#pal"), pq = $("#pq"), pres = $("#pres");
let pItems = [], pActive = 0;
function openPal() { if (pal.open) return; pq.value = ""; runPal(); pal.showModal(); pq.focus(); }
function runPal() {
  const q = pq.value.trim().toLowerCase();
  const score = s => { const i = s.toLowerCase().indexOf(q); return i < 0 ? -1 : i === 0 ? 2 : 1; };
  const us = unis().map(u => ({kind:"u", u, s:q ? Math.max(score(u.name), score(u.des)) : 1})).filter(x => x.s >= 0).sort((a, b) => b.s - a.s).slice(0, q ? 6 : 30);
  const ts = q ? unis().flatMap(u => entries(u).map(e => ({kind:"t", u, e, s:score(e.t)}))).filter(x => x.s >= 0).sort((a, b) => b.s - a.s).slice(0, 40) : [];
  pItems = [...us, ...ts];
  pActive = 0;
  let html = "";
  if (us.length) html += `<li class="h">Universes</li>`;
  pItems.forEach((it, i) => {
    if (it.kind === "t" && (i === 0 || pItems[i - 1].kind === "u")) html += `<li class="h">Titles</li>`;
    html += it.kind === "u"
      ? `<li><button type="button" role="option" data-i="${i}" aria-selected="${i === 0}"><span class="kd" style="background:var(--strand)"></span><span class="t">${esc(it.u.name)}</span><span class="u">${esc(it.u.des)}</span></button></li>`
      : `<li class="k-${it.e.k}"><button type="button" role="option" data-i="${i}" aria-selected="${i === 0}"><span class="kd" style="background:var(--kc,var(--gold))"></span><span class="t">${S.watched[it.e.id] ? "✓ " : ""}${esc(it.e.t)}</span><span class="u">${esc(it.u.name)}</span></button></li>`;
  });
  pres.innerHTML = html || `<li class="h">No matches for “${esc(pq.value)}”</li>`;
}
function setActive(i) {
  if (!pItems.length) return;
  pActive = (i + pItems.length) % pItems.length;
  pres.querySelectorAll("[role=option]").forEach(b => b.setAttribute("aria-selected", +b.dataset.i === pActive));
  pres.querySelector(`[data-i="${pActive}"]`).scrollIntoView({block:"nearest"});
}
function choose(i) {
  const it = pItems[i];
  if (!it) return;
  pal.close();
  if (it.kind === "u") { select(it.u.id); return; }
  select(it.u.id);
  if (unhide(it.e)) renderPanel();
  const li = document.querySelector(`li.e[data-id="${CSS.escape(it.e.id)}"]`);
  if (li) { li.scrollIntoView({behavior:"smooth", block:"center"}); li.classList.add("flash"); li.querySelector(".eye").focus({preventScroll:true}); }
}
pq.addEventListener("input", runPal);
pq.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); setActive(pActive + 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); setActive(pActive - 1); }
  else if (e.key === "Enter") { e.preventDefault(); choose(pActive); }
});
pres.addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) choose(+b.dataset.i); });
pal.addEventListener("click", e => { if (e.target === pal) pal.close(); });

/* ---------- events ---------- */
const tip = $("#tip"), stage = $("#stage");

/* ---------- branch focus: a branch zooms in and lies flat as a TVA-style timeline ---------- */
const NS = "http://www.w3.org/2000/svg", VB0 = [0, -20, 1200, 1050], GROUND = 560, X0 = 110, X1 = 1090;
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
let view = "tree", animating = false, detailId = null;

// Timeline rows rise into place the first time they scroll into view (IntersectionObserver, no scroll
// listeners). card() only marks rows not yet revealed (.rv), so a re-render never replays one.
const shownRows = new Set();
const rowObs = "IntersectionObserver" in window && !REDUCED ? new IntersectionObserver(es => {
  es.filter(en => en.isIntersecting).forEach((en, i) => {
    const li = en.target;
    li.style.transitionDelay = `${Math.min(i, 8) * 40}ms`;
    li.classList.add("shown"); shownRows.add(li.dataset.id); rowObs.unobserve(li);
  });
}, {rootMargin:"0px 0px -6% 0px"}) : null;
function revealRows() {
  if (!rowObs) return;
  rowObs.disconnect();   // the previous render's rows are gone; let the observer drop them
  document.querySelectorAll("#tl li.rv").forEach(li => rowObs.observe(li));
}
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const tween = (ms, fn) => new Promise(res => {
  if (REDUCED) { fn(1); return res(); }
  const t0 = performance.now();
  let done = false;
  const finish = () => { if (!done) { done = true; fn(1); res(); } };
  const step = now => { if (done) return; const t = Math.min(1, (now - t0) / ms); fn(ease(t)); t < 1 ? requestAnimationFrame(step) : finish(); };
  requestAnimationFrame(step);
  // background tabs pause animation frames; never leave the page stuck mid-animation
  setTimeout(finish, ms + 400);
});
const bez = ([a, b, c, d], t) => { const u = 1 - t; return {x:u*u*u*a.x + 3*u*u*t*b.x + 3*u*t*t*c.x + t*t*t*d.x, y:u*u*u*a.y + 3*u*u*t*b.y + 3*u*t*t*c.y + t*t*t*d.y}; };
const sample = (segs, n = 56) => Array.from({length:n}, (_, i) => { const f = i / (n - 1) * segs.length, k = Math.min(segs.length - 1, Math.floor(f)); return bez(segs[k], f - k); });
// zoom box around the branch, padded and kept at the stage's aspect ratio
function fitBox(pts) {
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y), cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  let w = Math.max(Math.max(...xs) - Math.min(...xs) + 260, 520), h = Math.max(Math.max(...ys) - Math.min(...ys) + 260, w * VB0[3] / VB0[2]);
  w = Math.max(w, h * VB0[2] / VB0[3]);
  return [cx - w / 2, cy - h / 2, w, h];
}
// eases, named after GSAP's; expoOut and quintOut are the reveal and move curves sitereel.ai uses
const expoOut = t => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);   // ≈ cubic-bezier(.16,1,.3,1)
const quintOut = t => 1 - Math.pow(1 - t, 5);                  // ≈ cubic-bezier(.23,1,.32,1)
const inOut = ease;                                            // cubic in-out, for camera moves
const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));
const lerp = (a, b, t) => a + (b - a) * t;
// one master clock, like a GSAP timeline: every part reads the same progress, so the phases overlap
// instead of stopping and starting
const timeline = (ms, fn) => new Promise(res => {
  const t0 = performance.now();
  let done = false;
  const finish = () => { if (!done) { done = true; fn(1); res(); } };
  const step = now => { if (done) return; const p = Math.min(1, (now - t0) / ms); fn(p); p < 1 ? requestAnimationFrame(step) : finish(); };
  requestAnimationFrame(step);
  setTimeout(finish, ms + 400);
});
// the moving branch: a soft halo plus a crisp core, no SVG filter (filters re-render every frame and stutter)
function morphPath() {
  const g = document.createElementNS(NS, "g");
  g.setAttribute("class", "morph");
  g.innerHTML = `<path class="m-glow"/><path class="m-core"/>`;
  $("#fx").appendChild(g);
  const paths = g.querySelectorAll("path");
  return [g, P => { const d = "M" + P.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L"); paths.forEach(x => x.setAttribute("d", d)); }];
}
// Camera, split into layers so a frame never repaints the tree: #tree (and #sky) are drawn once and handed to
// the GPU, which only scales, moves and fades them; the only thing redrawn each frame is the moving branch in
// #fx, a small SVG laid exactly over the tree whose viewBox follows the camera. The tree looks slightly soft
// while zoomed in (it is a scaled snapshot), but it is fading out by then and lands crisp at scale 1.
let cam = null;
function camStart() {
  const tree = $("#tree"), fx = $("#fx"), r = tree.getBoundingClientRect(), sr = stage.getBoundingClientRect();
  Object.assign(fx.style, {left:`${r.left - sr.left + stage.scrollLeft}px`, top:`${r.top - sr.top + stage.scrollTop}px`, width:`${r.width}px`, height:`${r.height}px`});
  fx.classList.add("on");
  tree.classList.add("focusing");
  cam = {s0:Math.min(r.width / VB0[2], r.height / VB0[3])};
}
// keepSky: inside a branch the stars stay pushed in, so going back can pull them out again
function camEnd(keepSky) {
  const tree = $("#tree");
  tree.classList.remove("focusing");
  tree.style.transform = tree.style.opacity = "";
  if (!keepSky) $("#sky").style.transform = "";
  $("#fx").classList.remove("on"); $("#fx").setAttribute("viewBox", VB0.join(" "));
  cam = null;
}
const fade = v => { $("#tree").style.opacity = v.toFixed(3); };
const flat = pts => pts.map((_, i) => ({x:X0 - 60 + (X1 - X0 + 120) * i / (pts.length - 1), y:GROUND}));
const syncChrome = () => { $("#back").hidden = view !== "branch"; stage.classList.toggle("in-branch", view === "branch"); };
// z: 0 = whole tree, 1 = zoomed onto the branch box bb
function camera(bb, z, sky = true) {
  const v = VB0.map((x, i) => lerp(x, bb[i], z)), s = VB0[2] / v[2], k = s * cam.s0;
  // showing box v instead of VB0 = scale by s about the centre, then shift the box centre to the middle
  const tx = k * (VB0[0] + VB0[2] / 2 - v[0] - v[2] / 2), ty = k * (VB0[1] + VB0[3] / 2 - v[1] - v[3] / 2);
  $("#fx").setAttribute("viewBox", v.map(n => n.toFixed(1)).join(" "));
  $("#tree").style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${s.toFixed(4)})`;
  // the stars drift a third as far, which reads as depth
  if (sky) $("#sky").style.transform = `translate(${(tx / 3).toFixed(1)}px,${(ty / 3).toFixed(1)}px) scale(${(1 + (s - 1) / 3).toFixed(4)})`;
}
// The branch view is drawn at full-tree scale, so its ground line is placed where it will appear on screen
// once the camera has zoomed onto bb: the zoom only ever goes one way, and the swap to the branch view is invisible.
const inZoom = (bb, pts) => {
  const s = VB0[2] / bb[2], c0x = VB0[0] + VB0[2] / 2, c0y = VB0[1] + VB0[3] / 2, bx = bb[0] + bb[2] / 2, by = bb[1] + bb[3] / 2;
  return pts.map(q => ({x:bx + (q.x - c0x) / s, y:by + (q.y - c0y) / s}));
};
let wantBranch = null;
const settle = () => { const w = wantBranch; wantBranch = null; if (w) view === "branch" ? renderFocus(w, true) : enterBranch(w); };
const mix = (a, b, k) => a.map((q, i) => ({x:lerp(q.x, b[i].x, k), y:lerp(q.y, b[i].y, k)}));

async function enterBranch(id) {
  if (animating) return;
  $("#tree").classList.remove("grow");
  renderTree();
  const segs = GEOM[id];
  if (!segs || REDUCED) { view = "branch"; renderFocus(id, true); syncChrome(); return; }
  animating = true;
  const pts = sample(segs), bb = fitBox(pts), tgt = inZoom(bb, flat(pts));
  camStart(); fade(1);
  const [m, draw] = morphPath();
  // one push in: the camera eases onto the branch while the rest of the tree dissolves and the branch
  // straightens out into the ground line of the branch view
  await timeline(1150, p => {
    fade(1 - expoOut(seg(p, 0, .4)));
    camera(bb, inOut(p));
    draw(mix(pts, tgt, inOut(seg(p, .12, .95))));
  });
  view = "branch"; renderFocus(id, true); syncChrome();
  $("#tree").style.transform = ""; fade(1);
  // hand-off: the moving line already sits exactly on the new ground line and dissolves into it, no hard cut
  await timeline(420, p => { m.style.opacity = 1 - quintOut(p); });
  m.remove(); camEnd(true); animating = false;
  if (wantBranch === id) wantBranch = null;
  settle();
}

async function exitBranch() {
  if (animating || view !== "branch") return;
  view = "tree"; syncChrome(); tip.hidden = true;
  const sky = !!$("#sky").style.transform;   // stars were pushed in on the way into this branch
  camStart(); fade(0);
  renderTree();
  const segs = GEOM[S.sel];
  if (!segs || REDUCED) { camEnd(); return; }
  animating = true;
  const pts = sample(segs), bb = fitBox(pts), tgt = inZoom(bb, flat(pts)), [m, draw] = morphPath();
  camera(bb, 1, sky); draw(tgt);
  // the reverse, one pull out: the line curls back into its branch while the camera eases back to the whole
  // tree and the tree fades in around it
  await timeline(1100, p => {
    draw(mix(tgt, pts, inOut(seg(p, 0, .8))));
    camera(bb, 1 - inOut(p), sky);
    fade(expoOut(seg(p, .35, 1)));
    m.style.opacity = 1 - seg(p, .8, 1);
  });
  m.remove(); camEnd(); animating = false;
  settle();
}

function renderFocus(id, intro) {
  const u = uni(id), es = entries(u).sort((a, b) => a.ord - b.ord), n = es.length;
  const X = i => n <= 1 ? 600 : X0 + (X1 - X0) * i / (n - 1), hitR = Math.max(7, Math.min(16, (X1 - X0) / Math.max(n, 1) / 2));
  let ticks = "", nodes = "", twigs = "", lastYear = null, lastTick = -1e9, tk = 0;
  es.forEach((e, i) => {
    const x = +X(i).toFixed(1), yn = yearNum(e.y);
    if (yn !== Infinity && yn !== lastYear && x - lastTick > 46) { ticks += `<line class="tick" x1="${x}" y1="${GROUND + 12}" x2="${x}" y2="${GROUND + 24}"/><text class="yt" x="${x}" y="${GROUND + 42}" text-anchor="middle">${yn}</text>`; lastTick = x; }
    if (yn !== Infinity) lastYear = yn;
    const lab = n <= 16 ? `<text class="nlbl" transform="translate(${x + 4} ${GROUND - 20}) rotate(-38)">${esc(e.t)}</text>` : "";
    nodes += `<g class="node${S.watched[e.id] ? " seen" : ""}${e.id === detailId ? " sel" : ""}" data-id="${esc(e.id)}" tabindex="0" role="button" aria-label="${esc(e.t)}, set ${esc(e.y)}" style="--d:${intro ? Math.round(120 + i * Math.min(26, 520 / n)) : 0}ms">
      <circle class="hit" cx="${x}" cy="${GROUND}" r="${hitR.toFixed(1)}"/><circle class="ring" cx="${x}" cy="${GROUND}" r="7"/><circle class="core" cx="${x}" cy="${GROUND}" r="6"/>${lab}</g>`;
    // TVA-style: other timelines peel off the Sacred Timeline where Marvel's order slots them in
    if (u.id === "616") unis().filter(b => b.at === e.id).forEach(b => {
      const k = tk++, dir = x > 860 ? -1 : 1, h = 120 + k * 52, ex = x + dir * (110 + k * 26), end = dir > 0 ? Math.min(ex + 150, 1190) : Math.max(ex - 150, 10);
      twigs += `<g class="twigleaf" data-u="${esc(b.id)}" tabindex="0" role="button" aria-label="Open ${esc(b.name)}"><path class="fork" d="M${x} ${GROUND} C${x + dir * 50} ${GROUND}, ${x + dir * 50} ${GROUND - h}, ${ex} ${GROUND - h} L${end} ${GROUND - h}"/><circle class="core" cx="${ex}" cy="${GROUND - h}" r="5"/><text class="flbl" x="${ex + dir * 10}" y="${GROUND - h - 12}" text-anchor="${dir > 0 ? "start" : "end"}">${esc(b.name)}</text></g>`;
    });
  });
  const where = u.id === "616" ? "The Sacred Timeline, laid flat" : u.fork != null ? `Branched off the Sacred Timeline in ${u.fork}` : "A separate reality";
  $("#tree").innerHTML = `<defs><filter id="glow" filterUnits="userSpaceOnUse" x="-100" y="-200" width="1400" height="1400"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <radialGradient id="floorg"><stop offset="0" stop-color="#e8bb57" stop-opacity=".16"/><stop offset="1" stop-color="#e8bb57" stop-opacity="0"/></radialGradient></defs>
    <g class="focus${intro ? " intro" : ""}">
      <ellipse class="floor" cx="600" cy="${GROUND + 8}" rx="640" ry="80" fill="url(#floorg)"/>
      <g><path class="ground-glow" d="M${X0 - 60} ${GROUND} L${X1 + 60} ${GROUND}"/><path class="ground" d="M${X0 - 60} ${GROUND} L${X1 + 60} ${GROUND}"/><path class="ground flow" d="M${X0 - 60} ${GROUND} L${X1 + 60} ${GROUND}"/>${twigs}</g>
      ${ticks}${nodes}
      <text class="ftitle" x="60" y="150">${esc(u.name)}</text>
      <text class="fdes" x="60" y="180">${esc(u.des)} · ${esc(where)} · ${n} title${n === 1 ? "" : "s"}</text>
      <text class="fdes" x="60" y="${GROUND + 110}">Click a moment to plug it into the details panel.</text>
    </g>`;
}

/* ---------- energy transfer: a node fires and a beam carries it into the details panel ---------- */
// episode guide for series: collapsed by default so the card stays short; data lives in episodes.js
function epList(id, cls) {
  const eps = typeof EPS !== "undefined" && EPS[id];
  if (!eps) return "";
  const multi = eps.some(e => e[0] !== eps[0][0]);
  let s = "", season;
  for (const [se, n, t, b, still] of eps) {   // still: art/ep/<slug>-<season>x<episode>.webp exists
    if (multi && se !== season) { season = se; s += `<li class="ep-s">Season ${se}</li>`; }
    const pic = still ? `<img src="art/ep/${id}-${se}x${n}.webp" alt="" width="192" height="108" loading="lazy" decoding="async">` : "";
    s += `<li><span class="ep-n">${n}</span><span class="ep-st" aria-hidden="true">${pic}</span><div><b>${esc(t)}</b>${b ? `<p>${esc(b)}</p>` : ""}</div></li>`;
  }
  return `<details class="${cls}"><summary>Episodes <span>${eps.length}</span></summary><ol tabindex="0" aria-label="Episodes">${s}</ol></details>`;
}
// key-art banner shared by the details card and the TVA case file; data lives in episodes.js (ART).
// Each banner exists at 960 and 480 wide; the browser picks the smaller one wherever it is enough.
const ART_SIZES = {"dt-art":"(max-width:980px) calc(100vw - 46px), 40vw", "pp-photo":"(max-width:820px) calc(100vw - 40px), 32vw"};
let artKeep = null;   // the banner <img> being carried across a same-title redraw (see keepOpen)
const artImg = (id, cls) => !(typeof ART !== "undefined" && ART.has(id)) ? ""
  : artKeep ? `<div class="${cls}" data-art-slot></div>`
  : `<div class="${cls}"><img data-art src="art/${id}.webp" srcset="art/${id}-480.webp 480w, art/${id}.webp 960w" sizes="${ART_SIZES[cls]}" alt="" width="960" height="540" decoding="async"></div>`;
// Re-renders (marking watched, sync, typing a query) replace the markup. For the same title, keep the episode
// list open and move the already-decoded banner image into the new markup (artImg leaves an empty slot, so no
// second image is built or fetched); "fresh" marks a newly opened title, the only time the banner animates.
const keepOpen = (box, id, sel, render) => {
  const same = box.dataset.id === id, open = same && box.querySelector(sel)?.open;
  artKeep = same && box.querySelector("img[data-art]") || null;
  try { render(); } finally {
    if (artKeep) box.querySelector("[data-art-slot]")?.append(artKeep);
    artKeep = null;
  }
  box.dataset.id = id;
  box.classList.toggle("fresh", !same);
  if (open) box.querySelector(sel).open = true;
};

/* ---------- where to watch ---------- */
// Ranked services for the visitor's country: free, then subscription, then rent and buy (TMDB watch-provider
// data, powered by JustWatch, refreshed on every publish by build_watch.py). Loaded on first use only:
// watch/index.js once, then watch/<CC>.js for the chosen country. The country comes from the device's time
// zone, then its language region; the visitor can change it, and that choice is remembered on this device.
const WATCH_KEY = "mcu-watch-cc", jsLoads = {};
const loadJs = src => jsLoads[src] ||= new Promise((ok, fail) => {
  const s = document.createElement("script");
  s.src = src; s.onload = ok; s.onerror = () => { delete jsLoads[src]; s.remove(); fail(); };
  document.head.append(s);
});
let watchCC = null;
function guessCC() {
  const ok = c => c && WATCH.countries.includes(c);
  try { const c = localStorage.getItem(WATCH_KEY); if (ok(c)) return c; } catch {}
  const byZone = WATCH.tz[Intl.DateTimeFormat().resolvedOptions().timeZone];
  if (ok(byZone)) return byZone;
  for (const l of navigator.languages || []) { const r = l.split("-")[1]?.toUpperCase(); if (ok(r)) return r; }
  return ok("US") ? "US" : WATCH.countries[0];
}
const regionName = cc => { try { return new Intl.DisplayNames([navigator.language || "en"], {type:"region"}).of(cc) || cc; } catch { return cc; } };
const watchFailed = new Set();   // countries whose data file would not load this session
// the inside of the card's "Where to watch" block, or null until the service list (watch/index.js) is in.
// The country picker always shows once it is, so a visitor can always switch away from a country that fails.
function watchHtml(id) {
  if (typeof WATCH === "undefined" || !watchCC) return null;
  const e = entries(uni(S.sel)).find(x => x.id === id);
  // search the show, not "Show (Season 2)"; every What If...? episode lives under the series
  const q = e?.k === "E" ? "What If...?" : (e?.t || "").replace(/ \(Season \d+\)$/, "").replace(/ \(\d{4}\)$/, "").replace(/ \(series\)$/, "");
  const data = WATCH[watchCC], rows = data?.[id] || [], tm = WATCH.ids[id];
  const options = [...WATCH.countries].map(c => [c, regionName(c)]).sort((a, b) => a[1].localeCompare(b[1]))
    .map(([c, n]) => `<option value="${c}"${c === watchCC ? " selected" : ""}>${esc(n)}</option>`).join("");
  const list = rows.map(([p, k], i) => {
    const [name, tmpl, logo] = WATCH.providers[p];
    // only ever link out over https, whatever the data file says
    const href = /^https:\/\//.test(tmpl) ? tmpl.replace("{q}", encodeURIComponent(q)) : "https://www.google.com/search?q=" + encodeURIComponent(`${q} ${name}`);
    return `<li><a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${logo ? `<img src="watch/logo/${+p}.webp" alt="" width="28" height="28">` : ""}<span><b>${esc(name)}</b><small>${esc(WATCH.kinds[k] || "")}${i ? "" : " · best option"}</small></span></a></li>`;
  }).join("");
  const body = !data ? `<p class="w-none">${watchFailed.has(watchCC) ? `Couldn't load streaming options for ${esc(regionName(watchCC))}. Try another country.` : "Finding where to watch…"}</p>`
    : list ? `<ul class="w-list">${list}</ul>` : `<p class="w-none">Not available to stream in ${esc(regionName(watchCC))} right now.</p>`;
  const more = tm ? `<a href="https://www.themoviedb.org/${tm[0] === "m" ? "movie" : "tv"}/${+tm.slice(1)}/watch?locale=${esc(watchCC)}" target="_blank" rel="noopener noreferrer">More ways to watch</a> · ` : "";
  return `<div class="w-head"><b>Where to watch</b><select data-watch-cc aria-label="Country for streaming options">${options}</select></div>
    ${body}<p class="w-foot">${more}Data from JustWatch via TMDB</p>`;
}
// redraw the block in place, keeping keyboard focus on the country picker if it had it
function paintWatch(id) {
  const slot = document.querySelector(`#detail .dt-watch[data-id="${CSS.escape(id)}"]`), html = slot && watchHtml(id);
  if (!html) return;
  const focused = document.activeElement?.matches?.("#detail [data-watch-cc]");
  slot.innerHTML = html;
  if (focused) slot.querySelector("[data-watch-cc]")?.focus();
}
async function fillWatch(id) {
  try { await loadJs("watch/index.js"); }
  catch {   // offline or blocked: say so instead of "Finding…" forever; opening the card again retries
    const slot = document.querySelector(`#detail .dt-watch[data-id="${CSS.escape(id)}"]`);
    if (slot) slot.innerHTML = `<p class="w-none">Couldn't load streaming options. Check your connection, then open this title again.</p>`;
    return;
  }
  watchCC ||= guessCC();
  const cc = watchCC;
  paintWatch(id);                                              // picker + "Finding…" while the country file loads
  try { await loadJs(`watch/${cc}.js`); watchFailed.delete(cc); } catch { watchFailed.add(cc); }
  if (cc === watchCC) paintWatch(id);                          // the visitor may have picked another country meanwhile
}

function renderDetail() {
  const box = $("#detail"), u = uni(S.sel), all = entries(u), e = detailId && all.find(x => x.id === detailId);
  if (!e) { box.innerHTML = ""; delete box.dataset.id; return; }
  const pos = [...all].sort((a, b) => a.ord - b.ord).indexOf(e) + 1, seen = S.watched[e.id], soon = e.rel && e.rel > TODAY;
  const also = unis().filter(x => x.id !== u.id && entries(x).some(y => y.id === e.id));
  const ni = u.id === "616" ? NARRATIVE.items.findIndex(([t]) => t[0] !== "@" && slug(t) === e.id) : -1, nn = ni >= 0 ? NARRATIVE.items[ni] : null;
  keepOpen(box, e.id, ".dt-eps", () => box.innerHTML = `<div class="detail k-${e.k}${seen ? " seen" : ""}">
    ${artImg(e.id, "dt-art")}
    <div class="dt-top"><span class="kd"></span>${TYPE[e.k] || "Title"} · ${esc(u.name)}<button type="button" class="dt-x" data-act="close-detail" aria-label="Close details">×</button></div>
    <h3>${esc(e.t)}</h3>
    ${synOf(e.id) ? `<p class="dt-syn">${esc(synOf(e.id))}</p>` : ""}
    <dl class="dt-facts">
      <div><dt>Set</dt><dd${e.c === "e" ? ` class="est" title="Best estimate: no official date"` : ""}>${esc(e.y || "Unknown")}</dd></div>
      <div><dt>${soon ? "Out" : "Released"}</dt><dd>${fmtDate(e.rel)}</dd></div>
      <div><dt>Story order</dt><dd>${pos} of ${all.length}</dd></div>
      ${nn ? `<div><dt>Narrative order</dt><dd>#${ni + 1}${nn[1] ? " · optional" : ""}</dd></div>` : ""}
    </dl>
    ${nn && nn[2] ? `<p class="dt-note">${esc(nn[2])}</p>` : ""}
    ${also.length ? `<p class="dt-also">Also appears in ${also.map(x => `<button type="button" class="uchip" data-go="${esc(x.id)}">${esc(x.name)}</button>`).join(", ")}</p>` : ""}
    ${epList(e.id, "dt-eps")}
    <div class="dt-watch" data-id="${esc(e.id)}">${watchHtml(e.id) || `<p class="w-none">Finding where to watch…</p>`}</div>
    <div class="dt-act"><button class="btn ${seen ? "ghost" : "primary"}" type="button" data-act="watch" data-id="${esc(e.id)}">${seen ? "Watched ✓" : "Mark watched"}</button><button class="btn ghost" type="button" data-show="${esc(e.id)}">Show in list</button></div>
  </div>`);
  if (typeof WATCH === "undefined" || !watchCC || !WATCH[watchCC]) fillWatch(e.id);
}

function showInList(id) {
  const e = entries(uni(S.sel)).find(x => x.id === id);
  if (e && unhide(e)) renderPanel();
  const li = document.querySelector(`li.e[data-id="${CSS.escape(id)}"]`);
  if (li) { li.scrollIntoView({behavior:"smooth", block:"center"}); li.classList.remove("flash"); void li.offsetWidth; li.classList.add("flash"); li.querySelector(".eye").focus({preventScroll:true}); }
}

let beamN = 0;
function beam(fromEl, toEl) {
  const k = ++beamN, a = fromEl.getBoundingClientRect(), b = toEl.getBoundingClientRect(), svg = $("#beam");
  const p0 = {x:a.left + a.width / 2, y:a.top + a.height / 2}, right = b.left > p0.x + 40;
  const p3 = right ? {x:b.left + 2, y:b.top + Math.min(44, b.height / 2)} : {x:b.left + b.width / 2, y:b.top + 2};
  const c1 = right ? {x:p0.x + (p3.x - p0.x) * .35, y:p0.y - 140} : {x:p0.x, y:p0.y + 140};
  const c2 = right ? {x:p3.x - 120, y:p3.y} : {x:p3.x, y:p3.y - 140};
  const d = `M${p0.x} ${p0.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${p3.x} ${p3.y}`;
  svg.setAttribute("viewBox", `0 0 ${innerWidth} ${innerHeight}`);
  svg.innerHTML = `<path class="b-glow" d="${d}"/><path class="b-core" d="${d}"/><circle class="b-spark" r="5" cx="${p0.x}" cy="${p0.y}"/>`;
  svg.style.opacity = 1; svg.hidden = false;
  const core = svg.querySelector(".b-core"), glow = svg.querySelector(".b-glow"), spark = svg.querySelector(".b-spark"), L = core.getTotalLength();
  [core, glow].forEach(p => { p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
  return tween(560, t => {
    core.style.strokeDashoffset = glow.style.strokeDashoffset = L * (1 - t);
    const pt = core.getPointAtLength(L * t);
    spark.setAttribute("cx", pt.x); spark.setAttribute("cy", pt.y);
  }).then(() => { tween(380, t => { if (k === beamN) svg.style.opacity = 1 - t; }).then(() => { if (k === beamN) svg.hidden = true; }); });
}

let plugGen = 0;
async function plugIn(id) {
  const g = ++plugGen;   // a newer click takes over; an older animation just stops
  detailId = id;
  document.querySelectorAll("#tree .node.sel").forEach(n => n.classList.remove("sel"));
  const node = view === "branch" ? document.querySelector(`#tree .node[data-id="${CSS.escape(id)}"]`) : null;
  renderDetail();
  const card = $("#detail .detail");
  if (node) { node.classList.add("sel"); node.classList.remove("fire"); void node.getBoundingClientRect(); node.classList.add("fire"); }
  if (card) {
    const r = card.getBoundingClientRect();
    if (r.top < 70 || r.bottom > innerHeight - 10) { card.scrollIntoView({behavior:REDUCED ? "auto" : "smooth", block:"center"}); await sleep(REDUCED ? 0 : 450); }
    if (node && !REDUCED && g === plugGen) { await sleep(180); if (g === plugGen) await beam(node.querySelector(".core"), card); }
    if (g === plugGen) { card.classList.remove("charged"); void card.offsetWidth; card.classList.add("charged"); }
  }
  setTimeout(() => node?.classList.remove("fire"), 700);
}

$("#tree").addEventListener("click", e => {
  if (animating) return;
  const n = e.target.closest(".node");
  if (n) { plugIn(n.dataset.id); return; }
  const g = e.target.closest("[data-u]");
  if (g) select(g.dataset.u);
});
$("#tree").addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const n = e.target.closest(".node"), g = e.target.closest("[data-u]");
  if (n) { e.preventDefault(); plugIn(n.dataset.id); }
  else if (g) { e.preventDefault(); select(g.dataset.u); }
});
$("#tl").addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches("li.e .t")) { e.preventDefault(); plugIn(e.target.closest("li.e").dataset.id); }
});
$("#back").addEventListener("click", exitBranch);
// the tooltip follows the pointer with a transform (compositor only, no layout), and only rewrites its
// text when it points at something new
const showTip = (html, e) => {
  const r = stage.getBoundingClientRect(), x = Math.min(Math.max(e.clientX - r.left, 120), r.width - 120), y = e.clientY - r.top;
  if (tip.dataset.h !== html) { tip.innerHTML = html; tip.dataset.h = html; }
  tip.style.transform = `translate(${x}px,${y}px) translate(-50%,calc(-100% - 16px))`;
  tip.hidden = false;
};
$("#tree").addEventListener("pointermove", e => {
  const nd = e.target.closest(".node");
  if (nd && e.pointerType !== "touch") {
    const en = entries(uni(S.sel)).find(x => x.id === nd.dataset.id);
    return showTip(`<b>${esc(en.t)}</b><span>${TYPE[en.k] || "Title"} · set ${esc(en.y)}${S.watched[en.id] ? " · watched" : ""}</span>`, e);
  }
  const g = e.target.closest(".leaf");
  if (!g || e.pointerType === "touch") { tip.hidden = true; return; }
  const u = uni(g.dataset.u), [n, w] = stats(u);
  showTip(`<b>${esc(u.name)}</b><span>${esc(u.des)} · ${n} title${n === 1 ? "" : "s"} · ${w} watched</span>`, e);
});
$("#tree").addEventListener("pointerleave", () => tip.hidden = true);
$("#uSel").addEventListener("change", e => select(e.target.value));
$("#detail").addEventListener("change", e => {
  if (!e.target.matches("[data-watch-cc]")) return;
  watchCC = e.target.value;
  try { localStorage.setItem(WATCH_KEY, watchCC); } catch {}
  fillWatch(detailId);
});
$("#mode").addEventListener("click", e => { const m = e.target.dataset.mode; if (m) { S.mode = m; renderPanel(); } });
$("#f-seen").addEventListener("change", e => { S.hideSeen = e.target.checked; renderPanel(); });
$("#kind").addEventListener("click", e => { const k = e.target.closest("[data-kind]")?.dataset.kind; if (k) { S.kind = k; renderPanel(); } });
$("#start").addEventListener("click", () => { select("616"); stage.scrollIntoView({behavior:"smooth"}); });
document.querySelectorAll("[data-pal]").forEach(b => b.addEventListener("click", openPal));
document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.open ? pal.close() : openPal(); return; }
  if (pal.open || e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if (e.key === "Escape" && view === "branch") { exitBranch(); return; }
  if (e.key === "/") { e.preventDefault(); openPal(); }
  else if (["1", "2", "3", "4"].includes(e.key)) { S.mode = ["story", "release", "my", "narrative"][+e.key - 1]; renderPanel(); }
});

$("#addT").addEventListener("submit", e => {
  e.preventDefault();
  const t = $("#t-t").value.trim();
  if (!t) return;
  withUndo(`Added “${t}”`, () => (S.cItems[S.sel] ||= []).push({id:"c" + Date.now(), t, k:$("#t-k").value, rel:$("#t-rel").value, y:$("#t-y").value.trim()}));
  e.target.reset();
});
$("#addU").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#u-n").value.trim();
  if (!name) return;
  const f = $("#u-f").value.trim(), id = "u" + Date.now();
  act(() => S.cUnis.push({id, limb:"Your universes", name, label:name.slice(0, 18), des:$("#u-d").value.trim() || "Unnumbered", fork:f ? +f : null, note:$("#u-note").value.trim(), items:[]}));
  e.target.reset();
  select(id);
  toast(`“${name}” is growing on the tree`);
});

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) { select(go.dataset.go); return; }
  const sh = e.target.closest("[data-show]");
  if (sh) { showInList(sh.dataset.show); return; }
  const tt = e.target.closest("li.e .t");
  if (tt && !e.target.closest("form")) { plugIn(tt.closest("li.e").dataset.id); return; }
  const b = e.target.closest("[data-act]");
  if (!b || b.tagName === "FORM") return;
  const a = b.dataset.act, id = b.dataset.id || b.closest("li.e")?.dataset.id, key = S.sel + ":" + id;
  const title = () => entries(uni(S.sel)).find(x => x.id === id)?.t || "Title";
  if (a === "watch") {
    const on = !S.watched[id], fromNext = !!b.dataset.id;
    withUndo(on ? `Marked “${title()}” watched` : `Unmarked “${title()}”`, () => { on ? S.watched[id] = true : delete S.watched[id]; },
      fromNext ? (b.closest("#detail") ? "#detail [data-act=watch]" : "#next .btn") : `li.e[data-id="${CSS.escape(id)}"] .eye`);
  }
  else if (a === "close-detail") { detailId = null; renderDetail(); document.querySelectorAll("#tree .node.sel").forEach(n => n.classList.remove("sel")); }
  else if (a === "up" || a === "down") {
    const i = visible.indexOf(id), ref = visible[a === "up" ? i - 1 : i + 1];
    if (ref) { act(() => moveTo(S.order[S.sel], id, ref, a === "down")); renderPanel(`[data-id="${CSS.escape(id)}"] [data-act="${a}"]:not([disabled])`); }
  }
  else if (a === "edit") { editing = editing === id ? null : id; renderPanel(`[data-id="${CSS.escape(id)}"] .in`); }
  else if (a === "cancel") { editing = null; renderPanel(); }
  else if (a === "del") {
    withUndo(`Removed “${title()}”`, () => {
      const mine = S.cItems[S.sel] || [];
      if (mine.some(x => x.id === id)) S.cItems[S.sel] = mine.filter(x => x.id !== id);
      else S.removed.push(key);
      delete S.edits[key];
    });
  }
  else if (a === "restore") { withUndo("Restored removed titles", () => { S.removed = S.removed.filter(k => !k.startsWith(S.sel + ":")); }); }
  else if (a === "reset" || a === "delu") { confirming = a === "reset" ? "reset" : "u"; renderPanel('[data-act="cancel-c"]'); }
  else if (a === "cancel-c") { confirming = null; renderPanel(); }
  else if (a === "reset-yes") {
    const old = act(() => fromMap({}, S));
    Object.assign(S, {mode:"story", kind:"all", hideSeen:false}); confirming = null; select("616"); toast("Sandbox reset", old);
  }
  else if (a === "delu-yes") {
    const u = S.sel, old = act(() => {
      S.cUnis = S.cUnis.filter(x => x.id !== u);
      delete S.cItems[u]; delete S.order[u];
      S.removed = S.removed.filter(k => !k.startsWith(u + ":"));
    });
    confirming = null;
    select("616");
    toast("Universe deleted", old);
  }
});

document.addEventListener("submit", e => {
  if (e.target.dataset.act !== "save") return;
  e.preventDefault();
  const id = e.target.closest("li.e").dataset.id, f = new FormData(e.target), t = f.get("t").trim();
  if (!t) return;
  editing = null;
  withUndo("Saved", () => { S.edits[S.sel + ":" + id] = {t, y:f.get("y").trim()}; });
});

// drag to reorder (Mine only)
let dragId = null;
const tl = $("#tl");
const clearOver = () => tl.querySelectorAll(".over-top,.over-bot").forEach(n => n.classList.remove("over-top", "over-bot"));
tl.addEventListener("dragstart", e => { const li = e.target.closest("li.e"); if (!li || S.mode !== "my") return; dragId = li.dataset.id; e.dataTransfer.setData("text/plain", dragId); e.dataTransfer.effectAllowed = "move"; });
tl.addEventListener("dragover", e => {
  const li = e.target.closest("li.e");
  if (!dragId || !li || li.dataset.id === dragId) return;
  e.preventDefault();
  const r = li.getBoundingClientRect();
  clearOver(); li.classList.add(e.clientY > r.top + r.height / 2 ? "over-bot" : "over-top");
});
tl.addEventListener("drop", e => {
  const li = e.target.closest("li.e");
  if (!dragId || !li || li.dataset.id === dragId) return;
  e.preventDefault();
  act(() => moveTo(S.order[S.sel], dragId, li.dataset.id, li.classList.contains("over-bot")));
  dragId = null; renderPanel();
});
tl.addEventListener("dragend", () => { dragId = null; clearOver(); });

// first paint: the tree grows up out of the End of Time, once per page load
if (!REDUCED) { $("#tree").classList.add("grow"); setTimeout(() => $("#tree").classList.remove("grow"), 3600); }
$("#sky").innerHTML = STARS;
renderAll();

// phones: start the sideways-scrolling tree centred on the trunk
if (stage.scrollWidth > stage.clientWidth) stage.scrollLeft = (stage.scrollWidth - stage.clientWidth) / 2;

// Another tab saved: take its changes entry by entry (state.js merge), keeping this tab's own view.
// Only when both belong to the same account: during an account switch a tab may still hold the old one's.
addEventListener("storage", e => {
  if (e.key !== KEY || !e.newValue) return;
  let r; try { r = clean(JSON.parse(e.newValue)); } catch { return; }
  if (r.owner === S.owner && merge(S, r).changed) { editing = null; if (!uni(S.sel)) S.sel = "616"; renderAll(); }
});
// the date moves on at midnight, and release-day labels with it
setInterval(() => { const d = localDay(); if (d !== TODAY) { TODAY = d; renderAll(); } }, 60e3);

// hooks for sync.js (optional Google sign-in)
window.mcuApp = {
  get: () => S,
  // the cloud copy: what this visitor changed, with stamps
  synced: () => synced(S),
  // merge a cloud copy in; true when this device has changes the cloud lacks
  merge(raw) { const {changed, ahead} = merge(S, clean(raw, 2)); if (changed) { editing = null; if (!uni(S.sel)) S.sel = "616"; renderAll(); } return ahead; },
  // An account signed in. If this browser's progress belongs to a different account, it is cleared, so the new
  // account starts from its own cloud copy (true is returned). Progress made before anyone signed in here joins it.
  // was: the account older versions remembered in their own key, used once.
  claim(uid, was) {
    if (!S.owner && was) S.owner = was;
    const other = !!S.owner && S.owner !== uid;
    if (other) { fromMap({}, S); S.stamps = {}; editing = null; if (!uni(S.sel)) S.sel = "616"; }
    S.owner = uid;
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {}   // written first, so save() can't merge the old account back in
    if (other) renderAll();
    return other;
  },
  toast,
  onSave: null,
};
