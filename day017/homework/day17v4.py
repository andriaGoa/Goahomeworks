def largest_number(numbers):
    max_number = numbers[0]
    for num in numbers:
        if max_number < num:
            max_number = num
    return max_number
numbers = [4,3,5,2,1]
print(largest_number(numbers))