type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Використання Partial для дозволу часткових оновлень
function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  // Оновлення користувача з використанням переданих полів
  console.log(initialValues);
}

// Приклад використання
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
