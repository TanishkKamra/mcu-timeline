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
    ["Avengers: Doomsday","F","2026-12-18","2028","o"],
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
const TODAY = new Date().toISOString().slice(0, 10);
const MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
document.querySelectorAll(".kk").forEach(k => k.textContent = MAC ? "⌘K" : "Ctrl K");

const KEY = "mcu-yggdrasil-v2";
const DEF = () => ({sel:"616", mode:"story", hideSeen:false, watched:{}, edits:{}, removed:[], order:{}, cItems:{}, cUnis:[]});
let S;
try { S = {...DEF(), ...JSON.parse(localStorage.getItem(KEY) || "{}")}; } catch { S = DEF(); }
const hash = decodeURIComponent(location.hash.slice(1));
let editing = null, confirming = null;
// what syncs to the cloud: progress and edits, not view settings
const syncData = s => JSON.stringify([s.watched, s.edits, s.removed, s.order, s.cItems, s.cUnis]);
let lastData = syncData(S);
const save = () => {
  const d = syncData(S);
  if (d !== lastData) { lastData = d; S.updatedAt = Date.now(); window.mcuApp?.onSave?.(); }
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {}
};
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "");
const yearNum = y => { const m = String(y).match(/\d{4}/); return m ? +m[0] : Infinity; };
const fmtDate = d => d ? new Date(d + "T00:00").toLocaleDateString(undefined, {year:"numeric",month:"short",day:"numeric"}) : "Unreleased";
const unis = () => UNIS.concat(S.cUnis);
const uni = id => unis().find(u => u.id === id);
if (uni(hash)) S.sel = hash;

