import { CategoryParams } from "../../domain/params/category_params";

export class CategoryForm implements CategoryParams{
    constructor(form?: CategoryForm) {
        if(form) {
            this.id = form.id;
            this.name = form.name;
            this.tags = form.tags;
            this.description = form.description
        }
    }

    private id: string;
    private name: string;
    private tags: string;
    private description: string;

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getTags(): string {
        return this.tags;
    }
    getDescription(): string {
        return this.description;
    }
}