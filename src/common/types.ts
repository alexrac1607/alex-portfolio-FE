export interface Project {
  url?: string;
  title: string;
  description: string;
  imageSrc?: string;
  githubUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  thumbnailSrc?: string;
  description?: string;
  content?: string;
  imageSrc?: string;
}
