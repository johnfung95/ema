interface EmaDataModel {
    id: string,
    content: string,
    author: string,
    createdAt: Date,
    tags: Array<string>[],
    likes: number,
    comments: Array<string>[]

}

export default EmaDataModel