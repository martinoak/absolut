const bottleData = [
    {
        "name": "Blue",
        "filter": "Standard & Flavours",
        "since": 2021,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Minimal and clear restyling of the iconic Absolut Vodka bottle. After more than 50 years the text on the bottle is replaced with handwritten \"Swedish vodka\". \"Country of Sweden\" is engraved on the bottle and a label shows the information and L.O. Smith signature. In the backside there is the illustration of Åhus village.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/absolut-blue-label-2021-1.jpg"
    },
    {
        "name": "100 (2022 Design)",
        "filter": "Standard & Flavours",
        "since": 2022,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "2022 version of Absolut 100. Black bottle with 50% alc./vol. 100 proof vodka.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/08/100_21.jpg"
    },
    {
        "name": "72 Bian 变",
        "filter": "Limited Edition",
        "since": 2010,
        "distribution": "China, Singapore & Malaysia",
        "numberOfBottles": "350 000",
        "designer": "Gao Yu",
        "description": "Inspired by an ancient Chinese fable, \"Journey to the West,\" a heroic story about the monkey king Sun Wukong, who acquires the power to undergo 72 transformations (or 72 bian).",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2024/08/bian.jpg"
    },
    {
        "name": "Åhus",
        "filter": "International Cities & Countries",
        "since": 2019,
        "distribution": "Sweden",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Limited edition celebrating Åhus, the birthplace of Absolut Vodka in southern Sweden.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/ahus.jpg"
    },
    {
        "name": "Amber",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "200 000",
        "designer": "",
        "description": "Absolut Amber is a limited edition oak-aged vodka with a warm amber color and smooth, rich taste. Aged in oak barrels, it offers notes of vanilla, caramel and dried fruit.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/amber.jpg"
    },
    {
        "name": "America #1 - United",
        "filter": "Limited Edition",
        "since": 2016,
        "distribution": "USA",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Designed in red and white stripes and blue rectangle resembling the American Flag. The bottle represents unity.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/america1_1000-1.jpg.webp"
    },
    {
        "name": "America #2",
        "filter": "City series",
        "since": 2019,
        "distribution": "USA",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Upgraded and redesigned with the American Flag colors of red, white and blue, it depicts a modern American Flag and is in celebration of July 4th, Independence Day. The bottle is proudly labeled ABSOLUT AMERICA in white lettering.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/america2_1000.jpg"
    },
    {
        "name": "Be The Thunder",
        "filter": "Second Skin",
        "since": 2019,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "A metallic silver second skin with lightning bolt design, released as a limited edition.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/be-the-thunder.jpg.webp"
    },
    {
        "name": "Beirut",
        "filter": "Paper Wrap",
        "since": 2019,
        "distribution": "Lebanon",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Paper wrap edition featuring Beirut city design.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/beirut-1.jpg.webp"
    },
    {
        "name": "Berlin",
        "filter": "International Cities & Countries",
        "since": 2014,
        "distribution": "Germany, Austria, Switzerland",
        "numberOfBottles": "300 000",
        "designer": "Zhivago Duncan",
        "description": "The Fernsehturm TV tower, a relic of a once divided city, stands over the city of Berlin. In the nearly 25 years since East and West Berlin unified, this icon which once represented a controlled message of a dismantled government, now stands for a city defined by artistic freedom and creative discovery.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/berlin.jpg"
    },
    {
        "name": "Blank #1 (Mario Wagner)",
        "filter": "Limited Edition",
        "since": 2011,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "Mario Wagner",
        "description": "Absolut Blank Edition #1 by Mario Wagner. Part of the Absolut Blank campaign where artists were given a blank Absolut bottle as their canvas.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/blank1.jpg"
    },
    {
        "name": "Blank #2 (Dave Kinsey)",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Europe",
        "numberOfBottles": "Unknown",
        "designer": "Dave Kinsey",
        "description": "Absolut Vodka Blank Edition by Dave Kinsey features an explosion of bright colors and darker-hued washes that reveal Kinsey's roots as a street artist while highlighting his extraordinary fine art skill.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/blank2.jpg"
    },
    {
        "name": "Blank #3 (Woodkid)",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Europe",
        "numberOfBottles": "Unknown",
        "designer": "Woodkid",
        "description": "Absolut Blank Edition #3 by Woodkid (Yoann Lemoine). A black and white design featuring intricate illustrations.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/blank3.jpg"
    },
    {
        "name": "Boston",
        "filter": "City series",
        "since": 2009,
        "distribution": "USA",
        "numberOfBottles": "200 000",
        "designer": "Unknown",
        "description": "Absolut Boston is the third in the company’s ‘Cities’ range, following Absolut New Orleans and Absolut Brooklyn. A special limited-edition litre bottle of Absolut Boston, which has been flavoured with an intriguing combination of black tea and elderflower.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/absolut-boston.jpg.webp"
    },
    {
        "name": "Brooklyn",
        "filter": "Limited Edition",
        "since": 2010,
        "distribution": "USA",
        "numberOfBottles": "225 000",
        "designer": "Spike Lee",
        "description": "Designed in collaboration with Spike Lee, the bottle is a colorful depiction of the stoop where the Brooklyn-bred auteur grew up – #165. Harkening back to the decades-long notion that the stoop is truly the epicenter of creativity, culture and community.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/absolut_brooklyn.jpg"
    },
    {
        "name": "Buenos Aires",
        "filter": "International Cities & Countries",
        "since": 2016,
        "distribution": "Argentina",
        "numberOfBottles": "69 300",
        "designer": "Gaspar Libedinsky",
        "description": "The Obelisk is the silent witness to the diversity that surrounds and characterizes Buenos Aires. This limited edition bottle's illustration is an interpretation of the perspective one obtains from the monument itself, a window onto the world of the Cocktail City.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/buenos-aires.jpg"
    },
    {
        "name": "Canada",
        "filter": "International Cities & Countries",
        "since": 2017,
        "distribution": "Canada",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Limited edition celebrating Canada, featuring iconic Canadian imagery on the bottle design.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/canada.jpg"
    },
    {
        "name": "Carnaval Rio de Janeiro",
        "filter": "Second Skin",
        "since": 2014,
        "distribution": "Brazil",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Second skin edition celebrating Rio de Janeiro's famous Carnival.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/carnaval-rio.jpg.webp"
    },
    {
        "name": "Carnaval São João",
        "filter": "Second Skin",
        "since": 2014,
        "distribution": "Brazil",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Second skin edition celebrating the São João festival in Brazil.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/carnaval-sao-joao.jpg.webp"
    },
    {
        "name": "Carnaval São Paulo",
        "filter": "Second Skin",
        "since": 2014,
        "distribution": "Brazil",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Second skin edition celebrating São Paulo's Carnival.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/carnaval-sao-paulo.jpg.webp"
    },
    {
        "name": "Cherrys 2016",
        "filter": "Standard & Flavours",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Absolut Cherrys is made from all-natural cherry flavors. Rich and smooth with a fruity character of ripe cherries. Same graphic as Absolut Cherrys 2014. Third medallion version",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/cherry2.jpg.webp"
    },
    {
        "name": "Chicago",
        "filter": "City series",
        "since": 2013,
        "distribution": "USA",
        "numberOfBottles": "270 000",
        "designer": "Threadless",
        "description": "For the design of Absolut Chicago, Absolut teamed up with the online design community Threadless, a pioneer in community-driven design, best known for their acclaimed T-shirt designs. Threadless’s membership model routinely invites work from members, which is then voted on, with the winning designs produced. Absolut Chicago is an olive- and rosemary-flavored vodka.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/chicago.jpg.webp"
    },
    {
        "name": "Choir",
        "filter": "Paper Wrap",
        "since": 2022,
        "distribution": "UK",
        "numberOfBottles": "30 000",
        "designer": "",
        "description": "Absolut limited edition paper wrap fronted by singer, and star of acclaimed drama It’s A Sin, Olly Alexander of the group Years & Years. Singing an entirely new version of his hit song Shine, Alexander and The Absolut Choir aim to turn up the volume on a variety of causes and conversations, including body positivity, disability awareness and equal rights.Paper wrap edition with choir/music themed design.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/11/olly-Alexander.jpg.webp"
    },
    {
        "name": "Cilantro",
        "filter": "Standard & Flavours",
        "since": 2013,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Absolut Cilantro is a contemporary flavored vodka alive with aromatic cilantro and vibrant lime. Taking its inspiration from Latin American kitchens, it bursts onto the scene with a taste that's smooth, fresh and unforgettable.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/cilantro-1.jpg"
    },
    /*{
        "name": "Citron (2021 Design)",
        "filter": "Standard & Flavours",
        "since": 2021,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "2021 version of Absolut Citron. Lemon-flavored vodka with the new minimal bottle design.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/absolut-citron-2022.jpg"
    },*/
    /*{
        "name": "Comeback",
        "filter": "Limited Edition",
        "since": 2019,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "End of the year limited edition bottle for 2019. The meaning behind the broken glass is about recycling and sustenability. The bottle is made from more than 41% recycled glass, like all Absolut bottles. Sustainability has been part of Absolut’s mission for many years and it is striving for a more circular world in which resources are reused again and again to benefit local economies, communities and ecosystems.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/comeback1000.jpg.webp"
    },*/
    {
        "name": "Denim",
        "filter": "Second Skin",
        "since": 2013,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "Loren Cronk",
        "description": "Blue denim cloth sleeve by street fashion designer Loren Cronk. Inside the skin the denim has a high tech shield with cold preserving.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/denim-700.jpg.webp"
    },
    {
        "name": "Drop of Love - Mint",
        "filter": "Limited Edition",
        "since": 2018,
        "distribution": "Worldwide",
        "numberOfBottles": "2 432 242",
        "designer": "",
        "description": "Blue tinted bottle with two bottle silhouette color versions (pink and mint) with word  'love' printed in 16 different languages on the bottle. Medallion features a white \"bleeding heart\" at the center.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/drop-of-love-mint-700.jpg.webp"
    },
    {
        "name": "Drop of Love - Pink",
        "filter": "Limited Edition",
        "since": 2018,
        "distribution": "Worldwide",
        "numberOfBottles": "2 432 242",
        "designer": "",
        "description": "Blue tinted bottle with two bottle silhouette color versions (pink and mint) with word  'love' printed in 16 different languages on the bottle. Medallion features a white \"bleeding heart\" at the center.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/drop-of-love-pink-700.jpg.webp"
    },
    {
        "name": "Dubai",
        "filter": "Paper Wrap",
        "since": 2019,
        "distribution": "United Arab Emirates",
        "numberOfBottles": "Unknown",
        "designer": "Randy Constantino",
        "description": "Medium blue bag depicting the city skyline with a bright orange sun rising above it.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/dubai.jpg.webp"
    },
    {
        "name": "Electrik Blue",
        "filter": "Limited Edition",
        "since": 2015,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "End of the year Limited Edition for 2015 Absolut Electrik come in two different colors (blue and silver). The metallic range evokes a feeling of energy capable of turning any night electric.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/electrik-blue-750.jpg.webp"
    },
    {
        "name": "Electrik Silver",
        "filter": "Limited Edition",
        "since": 2015,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "The Electrik bottles are the 2015 end-of-the-year edition. Absolut Electrik contains the same Swedish vodka as a bottle of Absolut Vodka. It is made exclusively from natural ingredients, and unlike some other vodkas, it doesn’t contain any added sugar. In fact, Absolut is as clean as vodka can be. Still, it has a certain taste: Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain, followed by a hint of dried fruit.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/electrik-silver-750.jpg.webp"
    },
    {
        "name": "Elyx #1",
        "filter": "Elyx",
        "since": 2010,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Premium line of Absolut Vodka crafted from hand-selected estate wheat, and blended with soft and naturally filtered water. It is a small-batch vodka, produced according to craft techniques, in an authentic 1929 copper rectification still.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/08/elyx1.jpg"
    },
    {
        "name": "Elyx #2",
        "filter": "Elyx",
        "since": 2013,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Second design iteration of Absolut Elyx premium vodka. Manually distilled in a 1921 copper rectification still known as Column 51.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/08/elyx2.jpg"
    },
    {
        "name": "Elyx #3",
        "filter": "Elyx",
        "since": 2018,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Third design iteration of Absolut Elyx. The silky textured vodka is a result of the single estate wheat, the manual operation and the old copper catalyzation process.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/08/elyx3.jpg"
    },
    {
        "name": "Elyx #4",
        "filter": "Elyx",
        "since": 2021,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Fourth and latest design of Absolut Elyx premium vodka. Copper naturally catalyzes trace compounds in the spirit, purifying the vodka and adding a highly prized silky texture and taste.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/08/elyx4.jpg"
    },
    {
        "name": "Exposure #1",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "100 000",
        "designer": "Johan Renck",
        "description": "A unique Traveler's Exclusive limited edition flavour celebrating the arts of photography and illusion, in creative collaboration with visionary artist Johan Renck. Crafted with honey melon and lemongrass.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/exposure1.jpg"
    },
    {
        "name": "Exposure #2",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "100 000",
        "designer": "Johan Renck",
        "description": "Second bottle in the Exposure series. Swedish artist Johan Renck photographed actress and supermodel Lydia Hearst guised in different personas.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/exposure2.jpg"
    },
    {
        "name": "Exposure #3",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "100 000",
        "designer": "Johan Renck",
        "description": "Third bottle in the Exposure series. Innovative and groundbreaking design incorporating photographs in bottle printing.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/exposure3.jpg"
    },
    {
        "name": "Flavor Of The Tropics",
        "filter": "Limited Edition",
        "since": 2009,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "300 000",
        "designer": "Williams Murray Hamm",
        "description": "Mango, Orange, Lychee, Pineapple and Melon flavored vodka. The first limited-edition flavour from Absolut to be launched exclusively in the global travel retail sector.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/tropics.jpg"
    },
    {
        "name": "Gift",
        "filter": "Limited Edition",
        "since": 2024,
        "distribution": "Italy",
        "numberOfBottles": "1 000",
        "designer": "",
        "description": "Absolut Gift is a limited edition bottle designed for an interactive gift experience.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2024/04/absolut_gift_700.jpg.webp"
    },
    {
        "name": "Glimmer",
        "filter": "Limited Edition",
        "since": 2010,
        "distribution": "Worldwide",
        "numberOfBottles": "4 000 000",
        "designer": "",
        "description": "The Glimmer is the 2010 end-of-the-year edition. A shimmering bottle with a metallic finish that catches the light.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/glimmer.png.webp"
    },
    {
        "name": "Gräpe 2017",
        "filter": "Standard & Flavours",
        "since": 2017,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Absolut Gräpe is incredibly easy to mix and is made from all-natural ingredients and contains no sugar. The combination of white grape, dragon fruit and papaya makes it multi-dimensional.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/grape1.jpg"
    },
    {
        "name": "Greensaver",
        "filter": "Limited Edition",
        "since": 2008,
        "distribution": "Greece",
        "numberOfBottles": "Unknown",
        "designer": "Konstantinos Vita",
        "description": "Colorful bottle specially designed to remind of the protection of the environment.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/greensaver-1.jpg"
    },
    {
        "name": "Haring",
        "filter": "Limited Edition",
        "since": 2025,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "Core release",
        "designer": "Keith Haring",
        "description": "EOY 2025, will be available at first exclusive at HEINEMANN duty-free,then worldwide in October in 40 countries.  The bottle's debossed design features figures from Harings original 1986 painting, Haring's own handwriting, signature and take on the Absolut medallion.",
        "frontPhoto": "https://images-svetnapojov-cdn.rshop.sk/gallery-big/products/a1f851a70ccdb766dece223ae521cb58.png"
    },
    {
        "name": "Honey",
        "filter": "Limited Edition",
        "since": 2015,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Absolut Honey is an Exclusive Travel retail limited edition with the slogan “Honey, I’m coming home” on a label in honeycomb hues. Absolut Honey is crafted with all natural ingredients and boasts a mellow taste of golden honey for a smooth and fruity finish.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/honey.jpg.webp"
    },
    {
        "name": "Illusion",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "A limited edition travel retail exclusive with an optical illusion design on the bottle.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/illusion1000.jpg"
    },
    {
        "name": "India #1",
        "filter": "International Cities & Countries",
        "since": 2016,
        "distribution": "India",
        "numberOfBottles": "Unknown",
        "designer": "Shaheen Baig",
        "description": "Features artwork by Shaheen Baig from Mumbai. The design captures the spirit of ecstatic chaos and brings alive the vibrant, multifaceted nation that is India. ",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/indiaV1_1000.jpg"
    },
    {
        "name": "India #2",
        "filter": "International Cities & Countries",
        "since": 2018,
        "distribution": "India",
        "numberOfBottles": "103 000",
        "designer": "",
        "description": "The design of the new Absolut India features a variety of cultural symbols such as a tiger, elephant, peacocks, banyan tree.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/india2_1000.jpg"
    },
    {
        "name": "Istanbul",
        "filter": "International Cities & Countries",
        "since": 2012,
        "distribution": "Turkey",
        "numberOfBottles": "180 000",
        "designer": "Yigit Yazici",
        "description": "Collaboration between the trendy vodka label and Turkish Artist Yigit Yazici. Absolut Istanbul pays tribute to the city's iconic emblems, Galata Tower and the Bosphorus in vibrant colours.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/istanbul.jpg"
    },
    {
        "name": "Istanbul",
        "filter": "Paper Wrap",
        "since": 2012,
        "distribution": "Turkey",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Paper wrap edition featuring Istanbul city design.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/ISTANBUL.jpg.webp"
    },
    {
        "name": "Juice Apple Edition",
        "filter": "Premixed",
        "since": 2018,
        "distribution": "UK",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Flavored fruit juice 35% abv. Contains natural ingredients with a paper label suggesting it is an autumn flavor.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/juice-apple-2-2.jpg.webp"
    },
    {
        "name": "Juice Strawberry Edition",
        "filter": "Premixed",
        "since": 2018,
        "distribution": "UK",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Flavored fruit juice 35% abv. Contains natural ingredients and has a paper label.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/juice-straw-2.jpg.webp"
    },
    {
        "name": "Karnival",
        "filter": "Limited Edition",
        "since": 2014,
        "distribution": "Worldwide",
        "numberOfBottles": "140 000",
        "designer": "Rafael Grampá",
        "description": "Absolut Carnival is a passion fruit and orange blossom-flavored limited edition capturing the transformative energy of Carnival. Features artwork by the Brazilian graphic novel artist and writer Rafael Grampá.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/karnival1000.jpg"
    },
    {
        "name": "Korea",
        "filter": "International Cities & Countries",
        "since": 2016,
        "distribution": "Korea",
        "numberOfBottles": "186 000",
        "designer": "Heo Wook",
        "description": "A coffee, almond and chili flavored limited edition capturing the essence of Korean traditions with a modern twist. Created in collaboration with contemporary Korean artist, Heo Wook.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/korea.jpg"
    },
    {
        "name": "Life Ball #1",
        "filter": "Limited Edition",
        "since": 2018,
        "distribution": "Austria",
        "numberOfBottles": "10 000",
        "designer": "Pond Design",
        "description": "Exclusive for the Vienna \"Life-Ball\". A rainbow bottle edition with pink ribbon impossed on the mediallion",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/life-ball-1.jpg.webp"
    },
    /*{
        "name": "Life Ball #2",
        "filter": "Limited Edition",
        "since": 2019,
        "distribution": "Austria",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Exclusive for the Vienna \"Life-Ball\". A rainbow bottle edition with pink ribbon impossed on the mediallion",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/life-ball-2.jpg.webp"
    },*/
    {
        "name": "Lollapalooza #1 Bag",
        "filter": "Paper Wrap",
        "since": 2018,
        "distribution": "Germany",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "First paper wrap edition for the Lollapalooza music festival.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/700V3.jpg.webp"
    },
    {
        "name": "Lollapalooza #2 Bag",
        "filter": "Paper Wrap",
        "since": 2019,
        "distribution": "Germany",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Second paper wrap edition for the Lollapalooza music festival.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/lolla2.jpg.webp"
    },
    {
        "name": "London",
        "filter": "International Cities & Countries",
        "since": 2012,
        "distribution": "UK",
        "numberOfBottles": "250 000",
        "designer": "Jamie Hewlett",
        "description": "Designed by Jamie Hewlett, co-creator of Gorillaz. The bottle features a vibrant London cityscape.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/london.jpg"
    },
    {
        "name": "Los Angeles",
        "filter": "City series",
        "since": 2008,
        "distribution": "USA",
        "numberOfBottles": "84 000",
        "description": "Launched in July 2008, this was the second of Absolut’s city themed series and is flavoured with acai, acerola, pomegranate and blueberry. Absolut donated $250,000 from the sales of Absolut Los Angeles to Green Way LA, a charitable organization dedicated to restoring nature’s services while providing for the health and welfare of the community.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/absolut_los_angeles.jpg.webp"
    },
    {
        "name": "Mandrin (2021 Design)",
        "filter": "Standard & Flavours",
        "since": 2021,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "2021 version of Absolut Mandrin. Orange and mandarin flavored vodka with the new minimal bottle design.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/08/mandrin2022.jpg"
    },
    {
        "name": "Masquerade",
        "filter": "Second Skin",
        "since": 2008,
        "distribution": "Worldwide",
        "numberOfBottles": "3 100 000",
        "designer": "",
        "description": "Red sequined cloth sleeve.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/masquerade-700.jpg.webp"
    },
    {
        "name": "Mexico",
        "filter": "International Cities & Countries",
        "since": 2012,
        "distribution": "Mexico & USA",
        "numberOfBottles": "235 000",
        "designer": "Dr. Lakra",
        "description": "Dr Lakra, alias of Jeronimo Lopez Ramirez, has collaborated with Absolut to pay homage to Mexican culture and the country's multicultural heritage, featuring icons from ancient Mayan culture.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/mexico.jpg"
    },
    {
        "name": "Miami",
        "filter": "Limited Edition",
        "since": 2012,
        "distribution": "USA",
        "numberOfBottles": "141 000",
        "designer": "",
        "description": "The bottle is styled with sunshine, palm trees and waves as a show of what Miami is known for. Passion fruit flavored.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/miami.jpg"
    },
    {
        "name": "Mini Bar",
        "filter": "Second Skin",
        "since": 2010,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "A second skin edition designed to look like a minibar. Creative packaging concept.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/minibar-1000.jpg"
    },
    {
        "name": "Mix",
        "filter": "Limited Edition",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "James Ostrer",
        "description": "Inspired by the six colors of the LGBT Pride flag, the design’s semi-transparent triangles allow the bottle’s colors to overlap in distinct ways when viewed from different angles.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/mix750.jpg"
    },
    {
        "name": "Mix Khuli Chana Signature",
        "filter": "Limited Edition",
        "since": 2016,
        "distribution": "South Africa",
        "numberOfBottles": "36 000",
        "designer": "James Ostrer",
        "description": "Inspired by the six colors of the LGBT Pride flag, the design’s semi-transparent triangles allow the bottle’s colors to overlap in distinct ways when viewed from different angles.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/mix-khuli-chana.jpg"
    },
    {
        "name": "Mode",
        "filter": "Limited Edition",
        "since": 2011,
        "distribution": "Worldwide",
        "numberOfBottles": "2 565 000",
        "designer": "",
        "description": "End of the year limited edition for 2011, Absolut reinforce its long-lasting collaboration with the fashion world. The campaign, featuring supermodel Shannan Click, was shot by renowned fashion photographer Sharif Hamza. The Absolut Mode Edition is a redesign of the iconic Absolut bottle, reflecting the world of fashion through twelve facets. It is wrapped with a band in midnight blue silk cloth with text embroidery. French version has “Limited Edition” text on the banderole.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/mode1lNC.jpg.webp"
    },
    {
        "name": "Mosaik",
        "filter": "Limited Edition",
        "since": 2012,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "Olly Alexander",
        "description": "EOY embraces the celebration of individuality and how beyond differences, together we can create a better world, push beyond differences and drive positive change.  A clear ribbed bottle with a oval mosiac inlay design where every piece (blue,pink,purple,peach and white) is unique but together creates something of beauty and symbolises diversity and society coming together.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2024/04/mosaik750.jpg"
    },
    {
        "name": "Movement",
        "filter": "Limited Edition",
        "since": 2020,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "EOY celebrates the spirit of mixing together in a blue frosted bottle with a twisted swirl theme depicting movement.  ABSOLUT is embossed in the swirl of the bottle.  The neck tag of the bottle comes in 5 versions with LIMITED EDITION on all the bottles except for Australia (STAND OUT), Korea (SHIFT VIEWS), Spain (MARCH FORWARD), and Italy (UNITE AS ONE).",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/movement_700.jpg.webp"
    },
    {
        "name": "New Orleans",
        "filter": "City series",
        "since": 2007,
        "distribution": "USA",
        "numberOfBottles": "420 000",
        "designer": "",
        "description": "Mango and Black Pepper flavored, Absolut New Orleans takes the vodka category in a daring new direction through a unique charity component, delicious new flavor combination and distinctive personality.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/new_orleans.jpg.webp"
    },
    {
        "name": "New Zealand",
        "filter": "Second Skin",
        "since": 2012,
        "distribution": "New Zealand",
        "numberOfBottles": "Unknown",
        "designer": "Huffer Co",
        "description": "Second skin edition celebrating New Zealand with Maori-inspired design elements.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/new-zealand.jpg.webp"
    },
    {
        "name": "No Label",
        "filter": "Limited Edition",
        "since": 2009,
        "distribution": "Worldwide",
        "numberOfBottles": "30 000",
        "designer": "",
        "description": "Absolut No Label original design is part of the “In an Absolut World” advertising campaign, and is meant to suggest that the outside appearance should be eclipsed by what is inside. The bottle was launched in the Travel Retail segment and certain other markets in June 2009, with a global launch following in September 2009. France version is with grey corner. Australia version with blue and grey corner. South Africa version is with 43% alcohol.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/nolabel-700.jpg"
    },
    {
        "name": "No Label French",
        "filter": "Limited Edition",
        "since": 2009,
        "distribution": "Worldwide",
        "numberOfBottles": "2 000",
        "designer": "",
        "description": "Absolut No Label original design is part of the “In an Absolut World” advertising campaign, and is meant to suggest that the outside appearance should be eclipsed by what is inside. The bottle was launched in the Travel Retail segment and certain other markets in June 2009, with a global launch following in September 2009. France version is with grey corner. Australia version with blue and grey corner. South Africa version is with 43% alcohol.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/nolabel-french.jpg"
    },
    {
        "name": "Nox",
        "filter": "Limited Edition",
        "since": 2016,
        "distribution": "Ibiza",
        "numberOfBottles": "1 500",
        "designer": "",
        "description": "Bottle made in 2016 only for the famous and mythic nightclub in Ibiza. Limited edition of 1 500 copies, it was never marketed, only sold inside the club.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/nox.jpg.webp"
    },
    {
        "name": "Oak",
        "filter": "Limited Edition",
        "since": 2015,
        "distribution": "USA",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Absolut Oak in clear bottle and created using the traditional craft of resting spirit in handmade oak barrels, along with a bespoke process of steeping vodka in oak chips.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/oak.jpg.webp"
    },
    {
        "name": "One Source – The Dragon",
        "filter": "Limited Edition",
        "since": 2018,
        "distribution": "South Africa",
        "numberOfBottles": "9 996",
        "designer": "",
        "description": "Featuring Khuli Chana with a hood and fire breathing as The Dragon. The One Source campaign in partnership with Absolut began with the release of an album and video in 2016 featuring Khuli Chana, Sarkodie (Ghana), Victoria Kimani (Kenya) and other African artists. A One Source Live (OSL) concert was held in Johannesburg on 24 March 2018.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/onesource_thedragon.jpg.webp"
    },
    {
        "name": "Orient Apple",
        "filter": "Standard & Flavours",
        "since": 2011,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Absolut Orient Apple is made exclusively from natural ingredients. Fresh and fruity with a distinct character of ripe red apples with a slight note of ginger.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/orient-apple.jpg.webp"
    },
    {
        "name": "Originality",
        "filter": "Limited Edition",
        "since": 2013,
        "distribution": "Worldwide",
        "numberOfBottles": "4 000 000",
        "designer": "",
        "description": "Taking inspiration from traditional Swedish glass crafts, every bottle has a drop of cobalt blue infused into its glass. Added just as the molten glass goes into the mould at 1100°C, the drop of cobalt blue streams down inside the glass creating a unique streak of blue.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/originality.jpg"
    },
    {
        "name": "Oz",
        "filter": "International Cities & Countries",
        "since": 2012,
        "distribution": "Australia",
        "numberOfBottles": "45 000",
        "designer": "Baz Luhrmann",
        "description": "A limited edition Australian collaboration with Baz Luhrmann, Australia's most successful creative outside of the music industry.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/oz.jpg"
    },
    {
        "name": "Polakom",
        "filter": "International Cities & Countries",
        "since": 2011,
        "distribution": "Poland",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Limited edition celebrating Poland and Polish culture.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/polakom.jpg"
    },
    {
        "name": "Rainbow",
        "filter": "Limited Edition",
        "since": 2017,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Absolut Rainbow is the new limited edition bottle with LGBT flag colors after Absolut Colors #1, Absolut Colors #2 and Absolut Colors #3.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/rainbow.jpg"
    },
    {
        "name": "RAW",
        "filter": "Limited Edition",
        "since": 2017,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Absolut Raw is a traveler’s exclusive edition. Selective nose, exciting flavor profiles in the raw spirit distillate, called cuts, are hand-selected and re-introduced into the vodka. First bottle paper wrapped.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/raw.jpg.webp"
    },
    {
        "name": "Red Label",
        "filter": "Standard & Flavours",
        "since": 1979,
        "distribution": "Worldwide",
        "numberOfBottles": "Discontinued (2006)",
        "designer": "",
        "description": "Red Label, with 50% alc./vol. 100% proof. Launched in 1979, discontinued in 2006 and replaced with Absolut 100.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/absolut-red-label-2.jpg"
    },
    {
        "name": "Rio",
        "filter": "International Cities & Countries",
        "since": 2013,
        "distribution": "Brazil",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Limited edition celebrating Rio de Janeiro, featuring colorful Brazilian-inspired artwork.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/rio.jpg"
    },
    {
        "name": "Rock",
        "filter": "Second Skin",
        "since": 2009,
        "distribution": "Worldwide",
        "numberOfBottles": "3 600 000",
        "designer": "",
        "description": "The Rock skin is the 2009 end-of-the-year edition. A black leather limited edition second skin, with metal spikes, containing a regular blue bottle.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/rock.jpg.webp"
    },
    {
        "name": "Ruby Red 2016",
        "filter": "Standard & Flavours",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Absolut Ruby Red is smooth and fruity with a crisp and refreshing character of zesty grapefruit. Made exclusively from natural ingredients with no added sugar.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/ruby-red-3.jpg.webp"
    },
    {
        "name": "San Francisco",
        "filter": "Limited Edition",
        "since": 2012,
        "distribution": "USA",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Limited edition celebrating San Francisco, featuring the city's iconic imagery.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/san-francisco.jpg"
    },
    {
        "name": "Selfridge",
        "filter": "Second Skin",
        "since": 2009,
        "distribution": "UK",
        "numberOfBottles": "5 000",
        "designer": "Peter Jensen",
        "description": "Limited edition skin released to celebrate the centenary of the English shop Selfridges.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/11/selfridge.jpg"
    },
    {
        "name": "Sequin",
        "filter": "Second Skin",
        "since": 2018,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "A sequin-covered second skin edition that shimmers and changes appearance when touched.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/sequin750.jpg.webp"
    },
    {
        "name": "Soy Capaz De",
        "filter": "Limited Edition",
        "since": 2014,
        "distribution": "Colombia",
        "numberOfBottles": "1 000",
        "designer": "",
        "description": "Colombian limited edition bottle. A regular blue label 750ml, with a white plastic foil on it. Limited to approximately 1000 copies.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/soy-capaz-de-1.jpg.webp"
    },
    {
        "name": "Spirit of Togetherness",
        "filter": "Limited Edition",
        "since": 2022,
        "distribution": "Worldwide",
        "numberOfBottles": "1 800 000",
        "designer": "",
        "description": "Absolut Spirit of Togetherness is the End of the year edition for 2022. The bottle design brings the brilliance of creativity, quality, and togetherness into one seamlessly woven package",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/10/absolut-spirit-of-togetherness-1000.jpg.webp"
    },
    {
        "name": "Svea",
        "filter": "International Cities & Countries",
        "since": 2018,
        "distribution": "Sweden",
        "numberOfBottles": "Unknown",
        "designer": "",
        "description": "Limited edition celebrating Sweden, named after the national personification of Sweden.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/svea.jpg"
    },
    {
        "name": "Texas",
        "filter": "Limited Edition",
        "since": 2014,
        "distribution": "USA",
        "numberOfBottles": "Unknown",
        "designer": "Cruz Ortiz",
        "description": "Absolut vodka with cucumber and Serrano chili flavor. The taste is rich and smooth with notes of fresh cucumber, and a warm spicy character; a flavor inspired by Southwestern cuisine.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/texas.jpg"
    },
    {
        "name": "Tomorrowland",
        "filter": "Paper Wrap",
        "since": 2019,
        "distribution": "Belgium, Netherlands",
        "numberOfBottles": "35 000",
        "designer": "",
        "description": "Pink/Rose bag bottom to Blue top enhanced by butterflies. Issued for the Tomorrowland music festival.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/02/tomorrowland700-1.jpg.webp"
    },
    {
        "name": "Tomorrowland 2021",
        "filter": "Limited Edition",
        "since": 2021,
        "distribution": "Germany, Austria, Belgium, Netherlands, Switzerland",
        "numberOfBottles": "270 000",
        "designer": "",
        "description": "Limited edition Absolut bottle for Tomorrowland festival.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2021/05/tomorrowland.jpg.webp"
    },
    {
        "name": "Tomorrowland 2022",
        "filter": "Limited Edition",
        "since": 2022,
        "distribution": "Germany, Slovenia, Belgium, Netherlands, Switzerland",
        "numberOfBottles": "230 000",
        "designer": "",
        "description": "Limited edition Absolut bottle for Tomorrowland festival 2022.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2022/06/tomorrowland-2022.webp"
    },
    {
        "name": "Tomorrowland 2023",
        "filter": "Limited Edition",
        "since": 2023,
        "distribution": "Europe",
        "numberOfBottles": "238 530",
        "designer": "",
        "description": "Limited edition Absolut bottle for Tomorrowland festival 2023.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2023/05/tomorrowland.jpg.webp"
    },
    {
        "name": "Unique",
        "filter": "Limited Edition",
        "since": 2012,
        "distribution": "Worldwide",
        "numberOfBottles": "3 980 000",
        "designer": "",
        "description": "The Unique is the 2012 end-of-the-year edition. Every bottle in the range is 'unique' – each has a numbered label and the same bottle shape, but painted with different colours and shapes making each one different.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/unique750.jpg"
    },
    {
        "name": "Voices",
        "filter": "Limited Edition",
        "since": 2021,
        "distribution": "Worldwide",
        "numberOfBottles": "1 700 000",
        "designer": "",
        "description": "Absolut Voices is the limited edition bottle for the end of the year 2021. After the pandemic period the meaning behind the design of the bottle is to reconnect with each other. The design of Absolut Voices shows two sound waves that expand on the bottle.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2021/10/absolut-voices-750-pink.webp"
    },
    {
        "name": "Warhol",
        "filter": "Limited Edition",
        "since": 2014,
        "distribution": "Worldwide",
        "numberOfBottles": "4 000 000",
        "designer": "Andy Warhol (posthumous)",
        "description": "Inspired by Andy Warhol's original 1986 painting of the Absolut bottle. The design features Warhol's iconic pop art style with bold colors and graphic elements.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/warhol.jpg"
    },
    {
        "name": "Warhol #2",
        "filter": "Limited Edition",
        "since": 2024,
        "distribution": "Worldwide",
        "numberOfBottles": "2 000 000",
        "designer": "Andy Warhol",
        "description": "Second Warhol limited edition bottle. Inspired by Andy Warhol's original 1986 painting of the Absolut bottle. The design features Warhol's iconic pop art style with bold colors and graphic elements.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2024/07/absolut_warhol_700.jpg"
    },
    {
        "name": "Watkins",
        "filter": "Limited Edition",
        "since": 2011,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "500 000",
        "designer": "Liselotte Watkins",
        "description": "Rich, smooth and sensual in taste with the distinct qualities of freshly ground coffee with notes of almond, caramel and warm chilli. Bottle decor created by celebrated Swedish fashion illustrator Liselotte Watkins.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/01/watkins.jpg"
    },
    {
        "name": "Wild Tea",
        "filter": "Standard & Flavours",
        "since": 2010,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "",
        "description": "Absolut Wild Tea is a blend of vodka with elderflower and black tea flavors. A unique and refreshing taste experience.",
        "frontPhoto": "https://absolutpedia.com/wp-content/uploads/2020/12/wild-tea-1-1.jpg.webp"
    }
];

