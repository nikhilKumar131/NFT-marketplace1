import { render } from "@testing-library/react";

function Navigation() {

    // Nested functions
    async function MetaMaskHandler() {
        console.log("MetaMask is pressed");

        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log(account);
        }
        else { console.log('Install metamask first'); }

};




return (
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            {/* Buttons on the left side */}
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item is-hoverable" href="/">
                        Home
                    </a>

                    <a class="navbar-item is-hoverable" href="/Buy">
                        Buy NFTs
                    </a>

                    <a class="navbar-item is-hoverable" href="/Sell">
                        Sell NFTs
                    </a>

                    <a class="navbar-item is-hoverable" href="/Create">
                        Create NFTs
                    </a>
                </div>

                {/* Buttons on right side */}
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary" onClick={MetaMaskHandler}>
                                <strong>MetaMask Connect</strong>
                            </a>
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navigation;