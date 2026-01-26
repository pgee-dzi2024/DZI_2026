import math


def solve_quadratic(a, b, c):
    """
    Решава квадратно уравнение ax² + bx + c = 0
    """
    if a == 0:
        # Не е квадратно уравнение, а линейно
        if b == 0:
            return "Няма уравнение (a=0 и b=0)"
        else:
            x = -c / b
            return f"Линейно уравнение. x = {x}"

            # Изчисляваме дискриминантата
    D = b ** 2 - 4 * a * c

    if D > 0:
        # Два различни реални корена
        x1 = (-b + math.sqrt(D)) / (2 * a)
        x2 = (-b - math.sqrt(D)) / (2 * a)
        return f"Два реални корена: x₁ = {x1}, x₂ = {x2}"

    elif D == 0:
        # Един двоен корен
        x = -b / (2 * a)
        return f"Един двоен корен: x = {x}"

    else:
        # Комплексни корени
        real_part = -b / (2 * a)
        imag_part = math.sqrt(abs(D)) / (2 * a)
        return f"Комплексни корени: x₁ = {real_part} + {imag_part}i, x₂ = {real_part} - {imag_part}i"

    # === Пример за използване ===


print("Решаване на квадратно уравнение ax² + bx + c = 0")
print("-" * 45)

a = float(input("Въведи a: "))
b = float(input("Въведи b: "))
c = float(input("Въведи c: "))

result = solve_quadratic(a, b, c)
print("\nРезултат:", result)
