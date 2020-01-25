import { QuoteDetails } from '../Entities/QuoteDetails';
import { NeighborhoodDetails } from '../Entities/NeighborhoodDetails';
import { User } from '../Entities/User';

export class PropertySearchResponse {
    isHouse: boolean;
    propertyList: [
        {
            imageUrl: string;
            zipCode: number;
            address: string;
            area: string;
            constructedIn: Date;
            ageInYears: number;
            numberOfBedrooms: number;
            numberOfBathrooms: number;
            cost: number;
            quoteDetails: QuoteDetails;
            neighborhoodDetails: NeighborhoodDetails;
        }
    ];
    accountNumber: string;
    user: User;
}
