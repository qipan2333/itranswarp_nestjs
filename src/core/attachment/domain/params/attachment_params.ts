export interface AttachmentParams {
    
    getId(): string;
    
    getUser(): string;

    getName(): string;

    getData(): string;

    getMime(): string;

    getSize(): number;

    getHeight(): number;

    getWidth(): number;
}