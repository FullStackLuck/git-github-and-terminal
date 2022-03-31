
//Get required elements 

const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#skills-display")


const skills = []

$submit.on("click", (event) => {
    event.preventDefault()
    console.log("You clicked me")

    const newTodo = $textInput.val()
    console.log(newTodo)
})
   
//     todos.push(newTodo)
   
//     const $li = $("<li>")
//     $li.text(newTodo)
//     $ul.append($li)

//     const remove = () => {
        
//         const index = todos.indexOf(newTodo)
//         console.log("index:", index)
       
//         todos.splice(index, 1)
       
//         $ul.empty()
        
//         for (todo of todos){
//             $ul.append($("<li>").text(todo).on("click", remove))
//         }
//     }
//     $li.on("click", remove)
//     // clear the input
//     $textInput.val("")
// })

//     $li.on("click", () => {
//         console.log("you clicked " + newTodo)

// })

// $textInput.val("")
