describe('My first test', () => {
    let sut;

    beforeEach(() => {
        sut = {};
    })

    it('should be true if sut.a is true', () => {
        sut.a = false;

        sut.a = true;

        expect(sut.a).toBe(true);
    })
})