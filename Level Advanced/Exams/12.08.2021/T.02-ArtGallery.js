class ArtGallery {
    constructor(creator) {
        this.creator = creator;

        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!(this.possibleArticles.hasOwnProperty(articleModel))) {
            throw new Error('This article model is not included in this gallery!');
        }

        if (this.listOfArticles.some(x => x.articleName == articleName)) {
            let targetArticle = this.listOfArticles.find(x => x.articleName == articleName);
            targetArticle.quantity += quantity;
        } else {
            let article = { articleModel, articleName, quantity };
            this.listOfArticles.push(article);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        const personalities = { Vip: 500, Middle: 250, Other: 50 };
        let guest = { guestName, points: 0, purchaseArticle: 0 };

        if (personality == 'Vip') {
            guest.points = personalities.Vip;
        } else if (personality == 'Middle') {
            guest.points = personalities.Middle;
        } else {
            guest.points = personalities.Other;
        }

        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let findModel = this.listOfArticles.find((x) => { return x.articleModel === articleModel.toLowerCase() && x.articleName === articleName });
        let guest = this.guests.find((x) => { return x.guestName === guestName });

        if (!findModel) {
            throw new Error("This article is not found.")
        }

        if (findModel.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        if (!guest) {
            return "This guest is not invited.";
        }

        let neededPoints = Number(this.possibleArticles[articleModel.toLowerCase()]);
        let userPoints = Number(guest.points);

        if (neededPoints <= userPoints) {
            guest.points -= neededPoints;
            findModel.quantity -= 1;
            guest.purchaseArticle += 1;
        } else {
            return "You need to more points to purchase the article.";
        }

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`
    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let articlesInfo = this.listOfArticles
                .map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`)
                .join('\n');

            return `Articles information:\n${articlesInfo}`;

        } else if (criteria == 'guest') {
            let guestInfo = this.guests
                .map(g => `${g.guestName} - ${g.purchaseArticle}`)
                .join('\n');

            return `Guests information:\n${guestInfo}`;
        }
    }
}