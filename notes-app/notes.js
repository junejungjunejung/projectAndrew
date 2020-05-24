const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) =>{
  const notes = loadNotes()
  const dupNote = notes.find((note) => note.title === title)

  if (!dupNote){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen('new note added'))
  } else {
    console.log(chalk.bgRed('note title taken'))
  }

}

const saveNotes = (notes) =>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e){
    return []
  }
  
}

const removeNote = (title) =>{
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length === notesToKeep.length){
    console.log(chalk.bgRed(' no note found '))
  } else {
    console.log(chalk.bgGreen(' note removed '))
    saveNotes(notesToKeep) 
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse(' your notes '))

  notes.forEach((note) => console.log(chalk.inverse(note.title)))
}

const readNote = (title) => {
  const notes = loadNotes()

  const loadedNote = notes.find((note) => note.title === title)

  if (loadedNote){
    console.log(chalk.inverse(loadedNote.title))
    console.log(chalk.inverse(loadedNote.body))
  } else {
    console.log(chalk.bgRed('no note found'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
} 