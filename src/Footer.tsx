type Producto = {
    id: number;
    nombre: string;
    precio: number;
}

type Props = {
    producto: Producto[]
    number: number
}

const Footer = ({producto, number}: Props) => {
  return (
    <div>Footer</div>
  )
}

export default Footer