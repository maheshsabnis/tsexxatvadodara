TypeScript Programming
1. Check for Prerequisites
   1. Node.js, https://www.nodejs.org
      1. node command
         1. Node.js runtime command to execute the application
      2. npm command
         1. Used to install all fromnt-end dependencies
         2. The npm install -g <PACKAGE-NAME>
            1. Install package for current user on Mchine Scope
         3. The npm install --save-dev <PACKAGE-NAME>
            1. Install package for current application
         4. The package.json file to define all runtime and dev dependencies for the application
            1. npm init -y, command will create package.json with defaults
            2. npm init, command will provide Command-Line Wizard to create package.json
         5. package.josn sections
            1. 'script', object that contains commands to run/build/test the applicaiton
            2. 'dependencies'
               1. section that contains list of all runtime packages
            3. 'devDependencies'
               1. seciotn that contains dev time packages
   2. Visual Studio Code (VSCode), https://code.visualstudio.com
2. Features
   1. The local scope declaration using 'let' keyword
   2. Data Types
      1. number, string, boolean, array, object, date, type
      2. enum
      3. Union Types
   3. Iterations
      1. for loop , old JS Looping
      2. for..in loop, old JS from ES 3+
      3. for..of loop, New in ES 6
   4. Collections
      1. Array
         1. Methods
            1. push(), pop(), filter(), sort(), reverse(), map(), foreach()
            2. slice(), splice(), shift(), unshift()
         2. properties
            1. length
      2. Map --> Not default in TS
      3. Set --> Not default in TS
   5. functions with input and output parameters with data-types
   6. Arrow Operator
      1. =>
   7. Spread Operators aka rest parameters
      1. ...param
         1. Internally treated as variable array
   8. Classes
      1. Class with default accepss specifier as 'public'
      2. Modifiers
         1. static
         2. abstract
      3. Generics
         1. Class
         2. Method
         3. Interface
   9. Modules
      1.  export module
      2.  import module

The typescript must be compiled into javascript (Transpilation)
tsc <Sourec-File>.ts command will output in <Source-File>.js 
