import logo from '../../logo.svg';
import MainHeader from '../MainHeader/index'

function GeneralCard(){
    return(
        <div className="card">
            <MainHeader/>
            <img src={logo} alt=""/>
            <h2>¡¡¡Hola Team Horapp!!!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque expedita hic veniam in quasi?</p>
        </div>
    )
}

export default GeneralCard