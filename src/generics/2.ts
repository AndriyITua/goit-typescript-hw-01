type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Використовуємо generics для обмеження типів полів, що можна передавати
function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад використання
const top = { name: "Item1", color: "Red" };
const bottom = { position: 1, weight: 10 };

const result = compare(top, bottom);
console.log(result); // { name: 'Item1', color: 'Red', position: 1, weight: 10 }
