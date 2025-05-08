NB:open folder b5a1 -->then src--> problem solve is here index.ts
# rayhan-Apollo-Level2-Web-Dev-B5-Assignment-1

Blog 1:Provide an example of using union and intersection types in TypeScript.



**Union types are like a multiple-choice question - the value can be any one of the given types (but must be at least one of them).



Example:
=> Think of it like: A school ID that can be either a number or a barcode string.


** A student ID can be  a number OR a string
type StudentID = number | string;

function printID(id: StudentID) {
  console.log(`Your ID is: ${id}`);
}

printID(12345);    // Works - number
printID("A5678");  // Works - string
printID(true);  // Error - only numbers/strings allowed
----------------------------------***--------------------------------***-------------------------------****-----------------------------------


## Intersection types are like a checklist - the value must have everything from all the types combined together.
Example :



=>Think of it like: Your school report card that must have both your personal details AND your exam results.
interface PersonalInfo {
  name: string;
  class: number;
}

interface ExamResults {
  marks: number;
  grade: string;
}

// ReportCard must have BOTH PersonalInfo AND ExamResults
type ReportCard = PersonalInfo & ExamResults;

const myReport: ReportCard = {
  name: "Rayhan",
  class: 12,
  marks: 87,
  grade: "A+"
};

 If I Use This -->

 const badReport: ReportCard = {
   name: "Priya",
  class: 10,
   marks: 92
 };
 // This would be INVALID because it's missing grade.


 **More Example
Real-life Comparison
Concept	Real-life Example	TypeScript Example
Union	A school bag can contain EITHER books OR notebooks OR both	`number string`
Intersection	To board a school bus you need BOTH ID card AND permission slip	Student & BusPass
Remember:

Use | (union) when you want "this or that"

Use & (intersection) when you want "this and that"

This is like how in school:

You can choose between art or music (union)

But for the science fair you need both a project and a report (intersection)



 ##Blog 2:
 What is type inference in TypeScript? Why is it helpful?

 =># Type Inference in TypeScript - Simple Explanation

## What is Type Inference?

**Type inference** is TypeScript's ability to automatically figure out (or "guess") the type of a variable without you having to explicitly declare it. It is like when your teacher knows what answer you are thinking of even before you raise your hand!

### Example:
*/typescript
let myAge = 15;          // TypeScript KNOWS this is a number
let myName = "Aarav";     // TypeScript KNOWS this is a string
let isStudent = true;     // TypeScript KNOWS this is a boolean*/


## Why is Type Inference Helpful?

1. **Less Typing Work**  
   You don't need to write types everywhere - TypeScript understands automatically.

2. **Catches Mistakes Early**  
   If you try to do something wrong, TypeScript warns you immediately:
   typescript
   let score = 95;
   score = "ninety-five"; // ERROR! TypeScript knows score should stay a number
   

3. **Makes Code Cleaner**  
   Your code looks simpler but is still type-safe:
   typescript
   // Without inference (more typing)
   let numbers: number[] = [1, 2, 3];
   
   // With inference (cleaner)
   let numbers = [1, 2, 3]; // Still knows these are numbers!
   

4. **Helps in Functions Too**  
   TypeScript can guess return types:
   typescript
   function add(a: number, b: number) {
     return a + b; // TypeScript knows this returns a number
   }
   

## Real-Life Comparison

Imagine your school bag:
- You don't need to label every item as "book" or "lunchbox" - you can see what they are
- But if you try to put a basketball where only notebooks should go, your teacher notices immediately!

That's what type inference does - it keeps track of types for you while still keeping your code safe.

