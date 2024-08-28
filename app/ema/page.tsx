import Ema from "../components/Ema";
import Background from "../components/UI/Background";
import Link from "next/link";
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

  const perPage = 10;
  const data = await getData(perPage, pageNum);
  const prevPage = pageNum - 1 > 0 ? pageNum - 1 : 1;
  const nextPage = pageNum + 1;
  const totalPages = Math.ceil(data.itemCount / perPage);
  const isPageOutOfRange = pageNum > totalPages;

  const pages = [];
  const offsetNumbers = 3;

  for (let i = pageNum - offsetNumbers; i <= pageNum + offsetNumbers; i++) {
    if (i >= 1 && i <= totalPages) {
      pages.push(i);
    }
  }

  return (
    <>
      <Background>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-center">
            {data.items.map((item) => (
              <li key={item._id}>
                <Ema content={item.content} />
              </li>
            ))}
          </ul>
          {isPageOutOfRange ? (
            <div className="flex mt-8 sm:mt-16 justify-center items-center text-center">
              <div className="flex flex-col gap-8 sm:gap-20">
                <h1 className="font-extrabold text-4xl sm:text-9xl">Error 404</h1>
                <p className="font-extrabold text-xl sm:text-4xl">Cannot find page.</p>
                <p className="font-extrabold text-xl sm:text-4xl">
                  Please try again later.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-8 sm:mb-8 text-black">
              <div className="flex flex-wrap justify-center border-[1px] gap-2 sm:gap-4 rounded-[10px] border-light-green p-2 sm:p-4">
                {pageNum === 1 ? (
                  <div className="opacity-60 px-1 sm:px-2" aria-disabled="true">
                    Prev
                  </div>
                ) : (
                  <Link
                    href={`?page=${prevPage}`}
                    aria-label="Prev page"
                    className="hover:text-white hover:bg-green-500 px-1 sm:px-2 rounded-md"
                  >
                    Prev
                  </Link>
                )}
                {pages.map((page, index) => (
                  <Link
                    className={
                      pageNum === page
                        ? "bg-green-500 fw-bold px-2 rounded-md text-white"
                        : "hover:bg-green-500 px-1 sm:px-2 rounded-md"
                    }
                    key={index}
                    href={`?page=${page}`}
                  >
                    {page}
                  </Link>
                ))}
                {pageNum === totalPages ? (
                  <div className="opacity-60 px-1 sm:px-2" aria-disabled="true">
                    Next
                  </div>
                ) : (
                  <Link
                    href={`?page=${nextPage}`}
                    aria-label="Next page"
                    className="hover:text-white hover:bg-green-500 px-1 sm:px-2 rounded-md"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </Background>
    </>
  );
};

export default EmaPage;
