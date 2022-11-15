function MetamaskConnect() {


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

        </div>
    );
}

export default MetamaskConnect;