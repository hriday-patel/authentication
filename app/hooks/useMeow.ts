import { renderText } from "chart.js/helpers";

const useMeow = (value?: any) => {
    let meow = value;
    function setMeow(value2: typeof meow) {
        meow = value2;
        
    }
    return [meow, setMeow];
}
export default useMeow