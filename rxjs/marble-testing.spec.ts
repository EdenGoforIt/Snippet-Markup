import { TestScheduler } from 'rxjs/testing';
describe('marble testing in RXJS', () => {
    let testScheduler;

    beforeEach(() => {
        testScheduler = new testScheduler((actual, expected) => {
            expected(actual).toEqual(expected);
        });
    });

    it('should convert ASCII diagrams into observable', () => {
        testScheduler.run((helpers) => {
            const { cold, expectedObservable } = helpers;
            const source$ = cold('--a-b---c');
            const expected = '--a-b---c';
            expectedObservable(source$).toBe(expected);
        });
    });
});
