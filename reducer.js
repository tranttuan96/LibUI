const init = {
    cars: ['BMW', 'Porsche','Mercedes']
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD':
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        default:
            return state
    }
}