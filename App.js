import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()
// console.log(connector)

function App({ cars }) {
    // console.log(props)
    return html`
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>

        <button onclick="dispatch('ADD', 'Audi')">Add Car</button>
    `
}
export default connector(App)