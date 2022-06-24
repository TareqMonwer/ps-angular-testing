import { StrengthPipe } from './strength.pipe';
describe('StrengthPipe', () => {
    let pipe = new StrengthPipe();

    it('should display "weak" if strength is 5', () => {
        // let pipe = new StrengthPipe();
        expect(pipe.transform(5)).toEqual("5 (weak)");
    })

    it('should display "strong" if strength is between 10 to 19', () => {
        let weight = 19
        expect(pipe.transform(weight)).toEqual(`${weight} (strong)`);
    })
})