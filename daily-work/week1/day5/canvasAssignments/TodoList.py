tasks = [
{'Wash the car' : 'high'},
{'Mow the lawn':'low'}
]

menuInput = input('Press 1 to add task \n Press 2 to delete task \n Press 3 to view all tasks \n Press q to quit \n __________________ \n')

while menuInput != 'q':
    if menuInput == '1':
        nestedInput1 = input('Enter the title of the task followed by the priority of the task, separated by a comma: \n')
        newTask = nestedInput1.split(',')
        tasks.append({newTask[0]:newTask[1]})

    if menuInput == '2':
        counter = 1
        for task in tasks:
            for key, value in task.items():
                print(f'{counter} - {key} -{value}')
            counter += 1
        # above is just showing the to-do list; below will actually delete stuff
        indexToDelete = input('Enter the number associated with the task you would like to delete. \n')
        del tasks[int(indexToDelete)-1]

    if menuInput == '3':
        counter = 1
        for task in tasks:
            for key, value in task.items():
                print(f'{counter} - {key} - {value}')
            counter += 1

    menuInput = input('Press 1 to add task \n Press 2 to delete task \n Press 3 to view all tasks \n Press q to quit \n __________________ \n') #repeats until quit 

