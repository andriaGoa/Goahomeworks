def strings_length(strings_list):
    length_list = []

    for word in strings_list:
        length_list.append(len(word))
    return length_list
print(strings_length(["andro","sandro","saba","vaxo"]))