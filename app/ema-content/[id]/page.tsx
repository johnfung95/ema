import EmaDataModel from "../../../interface/EmaDataModel"
import { getSingleEma } from "../../../utils/database"
import Ema from "../../../components/Ema"

const EmaContentPage: React.FC<EmaDataModel> = async ({ params }: any) => {
    params = await params

    const singleEma = await getSingleEma(params.id)
    const id = singleEma.id
    const content = singleEma.content

    return (
        <div>
            <Ema
                id={id}
                content={content}
                imgStyle={"w-96 h-96 min-w-80 min-h-80`"}
                bottomBarStyle={"w-96"}
            />
        </div>
        )
}

export default EmaContentPage