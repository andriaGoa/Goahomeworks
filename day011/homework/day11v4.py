pin = 4526
guess = False
while not guess:
    user_input = input("please enter your pin: ")
    if int(user_input) == pin:
        guess = True
        print("your balance is 45 euro")
        print(input("your deposit: "))