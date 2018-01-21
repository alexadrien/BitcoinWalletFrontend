class Airtable {

    constructor() {
        this.fetchAirtable = this.fetchAirtable.bind(this);
    }

    static config = {
        base: "appSdPYoLxj9S4lLT",
        table: "wallet",
        view: "Grid view",
        apiKey: "key6hmgGqfnaKrdEe",
        maxRecords: 100
    };

    request = new Request('https://api.airtable.com/v0/'+this.config.base+'/'+this.config.table+'?maxRecords='+this.config.maxRecords+'&view='+this.config.view, {
        method: 'get',
        headers: new Headers({
            'Authorization': `Bearer ${this.config.apiKey}`
        })
    });

    static async fetchAirtable() {
        console.log(this.config.base);
        console.log('https://api.airtable.com/v0/'+this.config.base+'/'+this.config.table+'?maxRecords='+this.config.maxRecords+'&view='+this.config.view);
        var resp = await fetch(this.request).catch(err => {console.log(err)});
        if(resp.status >= 200 && resp.status < 300) {
            console.log(resp);
        }
        return [];
    }
}

export default Airtable;
