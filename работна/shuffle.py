import random

themes = [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14, 16, 17]

shuffled = random.sample(themes, k=len(themes))
print(shuffled)