import { ArticleParams } from "../../domain/params/article_params";

export class ArticleForm implements ArticleParams{
    constructor(form?: ArticleForm) {
        if(form) {
            this.id = form.id;
            this.name = form.name;
            this.userId = form.userId;
            this.categoryId = form.categoryId;
            this.tags = form.tags;
            this.description = form.description;
            this.content = form.content;
        }
    }
    
    private id: string;
    private name: string;
    private userId: string;
    private categoryId: string;
    private tags: string;
    private description: string;
    private content: string;
    
    public getId(): string {
        return this.id;
    }

    public getCategoryId(): string {
        return this.categoryId;
    }

    public getTags(): string {
        return this.tags;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }
    
    public getUserId(): string {
        return this.userId;
    }

    public getContent(): string {
        return this.content;
    }
}