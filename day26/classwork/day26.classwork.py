arrnumbers = []

for i in range(10, 50 + 1):
    numbers.append(i)


def func(numbers):
    for index in range(len(numbers) - 1, -1, -1):
        if numbers[index] % 4 == 0:
            return numbers[index]

print(func(numbers))