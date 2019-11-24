import { firestore } from 'firebase';


export default interface MeetingRoom {
    id?: string;
    title: string;
    bilde: string;
    adresse: string;
    lokasjon: firestore.GeoPoint;
    kapasitet: number;
    ledig: boolean;
    eier: string;
    leietaker: string;
}
