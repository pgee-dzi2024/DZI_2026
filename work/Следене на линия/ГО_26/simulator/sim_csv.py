import re
import csv

# ---------------------------------------
# 1️⃣  Извличане на параметри от Mind+ C код
# ---------------------------------------
def extract_params_from_c(code_text):
    def extract_value(var_name, default=0.0):
        pattern = rf"{var_name}\s*=\s*([0-9.+-]+)\s*;"
        match = re.search(pattern, code_text)
        return float(match.group(1)) if match else default

    Kp = extract_value("mind_n_Kp", 90.0)
    Kd = extract_value("mind_n_Kd", 15.0)
    baseSpeed = extract_value("mind_n_baseSpeed", 80.0)
    return Kp, Kd, baseSpeed


# ---------------------------------------
# 2️⃣  Клас за PD симулация
# ---------------------------------------
class MaqueenSimulator:
    def __init__(self, Kp, Kd, base_speed):
        self.Kp = Kp
        self.Kd = Kd
        self.base_speed = base_speed
        self.error = 0.0
        self.last_error = 0.0
        self.follow_right_side = True

    def step(self, left_sensor, right_sensor):
        # изчисляване на PD корекция
        if left_sensor!=right_sensor:
            if left_sensor:
                self.follow_right_side = False
            else:
                self.follow_right_side = True

        if self.follow_right_side:
            self.error = (1-left_sensor) - right_sensor
        else:
            self.error = (1-right_sensor) - left_sensor

        correction = (self.Kp * self.error) + self.Kd * (self.error - self.last_error)
        self.last_error = self.error

        if not self.follow_right_side:
            correction = -correction

        left_speed = self.base_speed + correction
        right_speed = self.base_speed - correction

        # ограничаване в диапазона 0–255
        left_speed = max(0, min(255, left_speed))
        right_speed = max(0, min(255, right_speed))

        state = {
            "Left sensor" : left_sensor,
            "Right sensor": right_sensor,
            "Kp"          : self.Kp,
            "Kd"          : self.Kd,
            "base_speed"  : self.base_speed,
            "error"       : self.error,
            "last_error"  : self.last_error,
            "correction"  : correction,
            "left_speed"  : left_speed,
            "right_speed" : right_speed,
            "follow_right_side" : self.follow_right_side
            }
        return state


# ---------------------------------------
# 3️⃣  Главна програма
# ---------------------------------------
if __name__ == "__main__":
    print("=== Maqueen PD Simulator (CSV version) ===\n")

    # --- 1. Зареждане на Mind+ C код ---
    c_filename = input("Име на файл с Mind+ C код (напр. maqueen_pid.c): ").strip()
    try:
        with open(c_filename, "r", encoding="utf-8") as f:
            code_text = f.read()
    except FileNotFoundError:
        print("⚠️  Файлът не е намерен. Използвам стойности по подразбиране.")
        code_text = "maqueen_pid.c"

    Kp, Kd, base_speed = extract_params_from_c(code_text)
    print(f"📊 Извлечени параметри:  Kp={Kp},  Kd={Kd},  baseSpeed={base_speed}\n")

    # --- 2. Зареждане на CSV с тестови входове ---
    # csv_input = input("CSV файл с входни данни (напр. sensors.csv): ").strip()
    csv_input = "sensors.txt"
    # csv_output = input("Изходен CSV файл (напр. results.csv): ").strip() or "results.csv"
    csv_output = "results.txt"

    try:
        with open(csv_input, newline='', encoding="utf-8") as fin, \
             open(csv_output, "w", newline='', encoding="utf-8") as fout:

            reader = csv.DictReader(fin)
            fieldnames = ["left", "right", "left_speed", "right_speed"]
            writer = csv.DictWriter(fout, fieldnames=fieldnames)
            writer.writeheader()

            sim = MaqueenSimulator(Kp, Kd, base_speed)

            print("▶️  Стартира симулация ...\n")
            for i, row in enumerate(reader, 1):
                try:
                    left = int(row["left"])
                    right = int(row["right"])
                except KeyError:
                    raise ValueError("CSV файлът трябва да съдържа колони 'left' и 'right'.")

                result = sim.step(left, right)
                writer.writerow({
                    "left": left,
                    "right": right,
                    "left_speed": round(result['left_speed'], 2),
                    "right_speed": round(result['right_speed'], 2)
                })
                outstr = f'{i:03}. Sensors L={left},R={right} → Motors L={result['left_speed']}, R={result['right_speed']}'
                outstr += f' → Error={result["error"]:.2f}, Last_error={result["last_error"]:.2f}, Correction={result["correction"]:.2f}'
                outstr += f', follow_right_side={result["follow_right_side"]}'

                print(outstr)

        print(f"\n✅ Резултатите са записани в: {csv_output}")

    except FileNotFoundError:
        print("❌ Не можа да се намери входният CSV файл.")