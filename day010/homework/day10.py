password = ("andria123")
guess = False
while guess != True:
    user_input = input("please enter ur password: ")
    if user_input == password:
        guess = True
        print("acces granted")