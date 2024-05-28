count = int(input("please enter how meny number you want to input: "))
numbers = []
for i in range(count):
   number = int(input("please enter a number: "))
numbers.append(number)
if number > 10:
   print(number)