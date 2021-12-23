//import {Form} from "react-bootstrap";
import ProductService from "../services/ProductService";
import { Form } from "react-bootstrap";
function getProductos(setProductos, productos) {
  ProductService.getAll()
    .then((response) => {
      if (response.data !== null) {
        if (response.data.length !== productos.length) {
          setProductos(response.data);
        }
      } else {
        setProductos([]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function getProductosPorDescripcion(e,setProductos) {
    let valor = e.target.value;
    ProductService.getByWord(valor).then((response)=>{
        if (response.data !== null) {
            setProductos(response.data);
          } else {
            setProductos([]);
          }
    }).catch((err)=>{
        console.log(err)
    })
}

function getProductosPorPrecio(e,setProductos) {
    let valor = e.target.value;
    ProductService.findByPrice(valor).then((response)=>{
        if (response.data !== null) {
            setProductos(response.data);
          } else {
            setProductos([]);
          }
    }).catch((err)=>{
        console.log(err)
    })

}
function Filtro(props) {
  switch (props.filtro) {
    case "":
      getProductos(props.setProductos, props.productos);
      return <></>;
    case "description":
      return (
        <>
        <Form>
        <Form.Group className="mb-3">
        <Form.Label>Ingrese parte de la descripción</Form.Label>
        <Form.Control type="text" placeholder="Descripción" onChange={(e)=>{getProductosPorDescripcion(e,props.setProductos)}} onSubmit={e=>{e.preventDefault()}} />
        </Form.Group>
        </Form>
      </>
      );
    case "price":
        return (
            <>
            <Form>
            <Form.Group className="mb-3">
            <Form.Label>Ingrese precio</Form.Label>
            <Form.Control type="number" placeholder="Precio" onChange={(e)=>{getProductosPorPrecio(e,props.setProductos)}} onSubmit={(e)=>{e.preventDefault()}} />
            </Form.Group>
            </Form>
          </>
        );
    default:
      return <></>;
  }
}

export default Filtro;
