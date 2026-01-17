export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
  highlight?: boolean;
  tags?: string[];
  contentHtml?: string;
}

export interface Project extends Post {
  github?: string;
  demo?: string;
  status?: "Em Desenvolvimento" | "Concluído" | "Planejamento" | "Arquivado";
}

export interface NewsItem extends Post {
  source?: string;
  sourceUrl?: string;
}

export type PostData = Omit<Post, 'contentHtml'> & {
  contentHtml: string;
};
