Kada smo kreirali komponentu koristili smo neke tagove koji liče na xml, html...
To je zapravo JSX ( JavaScript XML ), koji nam dosta olakšava pisanje onoga što se kasnije dobije njegovim kompajliranjem a to su react gradivne jedinice (react elementi).
A i dosta je razumljivije i jednostavnije kada koristimo JSX.

Ovako bi izgledala kompoennta sa JSX-om:

        function Post () {
            return (<div>
                <h6 className='header'> React </h6>
                <section> Text o reactu... </section>
            </div>;)
        }

Ovako bi izgledala kompoennta bez JSX-a:

        function Post () {
            return React.createElement('div', null, {
                React.createElement('h6', {className: 'header'}, 'React'),
                React.createElement('section', null, 'Text o reactu...')
            })
        }