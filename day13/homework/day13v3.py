user_input = int(input("please enter a number: "))
if user_input % 5 == 0 and user_input % 3 == 0:
     print("Fizz buzz")

if user_input % 3 == 0  and user_input % 5 != 0:
    print("Fizz")
if user_input % 5 == 0 and user_input % 3 != 0:
     print("Buzz")
if user_input % 3 != 0 and user_input % 5 != 0:
     print(user_input)