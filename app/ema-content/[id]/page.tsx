import Ema from "../../../components/Ema"
import EmaDataModel from "../../../interface/EmaDataModel"
import { getSingleEma } from "../../../utils/database"

const EmaContentPage: React.FC<EmaDataModel> = async ({params}: any) => {
    params = await params

    const singleEma = await getSingleEma(params.id)

    console.log(singleEma)

    return <div></div>
}

export default EmaContentPage