function entries(u) {
  const base = (u.items || []).map(([t, k, rel, y, c, f], ord) => ({id:slug(t), t, k, rel, y, c, f, ord, base:true}))
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
const TRUNK = (() => {
  let s = "";
  for (let k = 0; k < 7; k++) {
    let d = "";
    for (let y = BASE_Y; y >= CY - 8; y -= 8) {
      const t = (BASE_Y - y) / (BASE_Y - CY), w = 34 * (1 - t) + 7;
      d += (d ? "L" : "M") + (CX + w * Math.sin(t * 8 + k * 0.9)).toFixed(1) + " " + y + " ";
    }
    s += `<path d="${d}"/>` + (k % 3 ? "" : `<path class="flow" d="${d}" style="animation-delay:-${k}s"/>`);
  }
  for (const dx of [-230, -150, -80, -25, 40, 110, 180, 240]) s += `<path d="M${CX} ${BASE_Y - 10} Q${CX + dx * .3} ${BASE_Y + 30} ${CX + dx} ${BASE_Y + 40}"/>`;
  return s;
})();

const curve = (p0, c1, c2, p3, flow) => {
  let s = "";
  for (const o of [-5, 0, 5]) s += `<path d="M${p0.x} ${p0.y} C${c1.x + o} ${c1.y},${c2.x} ${c2.y + o},${p3.x} ${p3.y}"/>`;
  return s + (flow ? `<path class="flow" d="M${p0.x} ${p0.y} C${c1.x} ${c1.y},${c2.x} ${c2.y},${p3.x} ${p3.y}"/>` : "");
};
const cls = ids => ids.includes(S.sel) ? "on" : S.sel === "616" ? "" : "dim";

function leaf(u, x, y, label, st) {
  const [n, w] = st, r = 4 + Math.min(5, Math.sqrt(n) * 1.1), rr = r + 5, C = 2 * Math.PI * rr;
  return `<g class="leaf${u.id === S.sel ? " on" : ""}" data-u="${esc(u.id)}" tabindex="0" role="button" aria-label="${esc(u.name)}, ${w} of ${n} watched" aria-pressed="${u.id === S.sel}">
    <circle class="hit" cx="${x}" cy="${y}" r="22"/>
    ${w ? `<circle class="ring-bg" cx="${x}" cy="${y}" r="${rr}"/><circle class="ring" cx="${x}" cy="${y}" r="${rr}" stroke-dasharray="${(w / n * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 ${x} ${y})"/>` : ""}
    <circle class="dot" cx="${x}" cy="${y}" r="${r.toFixed(1)}"/>${label}</g>`;
}
const flatLabel = (u, x, y, anchor) => `<text x="${x}" y="${y}" text-anchor="${anchor}"><tspan class="lbl">${esc(u.label || u.name)}</tspan><tspan class="des" x="${x}" dy="17">${esc(u.des)}</tspan></text>`;

function renderTree() {
  const ST = Object.fromEntries(unis().map(u => [u.id, stats(u)]));
  let br = "", nodes = "";
  // crown: limbs radiate from the top of the trunk, universes fan out on an arc
  const groups = LIMBS.map(l => ({l, us:unis().filter(u => u.limb === l)})).filter(g => g.us.length);
  const slots = groups.reduce((n, g) => n + g.us.length, 0) + groups.length - 1;
  // ponytail: one arc of fixed slots; past ~30 universes the labels start to crowd
  const step = 172 / Math.max(slots - 1, 1);
  let slot = 0;
  groups.forEach(g => {
    const angles = g.us.map(() => -176 + step * slot++);
    slot++;
    const ha = angles.reduce((a, b) => a + b, 0) / angles.length, hub = polar(HUB, ha);
    let limb = curve({x:CX, y:CY + 30}, {x:CX, y:CY - 90}, polar(HUB - 80, ha), hub, true);
    g.us.forEach((u, i) => {
      const a = angles[i], p = polar(R, a);
      limb += `<g class="${cls([u.id])}">${curve(hub, polar(HUB + 70, ha), polar(R - 90, a), p, false)}</g>`;
      const lp = polar(R + 18, a), left = a < -90, rot = (left ? a + 180 : a).toFixed(1);
      nodes += leaf(u, p.x, p.y, `<text transform="translate(${lp.x} ${lp.y}) rotate(${rot})" text-anchor="${left ? "end" : "start"}"><tspan class="lbl" y="-2">${esc(u.label || u.name)}</tspan><tspan class="des" x="0" dy="15">${esc(u.des)}</tspan></text>`, ST[u.id]);
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
  br += `<g class="${cls(["whatif"])}">${twigs}${curve({x:CX, y:880}, {x:CX - 60, y:882}, {x:420, y:895}, {x:350, y:880}, false)}${dots}</g>`;
  nodes += leaf(wi, 350, 880, flatLabel(wi, 328, 876, "end"), ST.whatif);

  // branched timelines with a single fork year
  [["tva", -1, 330, 720], ["zombies", 1, 870, 700]].forEach(([id, side, x, y]) => {
    const u = uni(id), fy = forkY(u.fork);
    br += `<g class="${cls([id])}">${curve({x:CX, y:fy}, {x:CX + side * 90, y:fy - 4}, {x:x - side * 120, y:y + 30}, {x, y}, true)}</g>`;
    nodes += leaf(u, x, y, flatLabel(u, x + side * 22, y - 4, side < 0 ? "end" : "start"), ST[id]);
  });

  const trunk = uni("616");
  $("#tree").innerHTML = `<defs><filter id="glow" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="throne"><stop offset="0" stop-color="#e8bb57" stop-opacity=".5"/><stop offset="1" stop-color="#e8bb57" stop-opacity="0"/></radialGradient></defs>
    ${STARS}
    <ellipse cx="${CX}" cy="${BASE_Y + 20}" rx="160" ry="44" fill="url(#throne)"/>
    <g class="tree" filter="url(#glow)"><g class="${cls(["616"])}">${TRUNK}</g>${br}</g>
    <text class="base" x="${CX}" y="${BASE_Y + 46}" text-anchor="middle">THE END OF TIME</text>
    ${leaf(trunk, CX, 905, flatLabel(trunk, CX + 54, 901, "start"), ST["616"])}${nodes}`;
}

/* ---------- panel ---------- */
let visible = [];
const CHECK = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5"/></svg>`;

function card(e, i, n, my) {
  const seen = S.watched[e.id], soon = e.rel && e.rel > TODAY;
  return `<li class="e k-${e.k}${seen ? " seen" : ""}" data-id="${esc(e.id)}" draggable="${my}">
    <div class="row">
      <button type="button" class="eye" data-act="watch" aria-pressed="${!!seen}" aria-label="${seen ? "Watched" : "Mark watched"}: ${esc(e.t)}">${CHECK}</button>
      <div><div class="t">${e.num ? `<span class="yv">${e.num}.</span> ` : my ? `<span class="yv">${i + 1}.</span> ` : ""}${esc(e.t)}</div>
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
  $("#meter").innerHTML = `<i><b style="width:${ids.size ? w / ids.size * 100 : 0}%"></b></i><span>${w ? `${w} of ${ids.size} watched across the multiverse` : "Nothing watched yet. Your progress shows up on the tree."}</span>`;
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

  // up next: first unwatched, released title in story order
  const seen = all.filter(e => S.watched[e.id]).length, p = all.length ? seen / all.length : 0;
  const narr = S.mode === "narrative" && u.id === "616";
  const seq = narr ? NARRATIVE.items.filter(([r]) => r[0] !== "@").map(([t]) => all.find(e => e.id === slug(t))).filter(Boolean) : [...all].sort((a, b) => a.ord - b.ord);
  const nx = seq.find(e => !S.watched[e.id] && !(e.rel && e.rel > TODAY));
  $("#next").innerHTML = nx
    ? `<div class="next k-${nx.k}">${ring(p, Math.round(p * 100) + "%")}<div><small>${seen ? "Up next" : "Start here"} · ${seen} of ${all.length} watched</small><strong>${esc(nx.t)}</strong>
        <div class="sub"><span class="kd"></span>${TYPE[nx.k]} · set ${esc(nx.y)}</div></div>
        <button class="btn primary" type="button" data-act="watch" data-id="${esc(nx.id)}">Mark watched</button></div>`
    : all.length ? `<div class="next">${ring(1, "100%")}<div><small>Universe complete</small><strong>You've seen everything here.</strong><div class="sub">Pick another branch on the tree.</div></div></div>` : "";

  document.querySelectorAll("#mode button").forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === S.mode));
  $("#f-seen").checked = S.hideSeen;
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
      if (!(S.hideSeen && S.watched[e.id])) html += card({...e, num:n, opt, note}, 0, 0, false);
    });
    const rest = all.filter(e => !placed.has(e.id) && !(S.hideSeen && S.watched[e.id])).sort((a, b) => a.ord - b.ord);
    if (rest.length) html += `<li class="yr">Not placed in this order</li>` + rest.map(e => card(e, 0, 0, false)).join("");
    visible = [];
  } else {
  const list = all.filter(e => !(S.hideSeen && S.watched[e.id])).sort(
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

  const removedHere = S.removed.filter(k => k.startsWith(u.id + ":")).length;
  $("#foot").innerHTML = (removedHere ? `<button class="btn ghost" type="button" data-act="restore">Restore ${removedHere} removed</button>` : "")
    + (confirming === "reset"
      ? `Erase every edit, added universe and watch mark? <button class="btn warn" type="button" data-act="reset-yes">Erase</button><button class="btn ghost" type="button" data-act="cancel-c">Keep</button>`
      : `<button class="btn ghost" type="button" data-act="reset">Reset sandbox</button>`);

  renderHero();
  save();
  if (focusSel) document.querySelector(focusSel)?.focus();
}

const renderAll = f => { renderTree(); renderPanel(f); };
function select(id, scroll = true) {
  S.sel = id; editing = null; confirming = null;
  try { history.replaceState(null, "", "#" + id); } catch {}
  renderAll();
  if (scroll && matchMedia("(max-width:980px)").matches) $(".panel").scrollIntoView({behavior:"smooth"});
}

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
$("#undo").addEventListener("click", () => { if (undoSnap) { S = JSON.parse(undoSnap); renderAll(); } $("#toast").hidden = true; });
const withUndo = (msg, fn, focusSel) => { const snap = JSON.stringify(S); fn(); renderAll(focusSel); toast(msg, snap); };

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
  if (S.hideSeen && S.watched[it.e.id]) S.hideSeen = false;
  select(it.u.id, false);
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
$("#tree").addEventListener("click", e => { const g = e.target.closest(".leaf"); if (g) select(g.dataset.u); });
$("#tree").addEventListener("keydown", e => {
  const g = e.target.closest(".leaf");
  if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); select(g.dataset.u); document.querySelector(`.leaf[data-u="${CSS.escape(g.dataset.u)}"]`)?.focus(); }
});
$("#tree").addEventListener("pointermove", e => {
  const g = e.target.closest(".leaf");
  if (!g || e.pointerType === "touch") { tip.hidden = true; return; }
  const u = uni(g.dataset.u), [n, w] = stats(u), r = stage.getBoundingClientRect();
  tip.innerHTML = `<b>${esc(u.name)}</b><span>${esc(u.des)} · ${n} title${n === 1 ? "" : "s"} · ${w} watched</span>`;
  tip.style.left = Math.min(Math.max(e.clientX - r.left, 120), r.width - 120) + "px";
  tip.style.top = e.clientY - r.top + "px";
  tip.hidden = false;
});
$("#tree").addEventListener("pointerleave", () => tip.hidden = true);
$("#uSel").addEventListener("change", e => select(e.target.value));
$("#mode").addEventListener("click", e => { const m = e.target.dataset.mode; if (m) { S.mode = m; renderPanel(); } });
$("#f-seen").addEventListener("change", e => { S.hideSeen = e.target.checked; renderPanel(); });
$("#start").addEventListener("click", () => { select("616", false); const b = $("#next .btn"); b?.scrollIntoView({behavior:"smooth", block:"center"}); b?.focus({preventScroll:true}); });
document.querySelectorAll("[data-pal]").forEach(b => b.addEventListener("click", openPal));
document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.open ? pal.close() : openPal(); return; }
  if (pal.open || e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
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
  S.cUnis.push({id, limb:"Your universes", name, label:name.slice(0, 18), des:$("#u-d").value.trim() || "Unnumbered", fork:f ? +f : null, note:$("#u-note").value.trim(), items:[]});
  e.target.reset();
  select(id);
  toast(`“${name}” is growing on the tree`);
});

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) { select(go.dataset.go); return; }
  const b = e.target.closest("[data-act]");
  if (!b || b.tagName === "FORM") return;
  const act = b.dataset.act, id = b.dataset.id || b.closest("li.e")?.dataset.id, key = S.sel + ":" + id;
  const title = () => entries(uni(S.sel)).find(x => x.id === id)?.t || "Title";
  if (act === "watch") {
    const on = !S.watched[id], fromNext = !!b.dataset.id;
    withUndo(on ? `Marked “${title()}” watched` : `Unmarked “${title()}”`, () => { on ? S.watched[id] = true : delete S.watched[id]; },
      fromNext ? "#next .btn" : `li.e[data-id="${CSS.escape(id)}"] .eye`);
  }
  else if (act === "up" || act === "down") {
    const i = visible.indexOf(id), ref = visible[act === "up" ? i - 1 : i + 1];
    if (ref) { moveTo(S.order[S.sel], id, ref, act === "down"); renderPanel(`[data-id="${CSS.escape(id)}"] [data-act="${act}"]:not([disabled])`); }
  }
  else if (act === "edit") { editing = editing === id ? null : id; renderPanel(`[data-id="${CSS.escape(id)}"] .in`); }
  else if (act === "cancel") { editing = null; renderPanel(); }
  else if (act === "del") {
    withUndo(`Removed “${title()}”`, () => {
      const mine = S.cItems[S.sel] || [];
      if (mine.some(x => x.id === id)) S.cItems[S.sel] = mine.filter(x => x.id !== id);
      else S.removed.push(key);
      delete S.edits[key];
    });
  }
  else if (act === "restore") { withUndo("Restored removed titles", () => { S.removed = S.removed.filter(k => !k.startsWith(S.sel + ":")); }); }
  else if (act === "reset" || act === "delu") { confirming = act === "reset" ? "reset" : "u"; renderPanel('[data-act="cancel-c"]'); }
  else if (act === "cancel-c") { confirming = null; renderPanel(); }
  else if (act === "reset-yes") { const snap = JSON.stringify(S); S = DEF(); confirming = null; select("616", false); toast("Sandbox reset", snap); }
  else if (act === "delu-yes") {
    const snap = JSON.stringify(S), u = S.sel;
    S.cUnis = S.cUnis.filter(x => x.id !== u);
    delete S.cItems[u]; delete S.order[u];
    S.removed = S.removed.filter(k => !k.startsWith(u + ":"));
    confirming = null;
    select("616", false);
    toast("Universe deleted", snap);
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
  moveTo(S.order[S.sel], dragId, li.dataset.id, li.classList.contains("over-bot"));
  dragId = null; renderPanel();
});
tl.addEventListener("dragend", () => { dragId = null; clearOver(); });

renderAll();

// phones: start the sideways-scrolling tree centred on the trunk
if (stage.scrollWidth > stage.clientWidth) stage.scrollLeft = (stage.scrollWidth - stage.clientWidth) / 2;

// hooks for sync.js (optional Google sign-in)
window.mcuApp = {
  get: () => S,
  set(s) { S = {...DEF(), ...s}; editing = null; confirming = null; lastData = syncData(S); renderAll(); },
  toast,
  onSave: null,
};
