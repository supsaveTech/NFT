import React from "react";
import "./style.css";
const Index = () => {
  return (
    <section className="main-wrapper">
      <div className="inner_wrapper">
        <div className="inner_content">
          <h2>Khena Metaverse</h2>
          <p>
            The Khena Metaverse is being developed as a SandBox MMO game, users
            will be able to render their 2D GoosePunk NFTs as 3D playable
            characters inside the GoosePunks metaverse. Inside the metaverse you
            will find yourself able to participate in an economy, designed and
            made by the players for the players.
          </p>
          <p>
            {" "}
            A player can own land, cities, houses, shops, forges, factories and
            so much more. All which interact with each other inside the economy.
            For instance, if a user owns a city and another user wants to build
            a house in said city, the person who owns the city can decide on
            whether to charge the user rent or taxes on his house. If a player
            finds themselves without any assets starting off in the game, that
            player can then, mine for resources, hunt, perform a job or task for
            someone else to gain NGT that can then be used to facilitate trade
            for in-game items, buy a house, or work his way up to purchasing a
            city!
          </p>
          <p>
            As the GoosePunks project moves forward, GoosePunk holders will be
            allowed to decide, create and vote on concepts that benefit the
            GoosePunks metaverse and project. Currently, a user can join our
            Discord to take part in a faction and compete in concept
            competitions, creating lore for the game, giveaways, airdrops and
            more.
          </p>
          <p>
            All Legendary GoosePunk holders will have special benefits in game
            and be added into weapon, armor, and companion drops.
          </p>
          <p>
            {" "}
            Join our discord and choose your faction now!
            <a href="https://discord.gg/HVMShDU5vf">
              {/* <i class="fab fa-discord"></i> */}
              https://discord.gg/HVMShDU5vf
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
