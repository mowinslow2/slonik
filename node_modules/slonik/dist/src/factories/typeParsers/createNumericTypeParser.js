"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNumericTypeParser = void 0;
const numericParser = (value) => {
    return Number.parseFloat(value);
};
const createNumericTypeParser = () => {
    return {
        name: 'numeric',
        parse: numericParser,
    };
};
exports.createNumericTypeParser = createNumericTypeParser;
