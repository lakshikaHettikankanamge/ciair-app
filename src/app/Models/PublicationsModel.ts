import { ResearcherModel } from "./ResearcherModel";

export class PublicationsModel{
    
    index?: number;
    title?: string;
    abstract?: string;
    authorIds?: string;
    authors?: any[]; 
    year?: number;
    area?: string;
    paperLink?: string;
}