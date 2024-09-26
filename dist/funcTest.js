
// Utilisez `toBe` pour vérifier que la somme est correcte
export function somme(a, b) {
    return a + b;
}

// Utilisez `toEqual` pour comparer le résultat attendu
export function carre(x) {
    return x * x;
}

// Utilisez `resolves` et `rejects` pour gérer les promesses
export function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Données reçues'), 1000);
    });
}

// Utilisez `toThrow` pour vérifier si une erreur est levée
export function division(a, b) {
    if (b === 0) {
        throw new Error('Division par zéro');
    }
    return a / b;
}

// Utilisez `toHaveBeenCalled` et `toHaveBeenCalledWith` pour vérifier les appels de callback
export function executeCallback(callback) {
    callback('Résultat');
}

// Utilisez `toContain` pour vérifier la présence d'un élément dans un tableau
export function getFruits() {
    return ['pomme', 'banane', 'orange'];
}

// Utilisez `toMatchObject` pour tester des objets partiels
export function getUser() {
    return { name: 'Alice', age: 25, email: 'alice@example.com' };
}

// Utilisez `toBeCloseTo` pour tester les nombres à virgule flottante
export function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Utilisez `toHaveLength` pour vérifier la longueur du tableau filtré
export function filterNumbers(numbers) {
    return numbers.filter(num => num > 10);
}

// Utilisez `toMatch` pour vérifier si la chaîne correspond à une regex
export function formatUsername(username) {
    return username.trim().toLowerCase();
}