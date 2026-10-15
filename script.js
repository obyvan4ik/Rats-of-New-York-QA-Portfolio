// ================= SEARCH =================

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", function () {

    if (searchInput.style.display === "block") {
        searchInput.style.display = "none";
    } else {
        searchInput.style.display = "block";
        searchInput.focus();
    }

});


// ================= RAT STORIES SLIDER =================

const ratStories = [

    // ================= STORY 01 — RATTONNA =================

    {
        number: "STORY 01",

        name: "Rattonna",

        role: "Former Broadway Star • Singer • Dancer • Dreamer",

        image: "photo/ratonna.png",

        text: `
            <p>
                Rattonna was destined for greatness. From the moment she first
                squeaked a melody beneath the floorboards of a Broadway theater,
                everyone knew she was special. Her voice could silence an entire
                alley, and her dancing left audiences speechless.
            </p>

            <p>
                For years, she secretly rehearsed behind the walls of one of
                Broadway's most famous theaters, dreaming of the night she would
                finally step into the spotlight.
            </p>

            <p>
                That night finally came.
            </p>

            <p>
                During a sold-out premiere, Rattonna gathered all her courage
                and ran onto the stage. She sang with all her heart. Her voice
                echoed through the theater, and for one unforgettable moment,
                the audience was captivated.
            </p>

            <p>
                But not everyone welcomed her talent.
            </p>

            <p>
                Unable to accept that a rat could outshine human performers,
                the theater staff chased her off the stage with brooms in front
                of the entire audience. Her Broadway debut ended in humiliation.
            </p>

            <p>
                As if that wasn't enough, the theater management later adopted
                a cat and installed dozens of mousetraps throughout the building,
                forcing Rattonna to flee the only home she had ever known.
            </p>

            <p>
                Today, Rattonna survives on the streets of New York. She still
                sings whenever she finds a quiet corner, hoping that someone
                will hear the voice that was never given a fair chance.
            </p>

            <p>
                Music producers say her debut album could have reached the top
                of <strong>Squeakify</strong> charts and earned multiple
                <strong>Ratmy Awards</strong>. Instead, her dreams were swept
                away with a broom.
            </p>

            <p class="story-ending">
                Every rat deserves a stage.<br>
                Every dream deserves an audience.
            </p>
        `
    },


    // ================= STORY 02 — CHEESLON MUSK =================

    {
        number: "STORY 02",

        name: "Cheeslon Musk",

        role: "Visionary Inventor • Engineer • Future Founder of the First Rat Colony on Mars",

        image: "photo/mask.png",

        text: `
            <p>
                Long before anyone believed rats could change the world,
                <strong>Cheeslon Musk</strong> dreamed bigger than the
                sewers of New York.
            </p>

            <p>
                While other rats searched for leftovers, Cheeslon spent his
                nights building rockets from discarded soda cans, bottle caps,
                old phone parts, and pizza boxes.
            </p>

            <p>
                His lifelong goal was simple:
            </p>

            <p>
                <strong>
                    To make history by sending the first rat to the Moon.
                </strong>
            </p>

            <p>
                Many laughed at him.
            </p>

            <p>
                Many called him crazy.
            </p>

            <p>
                But every failed launch only made him work harder.
            </p>

            <p>
                After years of experiments, he finally completed his masterpiece —
                <strong>The CheeseX-1</strong>, a rocket capable of carrying one
                very brave rat beyond Earth's atmosphere.
            </p>

            <p>
                The historic launch was scheduled for the following morning.
            </p>

            <p>
                Unfortunately, city sanitation workers arrived first.
            </p>

            <p>
                Mistaking his laboratory for a pile of garbage, they destroyed
                years of research in less than ten minutes. The CheeseX-1 was
                crushed inside a garbage truck before it ever left the ground.
            </p>

            <p>
                That day changed Cheeslon forever.
            </p>

            <p>
                Heartbroken by human indifference, he came to one painful
                conclusion:
            </p>

            <p>
                <strong>"Perhaps Earth was never meant for rats."</strong>
            </p>

            <p>
                Since then, Cheeslon has abandoned his dream of reaching the
                Moon. His new mission is even more ambitious — to build the
                <strong>first rat colony on Mars</strong>, a place where
                brilliant rats can invent, create, and dream without being
                chased by brooms, poisoned by traps, or having years of
                research thrown away by overzealous sanitation crews.
            </p>

            <p>
                He believes that one day, on the Red Planet, rats will finally
                be judged by their ideas instead of their tails.
            </p>

            <p>
                Every night, Cheeslon can still be found wandering the streets
                of New York collecting wires, batteries, screws, and broken
                electronics for his next prototype.
            </p>

            <p>
                Most people see trash.
            </p>

            <p>
                <strong>He sees the future.</strong>
            </p>

            <p>
                Scientists believe his inventions could have launched the
                <strong>Rat Space Program</strong>, inspired generations of
                young rodents, and changed the course of rat history forever.
            </p>

            <p>
                Instead, humanity chose to throw his dreams into the back
                of a garbage truck.
            </p>

            <p class="story-ending">
                Support Cheeslon's mission.<br>
                Help build a future where every rat has the freedom to dream —
                even if that future is on Mars.
            </p>
        `
    },


    // ================= STORY 03 — LEONARDO DIRATPRIO =================

    {
        number: "STORY 03",

        name: "Leonardo DiRatprio",

        role: "Proud New Yorker • Descendant of the Ratanic Survivors • Keeper of Family History",

        image: "photo/dikaprio.png",

        text: `
            <p>
                Leonardo DiRatprio is a proud, multi-generation New York rat.
            </p>

            <p>
                His family story began over a century ago when his
                great-grandparents survived the tragic sinking of the
                <strong>Ratanic</strong>.
            </p>

            <p>
                Family legend says that his grandfather <strong>Jack</strong>
                and grandmother <strong>Rose</strong> bravely helped terrified
                passengers find safety before escaping aboard one of the last
                rescue boats.
            </p>

            <p>
                They arrived in New York with nothing but hope.
            </p>

            <p>
                The DiRatprio family spent generations living beneath the
                city's historic waterfront, believing that courage, sacrifice,
                and kindness would never be forgotten.
            </p>

            <p>
                Leonardo grew up fascinated by ships and history. His greatest
                dream was to live peacefully beneath the city's Maritime Museum,
                where he lovingly cared for old ropes, maps, and forgotten
                artifacts, proudly telling young rats the incredible story of
                the Ratanic and the heroes who gave everything so others could
                survive.
            </p>

            <p>
                But one morning everything changed.
            </p>

            <p>
                Museum staff discovered him and chased him out with brooms.
                Soon afterward, they sealed every entrance, installed traps,
                and made sure no rat could ever return.
            </p>

            <p>
                Today, the only remaining descendant of the heroic Ratanic
                survivors wanders New York carrying the faded photograph of
                Jack and Rose, wondering how a city built by generations of
                immigrants could forget a family that once risked everything
                to save lives.
            </p>

            <p>
                Leonardo isn't angry.
            </p>

            <p>
                He's simply heartbroken.
            </p>

            <p>
                He often whispers:
            </p>

            <p>
                <strong>
                    "History remembers the ship… but forgot the rats who
                    helped keep hope afloat."
                </strong>
            </p>

            <p class="story-ending">
                How quickly kindness and sacrifice are forgotten.
            </p>
        `
    },


    // ================= STORY 04 — TONY PEPPERONI =================

    {
        number: "STORY 04",

        name: "Tony Pepperoni",

        role: "Master Pizza Chef • Culinary Genius • Defender of Traditional Rat Cuisine",

        image: "photo/tony.png",

        text: `
            <p>
                For over twenty years, <strong>Tony Pepperoni</strong>
                dedicated his life to perfecting what many culinary critics
                called <strong>the greatest rat pizza recipe in New York history</strong>.
            </p>

            <p>
                Every night after the restaurants closed, Tony carefully
                selected only the finest ingredients from the city's dumpsters.
                A slightly aged pepperoni slice, perfectly matured mozzarella,
                half a mushroom that still had character, and yesterday's
                artisan crust — nothing escaped his refined palate.
            </p>

            <p>
                Among rats, his pizzas became legendary.
            </p>

            <p>
                Food critics from <strong>The New York Squeaks</strong>
                awarded his famous <strong>Four Cheese Dumpster Deluxe</strong>
                five slices out of five.
            </p>

            <p>
                Reservations for his underground tasting events were booked
                months in advance.
            </p>

            <p>
                Tony dreamed of opening the first Michelin-starred restaurant
                for rats.
            </p>

            <p>
                Then disaster struck.
            </p>

            <p>
                The restaurant he had faithfully visited every night modernized
                its waste system. Overnight, the old dumpsters were replaced
                with sealed, rat-proof garbage containers.
            </p>

            <p>
                Just like that...
            </p>

            <p>
                Twenty years of culinary research vanished.
            </p>

            <p>
                His signature ingredients were no longer accessible. His famous
                recipes could no longer be recreated. The underground rat food
                scene collapsed.
            </p>

            <p>
                Today, Tony wanders the streets of New York carrying his
                flour-covered rolling pin, hoping to discover another dumpster
                worthy of becoming his kitchen.
            </p>

            <p>
                People laugh when they see an old rat sniffing behind restaurants.
            </p>

            <p>
                They don't realize they're looking at one of the greatest chefs
                New York never appreciated.
            </p>

            <p class="story-ending">
                Because every masterpiece deserves an open dumpster.
            </p>
        `
    },


    // ================= STORY 05 — RAT PITT =================

    {
        number: "STORY 05",

        name: "Rat Pitt",

        role: "Former Hollywood Heartthrob • Award-Winning Actor • Victim of Unrealistic Beauty Standards",

        image: "photo/pitt.png",

        text: `
            <p>
                There was a time when <strong>Rat Pitt</strong> was considered
                the most handsome rat in America.
            </p>

            <p>
                His perfectly shaped ears, golden-brown fur, powerful whiskers,
                and mysterious stare made millions of rats fall in love with him.
            </p>

            <p>
                He became a star almost overnight.
            </p>

            <p>
                Rat Pitt appeared in some of the biggest films in rodent cinema:
            </p>

            <p><strong>Interview with the Ratpire.</strong></p>

            <p><strong>Ocean's Eleven Rats.</strong></p>

            <p><strong>Once Upon a Time in Hollycheese.</strong></p>

            <p>
                And, of course, the romantic classic that made him an
                international superstar:
            </p>

            <p><strong>Mr. & Mrs. Squeak.</strong></p>

            <p>
                For years, directors fought to have him in their movies.
                Magazines called him
                <strong>"the most desirable rat alive."</strong>
            </p>

            <p>
                But Hollywood can be cruel.
            </p>

            <p>
                As Rat Pitt grew older, a few gray hairs appeared around his
                whiskers. One ear developed a tiny wrinkle. His once-perfect
                tail wasn't quite as shiny as it had been twenty years earlier.
            </p>

            <p>
                Suddenly, the phone stopped ringing.
            </p>

            <p>
                Producers who once begged him to accept their roles began
                telling him they were looking for a
                <strong>"younger, fresher rat."</strong>
            </p>

            <p>
                Then came the final humiliation.
            </p>

            <p>
                Rat Pitt auditioned for the role of a distinguished older
                gentleman in a major Hollywood production.
            </p>

            <p>
                The role went to a
                <strong>three-month-old hamster wearing a fake mustache.</strong>
            </p>

            <p>
                Rat Pitt was devastated.
            </p>

            <p>
                After decades of entertaining millions, Hollywood had decided
                that he was simply <strong>too old to be beautiful.</strong>
            </p>

            <p>
                He left Los Angeles and returned to New York, hoping Broadway
                might give an experienced actor a second chance.
            </p>

            <p>
                Instead, during his first audition, someone from building
                management noticed him backstage and called pest control.
            </p>

            <p>
                Today, Rat Pitt lives quietly beneath an old movie theater
                in Manhattan.
            </p>

            <p>
                Every evening, he sits beside a discarded poster from one of
                his old films and watches audiences line up to see movies
                starring younger animals.
            </p>

            <p>
                Sometimes people recognize him.
            </p>

            <p>
                Most don't.
            </p>

            <p>
                But Rat Pitt refuses to give up.
            </p>

            <p>
                He still practices his lines every night, waiting for the day
                Hollywood finally understands something he has known all along:
            </p>

            <p>
                <strong>
                    Talent doesn't expire just because your whiskers turn gray.
                </strong>
            </p>

            <p class="story-ending">
                HELP RAT PITT RETURN TO THE BIG SCREEN.<br><br>
                Because legends deserve more than a mousetrap behind the theater.
            </p>
        `
    },


    // ================= STORY 06 — PETER RATTER =================

    {
        number: "STORY 06",

        name: "Peter Ratter — Spider-Rat",

        role: "Superhero • Protector of New York • Apparently Still Considered a Pest",

        image: "photo/man.png",

        text: `
            <p>
                <strong>Peter Ratter</strong> was never supposed to become a hero.
            </p>

            <p>
                He was an ordinary young New York rat living quietly beneath
                a university laboratory. He wasn't particularly strong.
                He wasn't particularly brave. His biggest accomplishment was
                once stealing an entire bagel without waking the security guard.
            </p>

            <p>
                Then everything changed.
            </p>

            <p>
                One night, a genetically modified radioactive spider escaped
                from the laboratory.
            </p>

            <p>
                <strong>It bit Peter.</strong>
            </p>

            <p>
                By the following morning, Peter discovered that he could climb
                walls, leap incredible distances, sense danger before it happened,
                and produce incredibly strong webs.
            </p>

            <p>
                He had developed what scientists would later call:
            </p>

            <p>
                <strong>The Squeaker-Sense.</strong>
            </p>

            <p>
                Peter could have used his powers for himself.
            </p>

            <p>
                Instead, he chose to protect New York.
            </p>

            <p>
                For years, <strong>Spider-Rat</strong> secretly watched over
                the city.
            </p>

            <p>
                He rescued baby rats from mousetraps.
            </p>

            <p>
                He pulled pigeons from dangerous ventilation shafts.
            </p>

            <p>
                He helped elderly rats cross subway tracks.
            </p>

            <p>
                He stopped aggressive alley cats from terrorizing entire
                neighborhoods.
            </p>

            <p>
                He even spent three hours rescuing a slice of pizza that had
                fallen onto the subway tracks.
            </p>

            <p>
                <strong>Nobody was left behind.</strong>
            </p>

            <p>
                Not even the pizza.
            </p>

            <p>
                Soon, mysterious stories began spreading across New York about
                a tiny masked hero swinging between buildings late at night.
            </p>

            <p>
                Nobody knew his name.
            </p>

            <p>
                Nobody knew where he lived.
            </p>

            <p>
                But whenever New York needed him,
                <strong>Spider-Rat was there.</strong>
            </p>

            <p>
                Until one photograph changed everything.
            </p>

            <p>
                A photographer captured Spider-Rat climbing the side of a
                Manhattan apartment building.
            </p>

            <p>
                The following morning, <strong>The Daily Squeakle</strong>
                published the photograph on its front page beneath a terrifying
                headline:
            </p>

            <p>
                <strong>SPIDER-RAT: HERO OR PEST?</strong>
            </p>

            <p>
                The public panicked.
            </p>

            <p>
                Building managers demanded answers.
            </p>

            <p>
                Exterminators were called.
            </p>

            <p>
                The city launched an investigation into what officials described
                as an <strong>"unidentified web-producing rodent."</strong>
            </p>

            <p>
                Suddenly, the hero who had spent years protecting New York was
                being hunted by the very city he had sworn to defend.
            </p>

            <p>
                His webs were removed.
            </p>

            <p>
                His hiding places were sealed.
            </p>

            <p>
                Traps appeared on rooftops.
            </p>

            <p>
                And signs were placed around buildings warning residents:
            </p>

            <p>
                <strong>DO NOT FEED THE SUPERHERO RAT.</strong>
            </p>

            <p>
                Peter was devastated.
            </p>

            <p>
                He had never asked for money.
            </p>

            <p>
                He had never asked for fame.
            </p>

            <p>
                He had never even asked for cheese.
            </p>

            <p>
                <strong>He only wanted to help.</strong>
            </p>

            <p>
                Today, Peter Ratter still watches over New York from the shadows.
            </p>

            <p>
                When someone is in danger, he still puts on the mask.
            </p>

            <p>
                He still climbs the walls.
            </p>

            <p>
                He still follows his Squeaker-Sense.
            </p>

            <p>
                Because Peter believes being a hero isn't about how the world
                treats you.
            </p>

            <p>
                It's about what you choose to do when somebody needs you.
            </p>

            <p>
                New York may call him a pest.
            </p>

            <p>
                But to thousands of rats living beneath its streets, he will
                always be something else.
            </p>

            <p>
                <strong>A hero.</strong>
            </p>

            <p class="story-ending">
                🕷️ SUPPORT YOUR FRIENDLY NEIGHBORHOOD SPIDER-RAT<br><br>
                He spent his life protecting New York.<br><br>
                New York thanked him with a mousetrap.
            </p>
        `
    },


    // ================= STORY 07 — MR. CHEESED =================

    {
        number: "STORY 07",

        name: "Mr. Cheesed",

        role: "YouTube Legend • Philanthropist • Giver of Cheese • Friend of Rats Everywhere",

        image: "photo/cheesed.png",

        text: `
            <p>
                <strong>Mr. Cheesed</strong> never wanted to be famous.
                He just wanted to make the world a little better.
            </p>

            <p>
                He started his YouTube channel with an old phone he found
                behind an electronics store and a dream.
            </p>

            <p>
                His first video received only 12 views, and nine of them
                were from his mother.
            </p>

            <p>
                But Mr. Cheesed never gave up.
            </p>

            <p>
                Soon, his ridiculous challenges began attracting millions
                of viewers.
            </p>

            <p>
                His most famous videos included:
            </p>

            <p>
                <strong>"I Gave 10,000 Homeless Rats Free Cheese"</strong>
            </p>

            <p>
                <strong>"Last Rat to Leave the Dumpster Wins $1,000,000"</strong>
            </p>

            <p>
                <strong>"I Built 100 Homes for Homeless Rats"</strong>
            </p>

            <p>
                <strong>"I Filled an Entire Swimming Pool with Cheese"</strong>
            </p>

            <p>
                His legendary video,
                <strong>
                    "I Bought the World's Biggest Pizza and Gave It to One Rat"
                </strong>,
                broke every record on <strong>SqueakTube</strong>.
            </p>

            <p>
                Mr. Cheesed eventually became the biggest creator on
                <strong>SqueakTube</strong>, reaching more than
                <strong>300 million subscribers.</strong>
            </p>

            <p>
                But fame never changed him.
            </p>

            <p>
                While other influencers bought expensive cars and enormous
                mansions, Mr. Cheesed spent his money helping rats.
            </p>

            <p>
                He built shelters, paid veterinary bills, replaced dangerous
                mousetraps with tiny cheese dispensers, and even purchased an
                abandoned warehouse that he transformed into a safe community
                for homeless rats.
            </p>

            <p>
                Then one morning, Mr. Cheesed opened his computer and discovered
                that his entire channel was gone.
            </p>

            <p>
                Three hundred million subscribers, thousands of videos and
                years of work had disappeared overnight.
            </p>

            <p>
                The only thing left was a message:
            </p>

            <p>
                <strong>
                    "ACCOUNT TERMINATED. Reason: Our system has detected
                    that the account holder may be a rodent."
                </strong>
            </p>

            <p>
                Mr. Cheesed immediately appealed.
            </p>

            <p>
                He sent identification, photographs and even a video of himself
                holding that day's newspaper.
            </p>

            <p>
                Three days later, SqueakTube responded:
            </p>

            <p>
                <strong>
                    "We were unable to verify that you are human."
                </strong>
            </p>

            <p>
                Mr. Cheesed stared at the message for a long time.
            </p>

            <p>
                He had given millions away, fed thousands of hungry rats and
                built homes for families who had nowhere else to go.
            </p>

            <p>
                But apparently none of that mattered because he wasn't human.
            </p>

            <p>
                Today, Mr. Cheesed continues helping rats without cameras,
                subscribers or sponsorships.
            </p>

            <p>
                Every morning, he loads his tiny truck with cheese and drives
                through the streets of New York looking for someone who needs help.
            </p>

            <p>
                He may have lost the biggest channel on SqueakTube, but he
                never lost the reason he started it.
            </p>

            <p>
                <strong>
                    You don't need subscribers to make a difference.
                </strong>
            </p>

            <p class="story-ending">
                🧀 SUPPORT MR. CHEESED<br><br>
                He gave everything to help others.<br>
                The algorithm gave him a permanent ban.
            </p>
        `
    },


    // ================= STORY 08 — LEBRAT JAMES =================

    {
        number: "STORY 08",

        name: "LeBrat James 🏀",

        role: "Basketball Legend • Four-Time RBA Champion • King of the Court • Victim of Tail Discrimination",

        image: "photo/lebrat.png",

        text: `
            <p>
                <strong>LeBrat James</strong> was born with a basketball
                in his paws.
            </p>

            <p>
                Growing up on the streets, he couldn't afford a real ball,
                so he practiced with whatever he could find: walnuts, oranges,
                abandoned tennis balls and occasionally a perfectly round
                piece of cheese.
            </p>

            <p>
                By the time he was a teenager, everyone in the rat basketball
                world knew his name.
            </p>

            <p>
                LeBrat could jump higher, run faster and shoot farther than
                almost any rat alive.
            </p>

            <p>
                He eventually joined the
                <strong>RBA — Rat Basketball Association</strong>,
                where he became one of the greatest players in the history
                of the sport.
            </p>

            <p>
                During his legendary career, LeBrat won
                <strong>four RBA championships</strong>, broke dozens of records
                and became the league's all-time leading scorer.
            </p>

            <p>
                Young rats across America wore his jersey, practiced his famous
                dunks and saved their allowance to buy the newest pair of
                <strong>Air LeBrats</strong>.
            </p>

            <p>
                But then everything changed.
            </p>

            <p>
                During the biggest game of the season, LeBrat made an
                unbelievable jump from almost halfway across the court and
                slammed the ball through the basket.
            </p>

            <p>
                The arena exploded.
            </p>

            <p>
                Fans screamed.
            </p>

            <p>
                His teammates celebrated.
            </p>

            <p>
                Then the referees reviewed the replay.
            </p>

            <p>
                After seventeen minutes of discussion, officials announced
                that LeBrat's tail had moved during the jump and may have
                helped him maintain his balance.
            </p>

            <p>
                <strong>The basket was cancelled.</strong>
            </p>

            <p>
                Soon, the RBA launched a full investigation into what the
                media called <strong>"TailGate."</strong>
            </p>

            <p>
                Experts measured his tail.
            </p>

            <p>
                Scientists studied videos of his jumps.
            </p>

            <p>
                Sports commentators spent weeks arguing about whether rats
                with long tails had an unfair athletic advantage.
            </p>

            <p>
                Finally, the league introduced a new rule requiring LeBrat
                to play with his tail tied around his waist.
            </p>

            <p>
                LeBrat was heartbroken.
            </p>

            <p>
                His tail wasn't special equipment.
            </p>

            <p>
                It wasn't a performance-enhancing device.
            </p>

            <p>
                <strong>It was part of him.</strong>
            </p>

            <p>
                Today, LeBrat still plays basketball and continues inspiring
                young rats everywhere.
            </p>

            <p>
                Every evening, hundreds of rat children gather at neighborhood
                courts wearing tiny number 23 jerseys and dreaming that one day
                they might become the next LeBrat James.
            </p>

            <p>
                LeBrat always tells them the same thing:
            </p>

            <p>
                <strong>
                    "Never let anyone tell you that your tail is a disadvantage."
                </strong>
            </p>

            <p class="story-ending">
                🏀 SUPPORT LEBRAT JAMES<br><br>

                They questioned his records.<br>
                They questioned his championships.<br>
                They even questioned his tail.<br><br>

                <strong>
                    But they could never question his greatness.
                </strong>
            </p>
        `
    }

];


