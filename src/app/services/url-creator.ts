export class UrlCreator {
    private appId: string;

    constructor(
        private url: string,
        private param: string,
        private apikey: string) {

        this.url = url;
        this.param = param;
        this.appId = apikey;
    }

    public toString(): string { // decided to use one param to search at a time, could be updated in the future
        const qs: string = this.param ? this.param.toString() : '';
        return qs ? `${this.url}?q=${qs}&appid=${this.appId}&units=metric` : this.url;
    }
}