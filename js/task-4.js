'use strict';
function getShippingCost(country) {
    let priceCredits;
    switch (country) {
        case 'China':
            priceCredits = 100;
            break;
        case 'Chile':
            priceCredits = 250;
            break;
        case 'Australia':
            priceCredits = 170;
            break;
        case 'Jamaica':
            priceCredits = 120;
            break;
        default:
            return `Sorry, there is no delivery to your country`;
    }
    return `Shipping to ${country} will cost ${priceCredits} credits`;


    // const mapContryCost = new Map([
    //     ['China', 100],
    //     ['Chile', 250],
    //     ['Australia', 170],
    //     ['Jamaica', 120]
    // ]);
    // for (let [key, value] of mapContryCost.entries()) {
    //     if (key === country) {
    //         return `Shipping to ${country} will cost ${value} credits`;
    //     }
    // }
    // return `Sorry, there is no delivery to your country`;

}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"