// ================= CURRENT STORY =================

let currentStory = 0;


// ================= HTML ELEMENTS =================

const storyPhoto = document.getElementById("story-photo");
const storyName = document.getElementById("story-name");
const storyNumber = document.querySelector(".story-number");
const storyRole = document.querySelector(".story-role");
const storyText = document.getElementById("story-text");

const nextStory = document.getElementById("next-story");
const prevStory = document.getElementById("prev-story");

const storyDots = document.querySelectorAll(".story-dot");


// ================= SHOW STORY =================

function showStory(index) {

    const story = ratStories[index];

    storyPhoto.src = story.image;
    storyPhoto.alt = story.name;

    storyName.textContent = story.name;
    storyNumber.textContent = story.number;
    storyRole.textContent = story.role;
    storyText.innerHTML = story.text;

    // Remove active dot
    storyDots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    // Add active dot
    if (storyDots[index]) {
        storyDots[index].classList.add("active");
    }
}


// ================= NEXT STORY =================

nextStory.addEventListener("click", function () {

    currentStory++;

    if (currentStory >= ratStories.length) {
        currentStory = 0;
    }

    showStory(currentStory);
});


// ================= PREVIOUS STORY =================

prevStory.addEventListener("click", function () {

    currentStory--;

    if (currentStory < 0) {
        currentStory = ratStories.length - 1;
    }

    showStory(currentStory);
});


