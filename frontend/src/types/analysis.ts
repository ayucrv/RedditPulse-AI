export interface Sentiment {
  positive: number;
  neutral: number;
  negative: number;
}

export interface Category {
  name: string;
  percentage: number;
}

export interface Keyword {
  word: string;
  count: number;
}

export interface RedditPost {
  title: string;
  upvotes: number;
  comments: number;
  author: string;
  time: string;
}

export interface AnalysisData {
  subreddit: string;

  summary: string;

  sentiment: Sentiment;

  categories: Category[];

  keywords: Keyword[];

  posts: RedditPost[];
}