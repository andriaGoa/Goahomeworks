user_input = int(input("please enter a number between 1-5: "))
if user_input < 1 or user_input > 5:
    print("Invalid input")
if user_input > 1 and user_input < 5:
    print("Valid input")