namespace ak {
    export interface IModule {
        StartProxy(): void;
        onInit(): void;
    }
}