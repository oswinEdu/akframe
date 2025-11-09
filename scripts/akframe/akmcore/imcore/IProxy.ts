namespace ak {
    export interface IProxy {
        RegisterEvents(): AkEventClass[];
        StartListen(): void;
        OnInit(): void;
    }
}