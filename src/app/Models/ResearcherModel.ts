export class ResearcherModel{
    levelID?: string;
    name?: string;
    imageUrl?: string;
    profile?: string;
    email?: string;
    mobile?: string;
    linkedIn?: string;
    googleScholar?: string;
}

export class Citations{
    all?: number;
    since_2019?: number;
}

export class HIndex{
    all?: number;
    since_2019?: number;
}

export class I10Index{
    all?: number;
    since_2019?: number;
}

export class table{
    citations?: Citations;
    h_index?: HIndex;
    i10_index?: I10Index;
}

export class graphDetails {
    year?: number;
    citations?: number;
}


