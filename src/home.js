import Logo from './nftimg.jpeg';

function Home() {
    return (
        <div>
            <figure class="image ">
                <img src="https://agentestudio.com/uploads/post/image/187/main_Article_Covers_NFT.png" />
            </figure>
            <header className="hero is-info is-small">
                <div className=" is-centered">
                    <div class=" hero-body">
                        <p class="title">
                            BUY NFTs
                        </p>
                        <p class="subtitle">
                            A place to buy your favourite <strong>NFTs</strong>
                        </p>
                    </div>
                </div>
            </header>
            <figure class="image ">
                <img src="https://discover.fiverr.com/wp-content/uploads/ezgif.com-gif-maker-3.gif" />
            </figure>
            <header className="hero is-info is-small">
                <div className=" is-centered">
                    <div class=" hero-body">
                        <p class="title">
                            SELL NFT
                        </p>
                        <p class="subtitle">
                            A place to sell and earn from your favourite <strong>NFTs</strong>
                        </p>
                    </div>
                </div>
            </header>
            <figure class="image ">
                <img src={Logo} />
            </figure>
        </div>
    );
}

export default Home;

