namespace ak {
    export interface IProxy {
        RegEvents():{ new(): AkEvent }[];
        StartListen(): void;
        OnInit(): void;
    }
}