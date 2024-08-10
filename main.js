import { exampleProtoMessage } from "./exampleData.js";
import * as R from "ramda";

const MAPPING = {
  title: [0],
  author: [1],
  isbn: [2],
  price: [3, 0],
  priceText: {
    path: [3],
    parser: (price) => {
      //We sure that, first element is price and second one is currency
      const currency = price[1] ?? "$"; //Get currency text. Default is $
      return `${price[0]}${currency}`;
    },
  },
};

function extractor(mapping) {
  return function extractFields(data) {
    return R.map((prop) => {
      // If value is array, use Ramda path function to get value from array
      if (R.is(Array, prop)) {
        return R.path(prop, data);
      }

      // If its a Object, get input path and then run given method
      if (R.is(Object, prop)) {
        // extract data from given path
        const input = R.path(prop.path, data);
        // If a parser method is available, use it
        return prop.parser ? prop.parser(input) : input;
      }
      throw new Error("Unsupported mapping type!");
    }, mapping);
  };
}

const result = R.map(extractor(MAPPING), exampleProtoMessage);

console.log(result);
