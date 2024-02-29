class AkIns {
    private static readonly _instance: AkIns = new AkIns();
    private constructor() {}
    public static get Inst(): AkIns {
        return AkIns._instance;
    }
}