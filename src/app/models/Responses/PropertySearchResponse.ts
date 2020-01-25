import { QuoteDetails } from '../Entities/QuoteDetails';
import { NeighborhoodDetails } from '../Entities/NeighborhoodDetails';
import { User } from '../Entities/User';

export class PropertySearchResponse {
    isHouse: boolean;
    propertyFound: boolean;
    quoteFound: boolean;
    propertyList: [
        {
            zip: number;
            propertyId: number;
            imageUrl: string;
            address: string;
            area: string;
            numberOfBedrooms: number;
            numberOfBathrooms: number;
            cost: number;
            status: string;
            tax: number;
            quoteDetails: QuoteDetails;
            neighborhoodDetails: NeighborhoodDetails;
        }
    ];
    user: User;
}
