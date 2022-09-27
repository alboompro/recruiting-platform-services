import Header from '../../components/Header/Header';
import CardCoffees from '../../components/CardCoffees/CardCoffees';

import './style.css';

const Menu = () => {
    const dataCoffees = [
        {
            id: 1,
            name: 'Café Duplo',
            time: '0:45',
            image: '../../../images/coffee.svg'
        },
        {
            id: 2,
            name: 'Café Expressso',
            time: '0:45',
            image: '../../../images/cafe-duplo.svg'
        },
        {
            id: 3,
            name: 'Mocha',
            time: '2:30',
            image: '../../../images/mocha.svg'
        },
        {
            id: 4,
            name: 'Americano',
            time: '2:30',
            image: '../../../images/cafe-americano.svg'
        },
        {
            id: 5,
            name: 'Cappuccino',
            time: '2:30',
            image: '../../../images/cappuccino.svg'
        },
    ]

    console.log(dataCoffees[0].name)
    return(
        <>
        <Header />
        {dataCoffees.map((e) => {
            return <CardCoffees name={e.name} time={e.time} image={e.image} />
        })}
        <button>CONTINUAR</button>
        </>
    );
}

export default Menu;