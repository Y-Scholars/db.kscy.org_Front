import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {

    search_type : String = "tonghap";

    langUpdated:EventEmitter<String> = new EventEmitter();

    testService() {
        console.log('share!');
    }

    setActive(text : String) {
        this.search_type = text;
        this.langUpdated.emit(this.search_type);
    }

    getActive() {
        return this.search_type;
    }
}