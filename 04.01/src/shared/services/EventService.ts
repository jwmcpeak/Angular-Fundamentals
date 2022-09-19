import { Observable, Subject } from "rxjs";

class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any) {
        this.subject.next({eventName, payload});
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj : any) => {
            if (eventName === nextObj.eventName) {
                callback(nextObj.payload);
            }
        });
    }
}

export default new EventService();