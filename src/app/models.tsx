export type EventModel = {
    id: string;
    name: string;
    organization: string;
    date: string;
    location: string;
    price: number;
    rating: string;
    image_url: string;
}

export type SpotModel ={
    id: string;
    name: string;
    status: string;
}

export type CardModel = {
    cardName: string,
    cardNumber: string,
    expireDate: string,
    cvv: string
}