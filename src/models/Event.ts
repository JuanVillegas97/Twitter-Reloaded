export interface Event {
    actionType: "create tweet" | "reply tweet" | "open application";
    userId: string;
    timestamp: Date;
}