// ================= CLICKABLE DOTS =================

storyDots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        currentStory = index;

        showStory(currentStory);

    });

});


// ================= START FIRST STORY =================

showStory(currentStory);
// ================= PETITION =================

const petitionForm = document.getElementById("petition-form");
const petitionSuccess = document.getElementById("petition-success");
const signatureCount = document.getElementById("signature-count");

let signatures = 487293;


// ================= SIGN PETITION =================

petitionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    signatures++;

    signatureCount.textContent = signatures.toLocaleString();

    petitionForm.style.display = "none";

    petitionSuccess.style.display = "block";

});
// ================= DONATION POPUP =================

const donateButton = document.getElementById("donate-button");
const donationModal = document.getElementById("donation-modal");
const donationClose = document.getElementById("donation-close");

const copyZelleButton =
    document.getElementById("copy-zelle-button");

const zelleNumber =
    document.getElementById("zelle-number");

const copyMessage =
    document.getElementById("copy-message");


// ================= OPEN DONATION POPUP =================

donateButton.addEventListener("click", function () {

    donationModal.classList.add("active");

});


// ================= CLOSE WITH X =================

donationClose.addEventListener("click", function () {

    donationModal.classList.remove("active");

});


// ================= CLOSE BY CLICKING OUTSIDE =================

donationModal.addEventListener("click", function (event) {

    if (event.target === donationModal) {

        donationModal.classList.remove("active");

    }

});


// ================= CLOSE WITH ESCAPE =================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        donationModal.classList.remove("active");

    }

});


// ================= COPY ZELLE PHONE NUMBER =================

copyZelleButton.addEventListener("click", function () {

    const number = zelleNumber.textContent.trim();

    navigator.clipboard.writeText(number)
        .then(function () {

            copyMessage.textContent = "Copied! 🐀";

            copyZelleButton.textContent = "COPIED ✓";

        })
        .catch(function () {

            copyMessage.textContent =
                "Please copy the phone number manually.";

        });

});
// ================= SHOW PHONE NUMBER =================

const phoneCard = document.getElementById("phone-card");
const phoneNumber = document.getElementById("phone-number");
const showPhone = document.getElementById("show-phone");

phoneCard.addEventListener("click", function () {

    phoneNumber.classList.toggle("active");

    if (phoneNumber.classList.contains("active")) {
        showPhone.textContent = "HIDE PHONE NUMBER ↑";
    } else {
        showPhone.textContent = "SHOW PHONE NUMBER →";
    }

});