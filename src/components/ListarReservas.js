import { CardReserva } from "../styles/styledComp/listReservaStyle"

const ListarReservas = ({toList}) => {

    return (
        <div>
            {
                toList.map((re, index) => (
                    <CardReserva key={index}>
                        <img src={re.reserva.img[0]} alt="Estadia"/>
                        <p><strong>Estadia: </strong>{re.reserva.nombreEstadia}</p>
                        <p><strong>Ubicacion: </strong>{re.reserva.ubicacion}</p>
                        <p><strong>Fecha llegada: </strong>{re.reserva.date1}</p>
                        <p><strong>Fecha ida: </strong>{re.reserva.date2}</p>
                    </CardReserva>
                ))
            }
        </div>
    )
}

export default ListarReservas