user_input = int(input("please enter a number: "))
user_input2 = int(input("please enter one more number: "))
list1 = []
for i in range(user_input, user_input2):
    list1.append(i)
print(list1)
for num in list1:
    if num % 5 == 0:
        print(num)