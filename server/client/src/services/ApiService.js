/**
 * 
 * Small service for calling GraphQL API server
 */
class ApiService {

    /**
     * define base url and field schemas here
     * @returns {ApiService}
     */
    constructor() {
        this.apiUrl = process.env.REACT_APP_GQL_URI;
        this.reservationFields = `{reservationId, name, hotelName, arrivalDate, departureDate}`;
    }

    /**
     * Generic function to fetch data from server
     * @param {string} query
     * @returns {unresolved}
     */
    async getGraphQlData(resource, params, fields) {
        const query = `{${resource} ${this.paramsToString(params)} ${fields}}`
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });
        if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.status);
        }
    }

    /**
     * 
     * @param {object} params
     * @returns {array} reservations list or empty list
     */
    async getReservations(params = {}) {
        const data = await this.getGraphQlData('reservations', params, this.reservationFields);
        //return reservationss list
        return data.reservations;
    }

    /**
     * @param {object} params
     * @returns {object} reservation or empty object
     */
    async getReservation(params = {}) {
        const data = await this.getGraphQlData('reservation', params, this.reservationFields);
        // return reservation object
        return data.reservation;
    }

    /**
     * @param {object} params
     * @returns {array} reservations list or empty list 
     */
    async getReservationByNameDates(params = {}) {
        const data = await this.getGraphQlData('reservationByNameDates', params, this.reservationFields);
        return data.reservationByNameDates;
    }

    /**
     * @param {object} params
     * @returns {object} object representing the newly-created reservation's reservationId
     */
    async addReservation(params = {}) {
        const data = await this.getGraphQlData('addReservation', params, this.reservationFields);
        return data.addReservation;
    }

    /**
     * 
     * @param {object} params
     * @returns {String} params converted to string for usage in graphQL
     */
    paramsToString(params) {
        let paramString = '';
        if (params.constructor === Object && Object.keys(params).length) {
            let tmp = [];
            for (let key in params) {
                let paramStr = params[key];
                if(paramStr !== '') {
                    if (typeof params[key] === 'string') {
                        paramStr = `"${paramStr}"`;
                    }
                    tmp.push(`${key}:${paramStr}`);
                }
            }
            if (tmp.length) {
                paramString = `(${tmp.join()})`;
            }
        }
        return paramString;
    }

}

export default new ApiService();