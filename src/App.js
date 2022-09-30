//import logo from './logo.svg';
import './App.css';
import SimpsonComponent from "./simpson/SimpsonComponent";

   //1. Описати всю сім'ю сімпсонів (5 персонажів)
//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів
function App() {
    return(
    <div className = "wrap">
        <SimpsonComponent
            itemName={'Homer'}
        pic={"https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg"}
        />
        <SimpsonComponent
            itemName={'Bart'}
        pic={"https://i.pinimg.com/564x/9b/d6/e4/9bd6e48f25e788de77362243e28e84af.jpg"}/>
        <SimpsonComponent
            itemName={'Marge'}
            pic={'https://citaty.info/files/characters/760.png'}/>
        <SimpsonComponent
            itemName={'Lisa '}
            pic={'https://citaty.info/files/characters/638.png'}/>
        <SimpsonComponent
            itemName={'Maggie '}
            pic={'https://i.discogs.com/OCEI91oQOkbvLbA5f1rUpLSsjO_GQ38oyNataTCbJ7g/rs:fit/g:sm/q:90/h:514/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MjktMTQyMzQxNDg4/NC02Nzc5LmpwZWc.jpeg'}/>

    </div>
    )


}



export default App;