function bottleTemplate(bottle, index) {
    return `
        <div class="bottle-card cursor-pointer rounded-xl overflow-hidden bg-white border border-zinc-100 hover:border-zinc-200 shadow-sm"
             onclick="openModal(${index})">
            <div class="p-3 pb-0">
                <img
                    src="${bottle.frontPhoto}"
                    class="bottle-img w-full rounded-lg bg-white"
                    alt="${bottle.name}"
                    loading="lazy"
                    onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 300%22><rect fill=%22%23f5f0eb%22 width=%22200%22 height=%22300%22/><text fill=%22%23ccc%22 x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2214%22>No Image</text></svg>'"
                />
            </div>
            <div class="p-3 pt-2">
                <p class="bottle-name text-[11px] text-zinc-500 truncate transition-colors font-medium">${bottle.name}</p>
            </div>
        </div>
    `;
}

function openModal(index) {
    const bottle = bottleData[index];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3 flex-shrink-0">
                <img src="${bottle.frontPhoto}" alt="${bottle.name}"
                     class="w-full max-h-[60vh] object-contain rounded-xl bg-white"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 300%22><rect fill=%22%23f5f0eb%22 width=%22200%22 height=%22300%22/><text fill=%22%23ccc%22 x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2214%22>No Image</text></svg>'" />
            </div>
            <div class="flex-1 space-y-5">
                <div>
                    <h2 class="text-2xl font-bold text-zinc-900">${bottle.name}</h2>
                    ${bottle.filter ? `<span class="inline-block mt-2 px-3 py-1 text-[10px] tracking-widest uppercase rounded-full border border-amber-300/50 text-amber-700 bg-amber-50">${bottle.filter}</span>` : ''}
                </div>
                <ul class="space-y-3 text-sm text-zinc-500">
                    ${bottle.since ? `<li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-amber-400"></span> Year: <span class="text-zinc-800">${bottle.since}</span></li>` : ''}
                    ${bottle.numberOfBottles ? `<li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-amber-400"></span> Edition: <span class="text-zinc-800">${bottle.numberOfBottles}</span></li>` : ''}
                    ${bottle.designer ? `<li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-amber-400"></span> Designer: <span class="text-zinc-800">${bottle.designer}</span></li>` : ''}
                    ${bottle.distribution ? `<li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-amber-400"></span> Distribution: <span class="text-zinc-800">${bottle.distribution}</span></li>` : ''}
                </ul>
                <div class="text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-5">
                    ${bottle.description}
                </div>
            </div>
        </div>
    `;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// Render collection
document.getElementById('collection').innerHTML = bottleData.map((b, i) => bottleTemplate(b, i)).join('');

// Update bottle count
document.getElementById('bottle-count').textContent = bottleData.length + ' bottles';
