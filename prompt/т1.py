#!/usr/bin/env python3
# kvadratno.py – решава a·x² + b·x + c = 0

import math

def solve_quadratic(a: float, b: float, c: float):
    """Връща корените като tuple (x1, x2) или None ако няма реални корени."""
    if abs(a) < 1e-12:                       # почти нула => не е квадратно
        raise ValueError("а трябва да е различно от 0")

    D = b*b - 4*a*c                          # дискриминанта
    if D > 0:
        sqrt_D = math.sqrt(D)
        x1 = (-b + sqrt_D) / (2*a)
        x2 = (-b - sqrt_D) / (2*a)
        return x1, x2
    elif abs(D) < 1e-12:                     # едно двойно решение
        x = -b / (2*a)
        return x, x
    else:                                    # D < 0
        return None                          # няма реални корени

def main():
    print("Решаваме a·x² + b·x + c = 0")
    try:
        a = float(input("a = "))
        b = float(input("b = "))
        c = float(input("c = "))
        roots = solve_quadratic(a, b, c)
        if roots is None:
            print("Няма реални корени (D < 0)")
        else:
            x1, x2 = roots
            if x1 == x2:
                print(f"x = {x1}")
            else:
                print(f"x1 = {x1}")
                print(f"x2 = {x2}")
    except ValueError as e:
        print("Грешка:", e)

if __name__ == "__main__":
    main()