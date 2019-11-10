export default interface MeetingRoom {
    id?: string;
    title: string;
    bilder: Array<string>;
    adresse: string;
    kapasitet: number;
    ledig: boolean;

}
