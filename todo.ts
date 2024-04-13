
import inquirer from "inquirer";

let todos : string[] = [];


async function createtodo(todos:string[]) {
    do{let ans = await inquirer.prompt(
        [
            {
                type: "list",
                message: "Select an operation from blow:",
                name: "Select",
                choices: ["add todo", "update todo", "view todo", "Delete todo", "Exit"]
            }
        ]
    );

    if(ans.Select == "add todo"){
        let addTodo = await inquirer.prompt(
            [
                {
                    type: "input",
                    message: "add todo item:",
                    name: "todo"
                }
            ]
        );
        todos.push(addTodo.todo)
        console.log(todos)
    }
    if(ans.Select == "update todo"){
        let updatetodo = await inquirer.prompt(
            [
                {
                    type: "list",
                    message: "Select item to update in todo:",
                    name: "todo",
                    choices: todos.map(item => item)
                }   
            ]
        );
        let addTodo = await inquirer.prompt(
            [
                {
                    type: "input",
                    message: "add todo in todo:",
                    name: "todo"
                }
            ]
        );
        let newtodos = todos.filter(val => val !== updatetodo.todo)
        todos = [...newtodos,addTodo.todo]
        console.log(todos)
    }

    if(ans.Select == "view todo list"){
        console.log(todos)
    }

    if(ans.Select == "Delete todo"){
        let Deletetodo = await inquirer.prompt(
            [
                {
                    type: "list",
                    message: "Select item to delete in todo list:",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]
        );
        let newtodos = todos.filter(val => val !== Deletetodo.todo)
        todos=[...newtodos]
        console.log(todos);
        }
    
    if(ans.Select == "Exit"){
        console.log("Thank you \n\t made by Tamheed Tariq")
        break;
    }           
}
while(true);
}

createtodo(todos)

  