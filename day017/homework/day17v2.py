def filter(strings_list):
    filtered_list = []
    for word in strings_list:
        if len(word) > 5:
            filtered_list.append(word)
    return filtered_list
names = ["Nika","Luka","Gabrieli","Dato","Giorgi"]
print(filter(names))