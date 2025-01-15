import Ema from "../components/Ema";
import Background from "../components/UI/Background";
import PageNumBar from "../components/UI/PageNumBar"
import ErrorPageNumber from "../components/UI/ErrorPageNumber";
import { connectToDatabase } from "../utils/database";

const getData = async (perPage: number, pageNum: number) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");
    const items = await db
      .collection("wish")
      .find({})
      .skip(perPage * (pageNum - 1))
      .limit(perPage)
      .toArray();

    const itemCount = await db.collection("wish").countDocuments({});

    const response = { items, itemCount };
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later");
  }
};

const EmaPage: React.FC = async ({ searchParams }: any) => {
  let pageNum = parseInt(searchParams.page, 10);
  pageNum = !pageNum || pageNum < 1 ? 1 : pageNum;

  const perPage = 12;
  const data = await getData(perPage, pageNum);
  const prevPage = pageNum - 1 > 0 ? pageNum - 1 : 1;
  const nextPage = pageNum + 1;
  const totalPages = Math.ceil(data.itemCount / perPage);
  const isPageOutOfRange = pageNum > totalPages;

  const pages: any = [];
  const offsetNumbers = 3;

  for (let i = pageNum - offsetNumbers; i <= pageNum + offsetNumbers; i++) {
    if (i >= 1 && i <= totalPages) {
      pages.push(i);
    }
  }

  return (
    <Background>
      <div className="h-full flex justify-center items-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:my-4">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {data.items.map((item) => (
              <li key={item._id}>
                <Ema content={item.content} />
              </li>
            ))}
          </ul>
          {isPageOutOfRange ? <ErrorPageNumber />
            : (
              <PageNumBar pageNum={pageNum} prevPage={prevPage} pages={pages} totalPages={totalPages} nextPage={nextPage} />
            )}
        </div>
      </div>
    </Background>
  );
};

export default EmaPage;
