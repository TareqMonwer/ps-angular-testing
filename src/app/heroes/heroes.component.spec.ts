import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'Superman', strength: 30 },
            { id: 2, name: 'Gundey', strength: 8 },
            { id: 3, name: 'Stroooong', strength: 15 },
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new HeroesComponent(mockHeroService);
    })

    it('should delete and item from heroes list', () => {
        component.heroes = HEROES;
        mockHeroService.deleteHero.and.returnValue(of(true))
        expect(component.heroes.length).toBe(3);
        component.delete(HEROES[0]);
        expect(component.heroes.length).toBe(2);
    })
})