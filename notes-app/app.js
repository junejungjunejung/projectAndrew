
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log('title: ' + argv.title)
    console.log('body: ' + argv.body)
  }
})

//create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function(){
    console.log('removing a note!')
  }
})

//create list command
yargs.command({
  command: 'list',
  describe: 'list of notes',
  handler: function(){
    console.log('listing notes!')
  }
})

//create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function(){
    console.log('reading a note!')
  }
})

yargs.parse()

