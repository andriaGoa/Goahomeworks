password = "goa_best"
guess = input("enter ur password: ")
i = 0
while guess != password:
    print(input("try agein: "))
    i = i + 1
    print(i)
if guess == password:
    print("logged in sucssesfully")