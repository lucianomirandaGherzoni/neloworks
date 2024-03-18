import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img }) => {
  return (
    <div className='productoCard'>
      <img src={img} alt={nombre} />
      <div className="producto-descripcion-card"> 
      <h3>{nombre}</h3>
      <p><strong>${precio}</strong></p>
      <Link to={`/item/${id}`} className="detalles-button">Ver Detalles</Link>
      </div>
 
    </div>
  )
}

export default Item