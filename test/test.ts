import { should } from 'chai';
import stripUserAgent from "../index";

should();

describe("Strip", () => {
    it("should return family for generic user-agent", () => {
        stripUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36").should.equal("Chrome");
        stripUserAgent("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36").should.equal("Chrome Mobile");
        stripUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0").should.equal("Firefox");
        stripUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36 Edg/91.0.864.48").should.equal("Chrome");
    })
    it("should return the original user-agent with stripped numbers for custom ones", () => {
        stripUserAgent("MyCustomAgent").should.equal("MyCustomAgent");
        stripUserAgent("SomeRandomAgent/v1.2").should.equal("SomeRandomAgent/vx.x");
    })
    it("should return the original user-agent for custom ones with number stripping disabled", () => {
        stripUserAgent("MyCustomAgent", false).should.equal("MyCustomAgent");
        stripUserAgent("SomeRandomAgent/v1.2", false).should.equal("SomeRandomAgent/v1.2");
    })
})
