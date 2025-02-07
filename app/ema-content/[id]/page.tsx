import EmaDataModel from "../../../interface/EmaDataModel"
import { getSingleEma } from "../../../utils/database"
import SingleEma from "../../../components/SingleEma"

const EmaContentPage: React.FC<EmaDataModel> = async ({params}: any) => {
    params = await params

    const singleEma = await getSingleEma(params.id)
    const id = singleEma.id
    const content = singleEma.content

    return <SingleEma id={id} content={content}/>
}

export default EmaContentPage