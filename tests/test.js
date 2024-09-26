import { carre, fetchData, somme } from "../dist/funcTest.js";



// Somme
test('Ajoute 1 et 2 pour obtenir 3 ', () => {
    expect(somme(1, 2)).toBe(3);
  });
  test('Ajoute 3 et 4 pour ne pas obtenir 8 ', () => {
    expect(somme(3, 4)).not.toBe(8);
  });

// Carre
test('carré de 2 pour obtenir 4', () => {
    expect(carre(2)).toBe(4);
  });
  test('carré de 8 pour obtenir 64', () => {
    expect(carre(8)).toBe(64);
  });
  test('carré de 9 pour ne pas obtenir 73', () => {
    expect(carre(9)).not.toBe(73);
  });

// Promesse
test( 'Obtenir "Données reçues"', () => {
    expect(fetchData()).resolves.toBe('Données reçues')
  });
  test( 'Ne pas obtenir "Singerie"', () => {
    expect(fetchData()).resolves.not.toBe('Singerie')
  });
