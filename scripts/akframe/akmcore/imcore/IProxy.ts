namespace ak {
    export interface IProxy {
        RegEvents(): AkEventClass[];
        StartListen(): void;
        onInit(): void;
    }
}