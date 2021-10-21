import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useHistory } from "react-router-dom";
import {  
  animateScroll as scroll,  
} from "react-scroll";
import "./lore.css";

const Lore = ({ account }) => {
  let history = useHistory();
  const backtoHome = () => {
    history.push("/");
    scroll.scrollToTop();
  };
  return (
    <>
      <Header account={account} />
      <div className="lore-main-wrapper">
        <div className="lore-inner-wrapper">
          <button className="back-btn" onClick={() => backtoHome()}>
            Back
          </button>
          <h1>GoosePunks Lore</h1>
          <p>
            2034. The humans of the planet once called Earth, reach for
            extraordinary technological heights. During a great time of
            suspicion and accusation, the world’s governments couldn’t maintain
            peace. Four mega-nations arm themselves for war. In these days,
            legends clash and lives are lost. Ground forces are deployed, and
            they prepare fortifications. What made this war different from the
            ones before or since? One technician disobeyed orders - not wanting
            fame, power, or riches, but rather for all of humanity to be
            obliterated
          </p>
          <p>
            1st November 2035, the final nuclear missile is launched. Within
            hours, most of humanity ceases to exist. Nearly every last body is
            burned to a crisp. The rest of the humans die within years. As a
            result, thousands of years pass while the Earth stands still. Then,
            against all odds, a waterfowl creates a tool. 9950 years have passed
            and much like the creation of Earth itself, a miracle occurs. 
          </p>
          <p>
            1209 years since the first Goose demonstrates awareness and
            intellect the Geese have emerged as the dominant lifeform and the
            planet now called Khena! Geese. Of all things! Now for the first
            time in more than 10000 years, peace is established. These geese
            have no real understanding of the situation from 2034 and are
            nothing like their human counterparts from the ancient past.
            Evolving in and amongst radioactive remains and wreckage, they
            become robust. Many develop technology and become cyborgs, adapting
            to survive and thrive in even the harshest conditions. Early on,
            during the last 1200 years, Geese build a city and surround it with
            a transparent dome to keep them safe from potential threats.
            Research suggests that if the geese have evolved and resurged, what
            is there to say that other lifeforms wouldn’t follow? As more years
            pass, the city is expanded and developed further. What starts as a
            small and flat civilization barely scraping by becomes a metropolis
            filled with culture. However, with the rise in population
            civilization struggles. Factions begin to form. Riots start to break
            out with several sectors of society questioning the rights of the
            “Crowned,” the ruling faction of society. Oppression and suppression
            lead to civil war. Historians familiar with the ancient past note
            how similar the situation is to that when the Earth was nearly
            destroyed.  In contrast to the Last Great War however, there are not
            competing governments, but factions of Geese. These factions are
            generally referred to as Renegades, Drifters, Swans and Crowned.
            Each faction has their own unique agenda and all of them refuse to
            back down until they achieve supremacy. Eventually, there are only
            three factions.
          </p>
          <p>
            The Renegades, the industrious citizens, are the last faction to
            form a platform. Incidentally, they only organize in order to defend
            themselves against the other factions. They are generally peaceful,
            cyborgs minding their own business. Their agenda? Phwah, to do goose
            things, of course, like eat futuristic and aquatic creatures and mow
            their lawns with their sharp beaks. 
          </p>
          <p>
            The Drifters are incredibly clever botanists focused on nature and
            incorporating it with technology to elevate it further. They are an
            odd bunch of genetically mutated cyborgs that hide on the outskirts
            of the dome cultivating and plotting. But these plots become more
            complex. Unlike the Renegades, this faction expects civil war to
            break out and has since the start of the construction of the great
            city. Even at the beginning, when there was a clear and unquestioned
            democracy, the Drifters were already drifting away. Their life
            consists mainly of daily scavenger parties sent out by their leader,
            who they call Driftking. The Drifters become fed up with living on
            such a barren and shattered planet and want to migrate to a new
            planet, where they can thrive. Ambition plagues them and building a
            radiation-powered super rocket is now their only purpose. While
            scavenging, drifter crews are always being challenged by yet another
            faction, the Swans. 
          </p>
          <p>
            The Swans. Rather than scavenging on the outskirts like mad rats,
            these are the civilized. Swans are a robust society that lives by
            the rules and is obsessed with technology and robotics. The only
            similarity between the Drifters and Swans is that both groups are
            cybernetic, but other than this, their aims are different, and they
            hate each other. Yet again, the poor Renegades are in the middle of
            this conflict. The Swans want unrivalled power. Democracy ultimately
            isn’t satisfactory because it enables other geese to question
            decisions. Unsurprisingly, the Swans don’t take to dissent, so they
            want to eliminate “freedom” and rule the city as a totalitarian
            state. They intend to rule over every goose on the planet, and those
            that refuse will be forced into submission.
          </p>
          <p>
            It’s now nearly 2000 years since the founding of the Great City and
            the conflict has escalated to a tipping point. Swans send out
            patrols to try and catch solitary Drifters and Renegades for
            interrogation and intelligence regarding the plans of the other
            factions. Drifter camps are incinerated by newly built flamethrowers
            and residents are taken captive. 
          </p>
          <p>
            Forced to build armaments and weapons for the Swans, and paranoid
            for the inevitable outbreak of war, the Renegades hide peacefully,
            trying to evade capture as long as they can. What can a bunch of
            defenseless and untrained geese do against legions of robust
            soldiers armed with lethal technology? Guerilla tactics were
            considered the only viable option but determined unlikely to work.
            Plus, such tactics went against the very nature of the Renegades.
            Without a leader - because Renegades believe in cooperation and
            sharing responsibility - they hide to survive.
          </p>
          <p>
            Just when all seems lost the Renegades decide to turn themselves in
            and hope for mercy. They conclude that helping the Swans may be
            beneficial. New technology will improve their quality of life.
            Venturing out of their hidden villages, they slowly traverse the
            toxic wasteland toward the dome. After days and days, they finally
            approach the dome and know that they are just hours away. Hoping
            that they are making the right decision, while they continue nearing
            the dome, they are ambushed! Mysterious hooded figures appear, along
            with smoke. Too late, but also with nowhere to run, the Renegades
            can only think about escaping the enveloping fog. Soon all the
            Renegades are lying sleeping on the ground.
          </p>
          <p>
            What seems like minutes later, the Renegades wake up in a strange
            camp surprisingly unharmed. They begin to stir but are very confused
            because they all believed they were facing a “meet the end” moment.
            However, they were all alive, and all accounted for. Whoever
            captured them, must intend peace. But who?
          </p>
          <p>
            A robed figure approached and, “we seek an alliance,” said a
            distorted voice emanating from a concealed face. 
          </p>
          <p>
            The Renegades are gob smacked, being so sure that the whole
            population of Khena is against them. They live a standard goose life
            but still, they are mocked and ridiculed relentlessly. Is this their
            chance to end this fowl treatment? As instructed, for the first time
            in their history, the Renegades select a leader among themselves to
            communicate with the hooded figure. While chattering to themselves
            the murmuring quiets when the leader of the hooded figures
            approaches.
          </p>
          <p>So, who will come forth and speak for you as a whole?”</p>
          <p>
            Having never been in this situation, the tallest of Renegades was
            chosen to be spokesgoose. Names weren’t really used or even given in
            Renegade culture except in times when individuals needed to be
            specified, like now. The leader asks to be called Kevin.
          </p>
          <p>
            Kevin introduces himself and asks, “please, remove your hood, who
            are you?”.
          </p>
          <p>
            All eyes are firmly set on the hood as it is slowly pulled back.
            Underneath the hood is a goose...with a metal arch over her bill and
            a vibrant cloud leaking from her nostrils. She speaks in a drawn-out
            and grandiose fashion.
          </p>
          <p>
            “I am Branta, leader of the Crowned. We are the true elite, the
            bringers of peace and freedom. We are gods among Geese!”
          </p>
          <p>
            Unlike the Swans, these beings are certain of their own morality and
            superiority, and they use their powers only for what they deem the
            greater good. The fourth faction! They exist.
          </p>
          <p>
            “We’d like to form a coalition with you, the Renegades, and also the
            Drifters, they that scrounge around the outskirts! We finally
            located you and, on our travels, we came across them capturing them
            relatively bloodlessly. They clearly have a strong grasp on
            weaponry, and I think that we can use it to our advantage.”
          </p>
          <p>
            The fate of all geese on Khena is now on the shoulders of the
            Renegades. Once heralded as the least important or interesting
            faction, they are now the polar opposite. If they accept the offer
            to form a coalition, the two groups combined may stand a chance at
            recruiting the Drifters and together, all three may actually
            overthrow the swans. However, if they reject the alliance, the
            Drifters will almost certainly refuse to join the Crowns. There
            seems to be only one hope, and the fate of Khena is the only thing
            at stake!
          </p>
          <button className="back-btn" onClick={() => backtoHome()}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lore;
