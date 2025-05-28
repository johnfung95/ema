export interface Comment {
    timestamp: string | Date; // or just string if the timestamp comes as a string
    content: string;
}

export interface CommentsDataModel {
    comments: Comment[]; // Array of Comment objects
}

