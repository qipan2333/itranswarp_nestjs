import { AttachmentParams } from "../../domain/params/attachment_params";

export class AttachmentForm implements AttachmentParams{
    constructor(form?: AttachmentForm) {
        if(form) {
            this.id = form.id;
            this.name = form.name;
            this.data = form.data;
            this.user = form.user;
        }
    }

    private id: string;
    private name: string;
    private data: string;
    private user: string;
    private mime: string;
    private size: number;
    private height: number;
    private width: number;
    
    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getData(): string {
        return this.data;
    }

    public getUser(): string {
        return this.user;
    }

    public getMime(): string {
        return this.mime;
    }

    public getSize(): number {
        return this.size;
    }

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number {
        return this.width;
    }
}