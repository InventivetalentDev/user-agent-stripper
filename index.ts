import useragent = require("useragent");

/**
 * @param agent User-Agent string to process
 * @param stripNumbers if true, replaces all numbers with `x`
 */
export default function stripUserAgent(agent: string, stripNumbers: boolean = true): string {
    const parsed = useragent.parse(agent);
    if (parsed.family === 'Other') {
        if (stripNumbers) {
            return parsed.source.replace(/\d/g, "x");
        }
        return parsed.source;
    }
    return parsed.family;
};
