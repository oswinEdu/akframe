namespace ak {
    export class AkEvent {
        constructor() {
        }

        public getClass(): {new (): AkEvent} {
            return this.constructor as new () => AkEvent;
        }
    }
}
