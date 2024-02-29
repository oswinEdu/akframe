namespace ak {
    export class AkLog {
        private static readonly LOG_TAG: string = "unity-日志:";

        private static __log(...list: any[]): string {
            if (list == null) return "";

            let log: string = "";
            for (let i = 0; i < list.length; i++) {
                log += "  " + list[i];
            }
            return log;
        }

        
        public static print(...list: any[]): void {
            let log: string = this.__log(...list);
            if (log.length == 0) return;

            let start: string = "";
            let end: string = "";
            // TypeScript doesn't support conditional compilation like C# does with #if
            // You would need to handle this logic at runtime or with a build tool
            // if (/* condition to check if it's UNITY_EDITOR */) {
            //     start = "<color=green>";
            //     end = "</color>";
            // }
            console.log(`${start}${this.LOG_TAG}${log}${end}`);
        }


        public static warn(...list: any[]): void {
            let log: string = this.__log(...list);
            if (log.length == 0) return;

            let start: string = "";
            let end: string = "";
            // TypeScript doesn't support conditional compilation like C# does with #if
            // You would need to handle this logic at runtime or with a build tool
            // if (/* condition to check if it's UNITY_EDITOR */) {
            //     start = "<color=yellow>";
            //     end = "</color>";
            // }
            console.warn(`${start}${this.LOG_TAG}${log}${end}`);
        }

        
        public static error(...list: any[]): void {
            let log: string = this.__log(...list);
            if (log.length == 0) return;

            this.print("报错");
            console.error(`${this.LOG_TAG}${log}`);
        }


        public static exception(...list: any[]): void {
            let log: string = this.__log(...list);
            if (log.length == 0) return;

            throw new Error(`异常 ${log}`);
        }
    }
}