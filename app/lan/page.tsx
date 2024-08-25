import Link from "next/link";
import { connectToDatabase } from "../utils/database";

async function getData(perPage: number, pageNum: number) {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");
    const items = await db
      .collection("content")
      .find({})
      .skip(perPage * (pageNum - 1))
      .limit(perPage)
      .toArray();
    // count the number of documents in the database
    const itemCount = await db.collection("content").countDocuments({});

    const response = { items, itemCount };
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later");
  }
}

const LanPage: React.FC = async ({ searchParams }: any) => {
  let pageNum = parseInt(searchParams.page, 10);
  pageNum = !pageNum || pageNum < 1 ? 1 : pageNum;

  const perPage = 8;

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
      <div className="container mx-auto mt-8">
        <ul className="grid grid-cols-4 gap-4 text-center">
          {data.items.map((item) => (
            <li
              key={item._id}
              className="bg-green-500 rounded-md p-4 text-black"
            >
              {item.name}
            </li>
          ))}
        </ul>
        {isPageOutOfRange ? (
          <div>Exceeded page numbers...</div>
        ) : (
          <div className="flex justify-center items-center mt-16">
            <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
              {pageNum === 1 ? (
                <div className="opacity-60" aria-disabled="true">
                  Prev
                </div>
              ) : (
                <Link href={`?page=${prevPage}`} aria-label="Prev page">
                  Prev
                </Link>
              )}

              {pages.map((page, index) => (
                <Link
                  className={
                    pageNum === page
                      ? "bg-green-500 fw-bold px-2 rounded-md text-black"
                      : "hover:bg-green-500 px-1 rounded-md"
                  }
                  key={index}
                  href={`?page=${page}`}
                >
                  {page}
                </Link>
              ))}

              {pageNum === totalPages ? (
                <div className="opacity-60" aria-disabled="true">
                  Next
                </div>
              ) : (
                <Link href={`?page=${nextPage}`} aria-label="Next page">
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanPage;
