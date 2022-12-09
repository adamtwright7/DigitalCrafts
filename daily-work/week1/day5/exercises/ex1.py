phonebook_dict = {'Alice': '703-493-1834', 'Bob': '857-384-1234', 'Elizabeth': '484-584-2923' }

# Print Elizabeth's phone number.
print(phonebook_dict['Elizabeth'])
# Add an entry to the dictionary: Kareem's number is 938-489-1234.
phonebook_dict['Kareem'] = '938-489-1234'

# Delete Alice's phone entry.
del phonebook_dict['Alice']

# Change Bob's phone number to '968-345-2345'.
phonebook_dict['Bob'] = '968-345-2345'

# Print all the phone entries.
for key, value in phonebook_dict.items():
    print(f"{key}'s phone number is {value}")

# In this exercise, are you using dynamic keys or fixed keys? 
# ans -- fixed, because we never reference a variable name inside brackets. 