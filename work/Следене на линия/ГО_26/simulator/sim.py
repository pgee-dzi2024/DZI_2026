import re

# ---------------------------------------
# Maqueen PD simulator with auto-parameter extraction
# ---------------------------------------

def extract_params_from_c(code_text):
    """
    Извлича Kp, Kd, baseSpeed от Mind+ C кода чрез регулярни изрази.
    Очаква редове от типа: mind_n_Kp = 90;
    """
    def extract_value(var_name, default=0.0):
        pattern = rf"{var_name}\s*=\s*([0-9.+-]+)\s*;"
        match = re.search(pattern, code_text)
        if match:
            return float(match.group(1))
        return default

    Kp = extract_value("mind_n_Kp", 90.0)
    Kd = extract_value("mind_n_Kd", 15.0)
    baseSpeed = extract_value("mind_n_baseSpeed", 80.0)

    return Kp, Kd, baseSpeed


# ---------------------------------------
# Основна PD логика (от предната версия)
# ---------------------------------------
class MaqueenSimulator:
    def __init__(self, Kp, Kd, base_speed):
        self.Kp = Kp
        self.Kd = Kd
        self.base_speed = base_speed
        self.error = 0.0
        self.last_error = 0.0

    def simulate_step(self, left_sensor, right_sensor):
        self.error = right_sensor - left_sensor
        correction = (self.Kp * self.error) + self.Kd * (self.error - self.last_error)
        self.last_error = self.error

        left_speed = self.base_speed + correction
        right_speed = self.base_speed - correction

        # Ограничаване
        left_speed = max(0, min(255, left_speed))
        right_speed = max(0, min(255, right_speed))

        print(f"\nSensors -> L:{left_sensor}  R:{right_sensor}")
        print(f"Error={self.error:.2f}  Correction={correction:.2f}")
        print(f"Motors -> Left:{left_speed:.1f}  Right:{right_speed:.1f}")

        return left_speed, right_speed


# ---------------------------------------
# Главна програма
# ---------------------------------------
if __name__ == "__main__":

    print("=== Maqueen PD Simulator (auto-param version) ===\n")

    # --- 1. Прочитане на Mind+ C файл ---
    filename = input("Въведи име на файл с Mind+ C код (пример: maqueen_pid.c): ").strip()

    try:
        with open(filename, "r", encoding="utf-8") as f:
            code_text = f.read()
    except FileNotFoundError:
        print("⚠️  Файлът не е намерен. Използвам стойности по подразбиране.")
        code_text = ""

    # --- 2. Извличане на параметри ---
    Kp, Kd, base_speed = extract_params_from_c(code_text)
    print(f"📊 Извлечени параметри: Kp={Kp}, Kd={Kd}, baseSpeed={base_speed}")

    # --- 3. Създаваме симулатора ---
    sim = MaqueenSimulator(Kp, Kd, base_speed)

    # --- 4. Подаваме тестови входове ---
    print("\nВъведи двойки ляв/десен сензор (0 или 1), разделени с интервал. Пример: 0 1")
    print("Изход -> скорости. Празен ред = край.\n")

    while True:
        inp = input("Sensors> ").strip()
        if not inp:
            break
        try:
            left, right = map(int, inp.split())
            sim.simulate_step(left, right)
        except Exception:
            print("❌ Невалиден вход. Използвай две числа, напр. '0 1'.")