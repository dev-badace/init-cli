## init-cli
boilerplates initializer

You can try this cli, but i do not recommend using it in your prod environments ( it is something that i created for fun). Maybe in future i will release a more prod usable version of this project, that being said feel free to try it!


### Commands 

# `init` is the base command.



## set command 
 
 ## `init set -n <nameOfProject> -f <relative path to the folder>`
 
# the set command takes 3 arguments 
 
 ## required arguments for set command
 
 ### `-n <name of the set>` this sets the name of the boilerplate project
 ### `-f <relative path to the folder>` this is the actual project folder that you later want to initialize with init cli
 
 ## optional argument for set command
 
 ### `-d <default name of the project>` this sets the default name of the directory/folder if you initialize the proect without the name, this is the name that will be given to the project
 


## create command

 ## `init <nameOfSet> -f <name of the project/folder you want >` 
 
 ### Let's say you have already set a project via `init set`  and gave it a name boilerplate  via `-n boilerplate`, you can now run the init command like this `init boilerplate`
 ### what it will do is it will create the same folder that you saved in the set via `-f` in your current working directory. 
 
 ## optional argument
 
 ### `-f <name of the project>` this is the name of the project that you want, if not passed it will default to whatever default you have set in the set command via `-d`, If you have not passed `-d` in the set command then it defaults to 'boilerplate'
 
 
 
## list command 

## `init list` ||  `init l`

# This command returns the list of sets that you have created.

 
 
## remove command

 ## `init remove <nameOfSet>` Removes the set
 
 
 
 


