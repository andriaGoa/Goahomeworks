def check_even_or_odd():
    try:

        number = int(input("შეიყვანეთ რიცხვი: "))
        
       
        if number % 2 == 0:
            print("არის ლუწი რიცხვი.")
        else:
            print("არის კენტი რიცხვი.")
    
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")
check_even_or_odd()