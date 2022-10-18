function solve(ticketsDescription, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    ticketsDescription.forEach(t => {
        let [destination, price, status] = t.split('|');
        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    })

    tickets.sort((a, b) => {

        return typeof a[sortCriteria] == 'number' ?
            a[sortCriteria] - b[sortCriteria]
            : a[sortCriteria].localeCompare(b[sortCriteria]);
    })

    return tickets;
}

solve(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination');

solve(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'status')