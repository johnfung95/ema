import Ema from "../../components/Ema";
import PageNumBar from "../../components/UI/PageNumBar"
import ErrorPageNumber from "../../components/UI/ErrorPageNumber";
import { getEmas } from "../../utils/database";

const EmaPage: React.FC = async ({ searchParams }: any) => {
  searchParams = await searchParams
  let pageNum = parseInt(searchParams.page, 10);
  pageNum = !pageNum || pageNum < 1 ? 1 : pageNum;

  const perPage = 8;
  const data = await getEmas(perPage, pageNum);
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

    <div className="h-full flex justify-center items-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:my-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {data.items.map((item) => (
            <li key={item._id}>
              <Ema id={item._id.toString()} content={item.content} />
            </li>
          ))}
        </ul>
        {isPageOutOfRange ? <ErrorPageNumber />
          : (
            <PageNumBar pageNum={pageNum} prevPage={prevPage} pages={pages} totalPages={totalPages} nextPage={nextPage} />
          )}
      </div>
    </div>

  );
};

export default EmaPage;
