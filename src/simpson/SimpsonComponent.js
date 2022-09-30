import './style.css'

function SimpsonComponent(props){
   let {itemName, pic} = props;
    let classNameItem = 'card';
    return (
            <div className={classNameItem}>
                <h2>{itemName}</h2>
                <img src={pic} alt={}/>
            </div>

    );
}
export default SimpsonComponent;