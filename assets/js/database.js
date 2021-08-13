const bottleData = [
    {
        "name": "Absolut 100 Selfridges",
        "filter": "Limited Edition Case",
        "since": 2009,
        "distribution": "UK",
        "numberOfBottles": "5 000",
        "designer": "Peter Jensen",
        "description": "Limited edition skin released to celebrate the centenary of the English shop Selfridges.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_100_selfridges__0000.jpg"
    },
    {
        "name": "Absolut 72 Bian 变",
        "filter": "Limited Edition Bottle",
        "since": 2010,
        "distribution": "China, Singapore, & Malaysia",
        "numberOfBottles": "350 000",
        "designer": "Gao Yu",
        "description": "Mr. Gao’s strong design was inspired by an ancient Chinese fable, “Journey to the West,” a heroic story about the monkey king Sun Wukong, who acquires the power to undergo 72 transformations (or 72 bian). Using his fearlessness and creativity, he is able to overcome all obstacles.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/02/absolut_72_bian__0000.jpg"
    },
    {
        "name": "Absolut Berlin",
        "filter": "City series",
        "since": 2014,
        "distribution": "Germany, Austria, Switzerland",
        "numberOfBottles": "300 000",
        "designer": "Zhivago Duncan",
        "description": "The Fernsehturm TV tower, a relic of a once divided city, stands over the city of Berlin. In the nearly 25 years since East and West Berlin unified, this icon which once represented a controlled message of a dismantled government, now stands for a city defined by artistic freedom and creative discovery.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2015/08/absolut_berlin__0000-1200x1800.jpg"
    },
    {
        "name": "Absolut Blank Kinsey",
        "filter": "Limited Edition Bottle",
        "since": 2013,
        "distribution": "Italy, Germany, Greece, Austria, Spain, Belgium, Luxemburg, & Switzerland",
        "numberOfBottles": "Unknown amount of",
        "designer": "Dave Kinsey",
        "description": "Absolut Vodka Blank Edition by Dave Kinsey features an explosion of bright colors and darker-hued washes that reveal Kinsey’s roots as a street artist while highlighting his extraordinary fine art skill. It depicts something natural, a flower with the vibrancy and energy of the city.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_blank_kinsey__0000.jpg"
    },
    {
        "name": "Absolut Buenos Aires",
        "filter": "City series",
        "since": 2016,
        "distribution": "Argentina",
        "numberOfBottles": "69 300",
        "designer": "Gaspar Libedinsky",
        "description": "The Obelisk is the silent witness to the diversity that surrounds and characterizes Buenos Aires. It knows the city’s most intimate stories. It is also the favourite meeting point for porteños, a place to celebrate their joys and make their frustrations known. As part of its effort to represent the idiosyncrasies and identity of the city and its inhabitants, Absolut Buenos Aires uses the location of the Obelisk to represent its new visual. This limited edition bottle’s illustration is an interpretation of the perspective one obtains from the monument itself, a window onto the world of the Cocktail City.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/04/absolut_buenos_aires__0000.jpg"
    },
    {
        "name": "Absolut Drop of Love (mint) 700ml",
        "filter": "Limited Edition Bottle",
        "since": 2018,
        "distribution": "Worldwide except USA",
        "numberOfBottles": "2 432 242",
        "designer": "NaN",
        "description": "Blue tinted bottle with two bottle silhouette color versions (pink and mint) with word  'love' printed in 16 different languages on the bottle. Medallion features a white \"bleeding heart\" at the center.",
        "frontPhoto": "assets/images/absolut-vodka-a-drop-of-love_white.jpg"
    },
    {
        "name": "Absolut Drop of Love (mint) 700ml",
        "filter": "Limited Edition Bottle",
        "since": 2018,
        "distribution": "UNITED KINGDOM, CANADA",
        "numberOfBottles": "2 432 242",
        "designer": "NaN",
        "description": "Blue tinted bottle with two bottle silhouette color versions (pink and mint) with word  'love' printed in 16 different languages on the bottle. Special Pride medallion with rainbow colored heart.",
        "frontPhoto": "assets/images/absolut-vodka-a-drop-of-love_pride.jpg"
    },
    {
        "name": "Absolut Dubai",
        "filter": "Limited Edition Bag",
        "since": 2019,
        "distribution": "United Arab Emirates",
        "numberOfBottles": "Unknown amount of",
        "designer": "Randy Constantino",
        "description": "Medium blue bag depicting the city skyline with a bright orange sun rising above it",
        "frontPhoto": "assets/images/absolut-dubai.jpg"
    },
    {
        "name": "Absolut Electrik Blue",
        "filter": "Limited Edition Bottle",
        "since": 2015,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown amount of",
        "designer": "NaN",
        "description": "Absolut Electrik follows a celebrated tradition of introducing end of year limited editions featuring cutting-edge designs. The twin bottle release is available in electrik blue and silver, with semi-transparent coating creating see-through reflections. The two colors represent Absolut’s signature cobalt blue and the electrical conductivity of silver. When combined, the colors reflect an Electrik aesthetic reminiscent of flashing lights and pumping beats.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_electrik_blue__0000.jpg"
    },
    {
        "name": "Absolut Elyx V3",
        "filter": "Flavors & Premium",
        "since": 2010,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "ABSOLUT ELYX is manually distilled in a 1921 copper rectification still known as Column 51, made entirely of copper. It is operated by a selected few who inherited their knowledge and expertise from past generations of spirit and vodka makers.<br><br>\n" +
            "\n" +
            "The silky textured vodka is a result of the single estate wheat, the manual operation and the old copper catalyzation process. The copper naturally catalyzes trace compounds in the spirit, purifying the vodka and adding a highly prized silky texture and taste.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2015/08/absolut_elyx_v3__0000-1200x1800.jpg"
    },
    {
        "name": "Absolut Exposure 1",
        "filter": "Limited Edition Bottle",
        "since": 2013,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "100 000",
        "designer": "Johan Renck",
        "description": "A unique Traveler’s Exclusive limited edition flavour celebrating the arts of photography and illusion, in creative collaboration with visionary artist Johan Renck.<br><br>\n" +
            "\n" +
            "A new-generation flavour crafted with honey melon and lemongrass, Absolut Exposure is presented in a bottle with an innovative and groundbreaking design – Swedish artist Johan Renck has photographed actress and supermodel Lydia Hearst guised in a number of different “personas”, and has then incorporated the photographs in bottle printing, with stunning results.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2015/09/absolut_exposure_1__0000.jpg"
    },
    {
        "name": "Absolut Flavor Of The Tropics",
        "filter": "Limited Edition Bottle",
        "since": 2009,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "300 000",
        "designer": "Williams Murray Hamm",
        "description": "Mango, Orange, Lychee, Pineapple and Melon flavored vodka, designed by Williams Murray Hamm.<br><br>\n" +
            "\n" +
            "The product offers the travellers a new exotic vodka flavour that is not available in stores back home.<br><br>\n" +
            "\n" +
            "Absolut Flavor of the Tropics is the first limited-edition flavour from Absolut to be launched exclusively in the global travel retail sector.<br><br>",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_flavor_of_the_tropics__0000.jpg"
    },
    {
        "name": "Absolut Greensaver",
        "filter": "Limited Edition Bottle",
        "since": 2008,
        "distribution": "Greece",
        "numberOfBottles": "Unknown amount of",
        "designer": "Konstantinos Vita",
        "description": "Colorful bottle specially designed to remain the protection of the environment.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_greensaver__0000.jpg"
    },
    {
        "name": "Absolut Istanbul Bag",
        "filter": "Limited Edition Bag",
        "since": 2012,
        "distribution": "Turkey",
        "numberOfBottles": "Unknown amount of",
        "designer": "Unknown",
        "description": "N/A",
        "frontPhoto": "assets/images/absolut-istanbul-bag.jpg"
    },
    {
        "name": "Absolut Juice Apple",
        "filter": "Flavors & Premium",
        "since": 2018,
        "distribution": "UK",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "Flavored fruit juice 35% -abv. Contains natural ingredients and has a paper label with a suggestion that it is an autumn flavor",
        "frontPhoto": "assets/images/absolut-juice-apple.jpg"
    },
    {
        "name": "Absolut Karnival 1l",
        "filter": "Limited Edition Bottle",
        "since": 2014,
        "distribution": "Worldwide",
        "numberOfBottles": "140 000",
        "designer": "Rafael Grampá",
        "description": "Absolut Carnival is a passion fruit and orange blossom-flavored limited edition capturing the transformative energy of Carnival.<br><br>\n" +
            "\n" +
            "Absolut Karnival features artwork by the Brazilian graphic novel artist and writer Rafael Grampá.<br><br>\n" +
            "\n" +
            "Already teaming with Absolut on its new Transform Today campaign, Grampá here extends his creative collaboration with the brand by bringing a unique and colorful vision of Latin America’s most transformative celebration to the iconic Absolut bottle.<br><br>",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/03/absolut_karnival__0000.jpg"
    },
    {
        "name": "Absolut Korea",
        "filter": "City series",
        "since": 2016,
        "distribution": "Korea",
        "numberOfBottles": "186 000",
        "designer": "Heo Wook",
        "description": "Absolut Korea, a coffee, almond and chili flavored limited edition capturing the essence of Korean traditions with a modern twist.<br><br>\n" +
            "\n" +
            "Created in collaboration with contemporary Korean artist, Heo Wook, the bottle design reflects a unique vision of Korea, transforming elements including traditional architecture, the Hangul alphabet and obang colours into a contemporary artistic presentation.<br><br>\n" +
            "\n" +
            "Absolut Korea reflects the vibrant and dynamic culture of Korea, where old meets new, taking inspiration from the structural features of traditional architecture.<br><br>",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/04/absolut_korea__0000.jpg"
    },
    {
        "name": "Absolut Mango V3",
        "filter": "Flavors & Premium",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "Absolut Mango is made exclusively from natural ingredients, and unlike some other flavored vodkas, it doesn’t contain any added sugar. Absolut Mango is full-bodied and juicy with a character of ripe mango and notes of tropical fruits.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2017/01/absolut_mango_2016__0000.jpg"
    },
    {
        "name": "Absolut Masquerade",
        "filter": "Limited Edition Bag",
        "since": 2008,
        "distribution": "Worldwide",
        "numberOfBottles": "3 100 000",
        "designer": "NaN",
        "description": "The Masquerade skin is the 2008 end-of-the-year edition.<br><br>\n" +
            "\n" +
            "Shiny red skin containing a regular blue bottle.<br><br>\n" +
            "\n" +
            "Made from soft and shiny red spangles, and with a zipper on the back, Absolut Masquerade really stands out and inspires consumers to join the glamorous masquerade.<br><br>" +
            "The one-liter gift pack is built of exactly 3,238 shiny red spangles in the shape of a classic Absolut bottle, serving as an ultra-stylish package.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/02/absolut_masquerade__0000.jpg"
    },
    {
        "name": "Absolut Miami 750ml",
        "filter": "City series",
        "since": 2012,
        "distribution": "USA",
        "numberOfBottles": "141 000",
        "designer": "NaN",
        "description": "The Bottle is styled with sunshine, palm trees and waves as a show what Miami is known for.<br><br>\n" +
            "\n" +
            "The nose is heady with citrus, but it’s the distinct passion fruit character that cuts through the most succinctly. The orange is there in the body, but it’s an afterthought next to that really ripe and fruity passion fruit flavor. The body is solid, with a minimal medicinal aftertaste. Altogether it’s got a great balance of fruit and punchiness.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2015/09/absolut_miami__0000.jpg"
    },
    {
        "name": "Absolut Mix",
        "filter": "Limited Edition Bottle",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown amount of",
        "designer": "James Ostrer",
        "description": "Inspired by the six colors of the LGBT Pride flag, the design’s semi-transparent triangles allow the bottle’s colors to overlap in distinct ways when viewed from different angles.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2017/01/absolut_pride__0000.jpg"
    },
    {
        "name": "Absolut Mix Khuli Chana Signature",
        "filter": "Limited Edition Bottle",
        "since": 2016,
        "distribution": "South Africa",
        "numberOfBottles": "36 000",
        "designer": "James Ostrer",
        "description": "Inspired by the six colors of the LGBT Pride flag, the design’s semi-transparent triangles allow the bottle’s colors to overlap in distinct ways when viewed from different angles.",
        "frontPhoto": "assets/images/absolut-vodka-mix-khuli-chana-signature-edition-750ml-43-vol.jpg"
    },
    {
        "name": "Absolut New Orleans",
        "filter": "City series",
        "since": 2007,
        "distribution": "USA",
        "numberOfBottles": "420 000",
        "designer": "NaN",
        "description": "Mango and Black Pepper flavored, Absolut New Orleans takes the vodka category in a daring new direction through a unique charity component, delicious new flavor combination and distinctive personality.<br><br>\n" +
            "\n" +
            "This is the first bottle in the “City Series”.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_new_orleans__0000.jpg"
    },
    {
        "name": "Absolut No Label French",
        "filter": "Limited Edition Bottle",
        "since": 2009,
        "distribution": "France",
        "numberOfBottles": "2 000",
        "designer": "NaN",
        "description": "The label of the No Label French is different of a classic No Label, without LGBT flag colors on it.<br><br>\n" +
            "\n" +
            " \n" +
            "\n" +
            "In An ABSOLUT World, there Are No Labels, a bold and innovative project where the brand is challenging labels and prejudice about sexual identities.<br><br>\n" +
            "\n" +
            "A manifestation of a world with no labels is a limited edition naked Absolut bottle, with no label and no logo.<br><br>\n" +
            "\n" +
            "Absolut launched a bottle with no label and no logo, to manifest the idea, that no matter what’s on the outside, it’s the inside that really matters.<br><br>",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/02/absolut_no_label_french__0000.jpg"
    },
    {
        "name": "Absolut One Source Live (Dragon)",
        "filter": "Limited Edition Bottle",
        "since": 2018,
        "distribution": "Republic of South Africa",
        "numberOfBottles": "9 996",
        "designer": "NaN",
        "description": "Featuring Khuli Chana with a hood and fire breathing as The Dragon. The One Source campaign in partnership with Absolut began with the release of an album and video in 2016 featuring Khuli Chana, Sarkodie (Ghana), Victoria Kimani (Kenya) and other African artists. A One Source Live (OSL) concert was held in Johannesburg on 24 March 2018.",
        "frontPhoto": "assets/images/onesource_thedragon.jpg"
    },
    {
        "name": "Absolut Originality",
        "filter": "Limited Edition Bottle",
        "since": 2013,
        "distribution": "Worldwide",
        "numberOfBottles": "4 000 000",
        "designer": "NaN",
        "description": "Taking inspiration from traditional Swedish glass crafts, every bottle of Absolut Originality has a drop of cobalt blue infused into its glass. This colouring technique has been used for centuries in hand-made art glass, but never before has it been applied to create four million original bottles. Added just as the molten glass goes into the mould at 1100°C, the drop of cobalt blue streams down inside the glass creating a unique streak of blue. At that temperature the cobalt is invisible, but as the glass cools off, a beautiful and unique blue infusion appears.<br><br>Numbers: 361, 2 715 904, 1 580 180",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_originality__0000.jpg"
    },
    {
        "name": "Absolut Oz",
        "filter": "Flavors & Premium",
        "since": 2012,
        "distribution": "Australia",
        "numberOfBottles": "45 000",
        "designer": "Baz Luhrmann",
        "description": "A limited edition that is a local Australian collaboration, to strengthen the brand’s creativity credentials. Absolut collaborated with Baz Luhrmann Australia’s most successful creative outside of the music industry to develop and introduce the unique ABSOLUT Oz.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2015/08/absolut_oz__0000-1200x1800.jpg"
    },
    {
        "name": "Absolut Passionfruit",
        "filter": "Flavors & Premium",
        "since": 2020,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "Bold graphic design in green and yellow brushstrokes with swirls of purple. ABSOLUT PASSIONFRUIT in bold yellow color.",
        "frontPhoto": "assets/images/absolut-passionfruit.jpg"
    },
    {
        "name": "Absolut Pears",
        "filter": "Flavors & Premium",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "Absolut Pears is made exclusively from natural ingredients, and unlike some other flavored vodkas, it doesn’t contain any added sugar. Absolut Pears is fresh and delicate, with a smack of mellow pears and a long fruity aftertaste.<br><br>\n" +
            "\n" +
            "In 1879, Lars Olsson Smith introduced the continuous distillation with which he made Absolut Rent Brännvin. Instead of the usual three or four times, the vodka was distilled an infinite number of times. Absolut Pears is made the same way, the only difference is the taste of pear. And, like the rest of the family, it’s produced in Åhus, L.O. Smith’s birth town. Since the process will never change, neither will the true taste of Absolut Pears.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/02/absolut_pears_2016__0000.jpg"
    },
    {
        "name": "Absolut Rainbow",
        "filter": "Limited Edition Bottle",
        "since": 2017,
        "distribution": "Worldwide",
        "numberOfBottles": "Unknown amount of",
        "designer": "Pond Design",
        "description": "Absolut Rainbow Flag Edition – Taking Pride In Diversity",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2018/01/absolut_rainbow__0000.jpg"
    },
    {
        "name": "Absolut Rainbow Life Ball Ed.",
        "filter": "Limited Edition Bottle",
        "since": 2018,
        "distribution": "Austria",
        "numberOfBottles": "10 000",
        "designer": "Pond Design",
        "description": "Exclusive for the Vienna \"Life-Ball\". A rainbow bottle edition with pink ribbon impossed on the mediallion",
        "frontPhoto": "assets/images/absolut-life-ball-edition-700ml-40-vol.jpg"
    },
    {
        "name": "Absolut Raspberri V3",
        "filter": "Flavors & Premium",
        "since": 2016,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "Absolut Raspberri is made exclusively from natural ingredients, and unlike some other flavored vodkas, it doesn’t contain any added sugar. It’s rich and intense with the fresh and fruity character of ripened raspberries.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2017/01/absolut_raspberri_2016__0000.jpg"
    },
    {
        "name": "Absolut Rock",
        "filter": "Limited Edition Case",
        "since": 2009,
        "distribution": "Worldwide",
        "numberOfBottles": "3 600 000",
        "designer": "NaN",
        "description": "The Rock skin is the 2009 end-of-the-year edition.<br><br>\n" +
            "\n" +
            "A Black leather limited edition second skin, with metal spikes, containing a regular blue bottle.<br><br>\n" +
            "\n" +
            "To pay tribute to rock and roll, Absolut launched in 2009 the Rock Edition, a limited edition bottle wrapped in a leather- and studs gift package.<br><br>",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/02/absolut_rock__0000.jpg"
    },
    {
        "name": "Absolut Ruby Red V3",
        "filter": "Flavors & Premium",
        "since": 2013,
        "distribution": "Worldwide",
        "numberOfBottles": "Core release",
        "designer": "NaN",
        "description": "Absolut Ruby Red is made exclusively from natural ingredients, and unlike some other flavored vodkas, it doesn’t contain any added sugar. Absolut Ruby Red is smooth and fruity with a crisp and refreshing character of zesty grapefruit.",
        "frontPhoto": "assets/images/absolut-ruby-red-1000ml-40-vol.jpg"
    },
    {
        "name": "Absolut Soy Capaz De",
        "filter": "Limited Edition Bottle",
        "since": 2014,
        "distribution": "Colombia",
        "numberOfBottles": "1 000",
        "designer": "NaN",
        "description": "Colombian limited edition bottle.<br><br>\n" +
            "This is a regular blue label 750ml, with a white plastic foil on it. Limited to approximatively 1000 copies.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2015/08/absolut_soy_capaz_de__0000-1200x1800.jpg"
    },
    {
        "name": "Absolut Tomorrowland Bag 700ml",
        "filter": "Limited Edition Bag",
        "since": 2019,
        "distribution": "Belgium, Netherlands",
        "numberOfBottles": "35 000",
        "designer": "NaN",
        "description": "Pink/Rose bag bottom to Blue top enhanced by butterflies",
        "frontPhoto": "assets/images/absolut-tomorrowland-old.jpg"
    },
    {
        "name": "Absolut Tomorrowland",
        "filter": "Limited Edition Bottle",
        "since": 2021,
        "distribution": "Austria, Belgium, Germany, Netherlands, Switzerland",
        "numberOfBottles": "Unknown amount of",
        "designer": "NaN",
        "description": "Issued for the Tomorrowland ZUM Festival featuring the words LIVE LOVE UNITE in pink and blue colors with butterflies and flowers",
        "frontPhoto": "assets/images/absolut-tomorrowland-new.jpg"
    },
    {
        "name": "Absolut Unity",
        "filter": "Limited Edition Bottle",
        "since": 2018,
        "distribution": "USA",
        "numberOfBottles": "Unknown amount of",
        "designer": "NaN",
        "description": "Designed in red and white stripes and blue rectangle resembling the American Flag and in collaboration with the nonprofit Keep America Beautiful, the bottle represents unity",
        "frontPhoto": "assets/images/absolut-unity-700ml-40-vol.jpg"
    },
    {
        "name": "Absolut Unique",
        "filter": "Limited Edition Bottle",
        "since": 2012,
        "distribution": "Worldwide",
        "numberOfBottles": "3 980 000",
        "designer": "NaN",
        "description": "The Unique is the 2012 end-of-the-year edition.<br><br>\n" +
            "\n" +
            "A special edition from Absolut, named for the fact that every bottle in the range is ‘unique’ – each has a numbered label and the same bottle shape, but other than that they are painted with different colours and shapes making each one different.<br><br>\n" +
            "\n" +
            "To make every bottle become unique, Absolut had to re-engineer the entire production process. The colourful bottles will be distributed worldwide. Everyone will find a design that catches their eye and becomes a truly personalized gift.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_unique__0000.jpg"
    },
    {
        "name": "Absolut Watkins",
        "filter": "Flavors & Premium",
        "since": 2011,
        "distribution": "Worldwide in DFS",
        "numberOfBottles": "500 000",
        "designer": "Liselotte Watkins",
        "description": "ABSOLUT WATKINS is a truly innovative new flavor; rich, smooth and sensual in taste and aroma with the distinct, mysteriously luxurious qualities of freshly ground coffee with notes of almond, caramel and warm chilli.<br><br>\n" +
            "\n" +
            "The extravagant and glamorous decor of the unique limited edition ABSOLUT WATKINS bottle was created by celebrated Swedish fashion illustrator and artist, Liselotte Watkins, famous for her designs for fashion brands such as Miu Miu, Anna Sui and Barney’s as well as for magazines such as VOGUE and The New Yorker.",
        "frontPhoto": "https://absolutregis.com/wp-content/uploads/2016/01/absolut_watkins__0000.jpg"
    },
];

