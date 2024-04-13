import { shallow } from 'enzyme';
import App from './App';


describe("App Component tests", () => {
    it("Runs without crash", () => {
        const app = shallow(<App />)
        expect(app).toBeDefined();
    })

    it("App renders a div with the class App-header", () => {
        const app = shallow(<App />);
        expect(app.find(".App-header")).toBeDefined();
    });

    it("App renders a div with the class App-body", () => {
        const app = shallow(<App />);
        expect(app.find(".App-body")).toBeDefined();
    })

    it("App renders a div with the class App-footer", () => {
        const app = shallow(<App />);
        expect(app.find(".App-footer")).toBeDefined();
    })
});
