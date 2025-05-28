interface PageNumberBar {
  pageNum: number
  prevPage: number
  pages: []
  totalPages: number
  nextPage: number
  pageChangeHandler?: (newPageNum: number) => void | null
}

export default PageNumberBar;