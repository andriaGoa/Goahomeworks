password = ("abc123")
guess = False
while guess != True:
    user_input = input("please enter your password: ")
    if user_input != password:
     user_input =  input("acces denied: ")
     if user_input == password:
        guess = True
        print("acces granted")