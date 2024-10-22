import Clients from "../components/service/Clients"
import ConfirmSystem from "../components/service/ConfirmSystem"
import ConsultationFlow from "../components/service/ConsultationFlow"
import SolarEnergy from "../components/service/SolarEnergy"

export const ServicePage = () => {
  return (
    <div>
        <div>
            <SolarEnergy/>
        </div>
        <div>
            <ConsultationFlow/>
        </div>
        <div>
            <Clients/>
        </div>
        <div>
            <ConfirmSystem/>
        </div>
    </div>
  )
}
