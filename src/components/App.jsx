import '../styles/index.scss'

import Pokemons from './Pokemons'
import charmander from '../images/charmander.png'
import bulbasaur from '../images/bulbasaur.svg'

const App = () => {
    return (
        <>
            <section className="hero">
            </section>
            <main>
                <section>
                    <h1>Hey this is react with webpack5 config</h1>
                </section>
                <img src={charmander} alt="charmander-png" width="300" />
                <img src={bulbasaur} alt="bulbasaur-svg" width="300" />
            </main>
            <Pokemons />
        </>
    )
}

export default App