function bottleTemplate(bottle) {
    return `
        <div class="col-lg-1 d-block m-auto mb-4 mb-lg-0">
            <img
                src="${bottle.frontPhoto}"
                class="shadow-1-strong galleryPreview"
                data-target="#carouselExample" data-slide-to="0"
            />
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="showcase">
                            <img class="bottle-photo" src="${bottle.frontPhoto}">
                            <h2 class="bottle-name">${bottle.name}<br /><span class="filter">${bottle.filter}</span></h2>
                            <ul style="text-align: left;font-size: 0.9rem">
                                <li><strong>${bottle.since}</strong></li>
                                <li><strong>${bottle.numberOfBottles} bottles</strong></li>
                                <li><strong>Designer:</strong> ${bottle.designer}</li>
                                <li><strong>Distributed in:</strong> ${bottle.distribution}</li>
                            </ul>
                            <p>${bottle.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

document.getElementById("collection").innerHTML = `
${bottleData.map(bottleTemplate).join('')}
`

document.getElementById("title").innerHTML = `
<div style="width: 100%; text-align: center" class="mb-4">
    <h1>Collection of ${bottleData.length} bottles</h1>
</div>
`

/*
{
    "name": "",
    "filter": "",
    "since": 0,
    "distribution": "",
    "numberOfBottles": "",
    "designer": "",
    "description": "",
    "frontPhoto": ""
}
*/