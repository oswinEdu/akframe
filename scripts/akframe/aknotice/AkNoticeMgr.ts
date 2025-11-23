namespace ak {
    export class AkNoticeMgr<K extends AkNoticeMap> {
        private _noticeMap: Map<string, AkNoticeCallback[]> = new Map();


        public RegisterNotice<T extends keyof K>(noticeName: T, callback: AkNoticeCallback<K[T]>): void {
            let callbackList: AkNoticeCallback[] = [];
            const nameStr: string = noticeName as string;

            if (this._noticeMap.has(nameStr)) {
                callbackList = this._noticeMap.get(nameStr) ?? [];
            } else {
                this._noticeMap.set(nameStr, callbackList);
            }
            callbackList.push(callback as AkNoticeCallback);

            AkLog.print('注册通知', nameStr, callbackList.length);
        }


        public SNotice<T extends keyof K>(noticeName: T, data: K[T]): void {
            const nameStr: string = noticeName as string;
            const callbackList: AkNoticeCallback[] = this._noticeMap.get(nameStr) ?? [];
            if (callbackList.length === 0) {
                AkLog.print('发送通知，但无监听者', nameStr);
                return;
            }

            callbackList.forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    AkLog.error('通知回调执行错误', nameStr, error);
                }
            });
        }


        public RemoveNotice<T extends keyof K>(noticeName: T, callback?: AkNoticeCallback<K[T]>): void {
            const nameStr: string = noticeName as string;
            if (!this._noticeMap.has(nameStr)) {
                AkLog.print('移除通知，但通知不存在', nameStr);
                return;
            }

            const callbackList = this._noticeMap.get(nameStr) ?? [];

            if (callback) {
                const index = callbackList.indexOf(callback as AkNoticeCallback); // 移除指定的回调
                if (index > -1) {
                    callbackList.splice(index, 1);
                    AkLog.print('移除通知回调', nameStr);
                }

                // 如果回调列表为空，删除该通知
                if (callbackList.length === 0) {
                    this._noticeMap.delete(nameStr);
                }
            } else {
                // 移除该通知的所有回调
                this._noticeMap.delete(nameStr);
                AkLog.print('移除通知', nameStr);
            }
        }


        public HasNotice<T extends keyof K>(noticeName: T): boolean {
            const nameStr: string = noticeName as string;
            return this._noticeMap.has(nameStr) && (this._noticeMap.get(nameStr)?.length ?? 0) > 0;
        }


        public GetNoticeCount<T extends keyof K>(noticeName: T): number {
            const nameStr: string = noticeName as string;
            return this._noticeMap.get(nameStr)?.length ?? 0;
        }
    }
}

