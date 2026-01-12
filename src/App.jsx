import React, { useState } from 'react';
import { Play, BookOpen, Code, Lightbulb, ActivitySquare } from 'lucide-react';
import CodeEditor from './CodeEditor';

const PythonBasicsGuide = () => {
  const [activeSection, setActiveSection] = useState('variables');
  const [outputs, setOutputs] = useState({});
  const [viewMode, setViewMode] = useState('learn');
  // 'learn' = topics view, 'editor' = code editor view

  const sections = {
    variables: {
      title: "Variables & Data Types",
      icon: <Code className="w-5 h-5" />,
      description: "Variables are containers that store data. Think of them as labeled boxes.",
      concepts: [
        {
          name: "Basic Variables",
          code: `# Variables store information
name = "Alice"           # String (text)
age = 25                 # Integer (whole number)
height = 5.6             # Float (decimal)
is_student = True        # Boolean (True/False)

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Student: {is_student}")`,
          explanation: "Variables don't need declaration - just assign a value! Python automatically knows the type."
        },
        {
          name: "Variable Operations",
          code: `# Math with numbers
x = 10
y = 3
print(f"Sum: {x + y}")
print(f"Product: {x * y}")
print(f"Division: {x / y}")

# String operations
first = "Hello"
last = "World"
full = first + " " + last
print(full)
print(f"Repeated: {first * 3}")`,
          explanation: "You can do math with numbers and combine strings with the + operator."
        }
      ]
    },
    conditionals: {
      title: "Conditionals (If/Else)",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Make decisions in your code based on conditions.",
      concepts: [
        {
          name: "Basic If Statements",
          code: `age = 18

if age >= 18:
    print("You can vote!")
else:
    print("Too young to vote")

# Multiple conditions
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")`,
          explanation: "If statements check conditions. Use 'elif' for multiple options and 'else' as a fallback."
        },
        {
          name: "Logical Operators",
          code: `age = 25
has_license = True

# AND operator - both must be true
if age >= 18 and has_license:
    print("Can drive!")

# OR operator - at least one must be true
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No work today!")

# NOT operator - reverses the condition
is_raining = False
if not is_raining:
    print("Great day for a walk!")`,
          explanation: "Combine conditions with 'and', 'or', and 'not' to create complex logic."
        }
      ]
    },
    loops: {
      title: "Loops",
      icon: <Play className="w-5 h-5" />,
      description: "Repeat actions multiple times without writing the same code over and over.",
      concepts: [
        {
          name: "For Loops",
          code: `# Loop through a range of numbers
for i in range(5):
    print(f"Count: {i}")

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Loop with index
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")`,
          explanation: "For loops iterate over sequences. Use range() for numbers, or loop directly through lists."
        },
        {
          name: "While Loops",
          code: `# While loop - continues until condition is false
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1  # Same as count = count + 1

# Practical example
password = ""
while password != "secret":
    password = "secret"  # Simulating input
    if password == "secret":
        print("Access granted!")
    else:
        print("Try again")`,
          explanation: "While loops keep running as long as the condition is True. Be careful not to create infinite loops!"
        }
      ]
    },
    lists: {
      title: "Lists & Data Structures",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Store multiple items in a single variable.",
      concepts: [
        {
          name: "List Basics",
          code: `# Creating and accessing lists
numbers = [1, 2, 3, 4, 5]
print(f"First: {numbers[0]}")
print(f"Last: {numbers[-1]}")

# List methods
numbers.append(6)        # Add to end
print(f"After append: {numbers}")

numbers.insert(0, 0)     # Insert at position
print(f"After insert: {numbers}")

numbers.remove(3)        # Remove specific value
print(f"After remove: {numbers}")`,
          explanation: "Lists are ordered collections. Index starts at 0. Use -1 to access the last item."
        },
        {
          name: "List Operations",
          code: `# List slicing
numbers = [0, 1, 2, 3, 4, 5]
print(f"First 3: {numbers[:3]}")
print(f"Last 3: {numbers[-3:]}")
print(f"Middle: {numbers[2:4]}")

# List comprehension (advanced shortcut)
squares = [x**2 for x in range(5)]
print(f"Squares: {squares}")

# Checking membership
if 3 in numbers:
    print("3 is in the list!")`,
          explanation: "Slicing lets you extract portions of lists. List comprehension is a compact way to create new lists."
        }
      ]
    },
    functions: {
      title: "Functions",
      icon: <Code className="w-5 h-5" />,
      description: "Reusable blocks of code that perform specific tasks.",
      concepts: [
        {
          name: "Basic Functions",
          code: `# Simple function
def greet():
    print("Hello!")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# Function that returns a value
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")`,
          explanation: "Functions let you organize code into reusable pieces. Use 'def' to define, and call by name."
        },
        {
          name: "Advanced Functions",
          code: `# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))
print(greet("Bob", "Hi"))

# Multiple return values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

nums = [1, 2, 3, 4, 5]
minimum, maximum, total = get_stats(nums)
print(f"Min: {minimum}, Max: {maximum}, Sum: {total}")`,
          explanation: "Functions can have default values and return multiple items as a tuple."
        }
      ]
    },
    classes: {
      title: "Classes & Objects",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Create your own custom data types with properties and behaviors.",
      concepts: [
        {
          name: "Basic Classes",
          code: `# Define a class (blueprint)
class Dog:
    def __init__(self, name, age):
        self.name = name  # Property
        self.age = age
    
    def bark(self):  # Method
        return f"{self.name} says Woof!"
    
    def birthday(self):
        self.age += 1
        return f"{self.name} is now {self.age}!"

# Create objects (instances)
my_dog = Dog("Buddy", 3)
print(my_dog.bark())
print(my_dog.birthday())`,
          explanation: "__init__ is the constructor - it runs when you create an object. 'self' refers to the instance itself."
        },
        {
          name: "Class Inheritance",
          code: `# Base class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

# Derived class (inherits from Animal)
class Cat(Animal):
    def speak(self):  # Override method
        return f"{self.name} says Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

cat = Cat("Whiskers")
dog = Dog("Rex")
print(cat.speak())
print(dog.speak())`,
          explanation: "Inheritance lets classes share common features. Child classes can override parent methods."
        }
      ]
    }
  };

  const runCode = (code, key) => {
    // Show confirmation that code would run
    setOutputs({ ...outputs, [key]: '✓ Code example ready! Copy this to your Python environment to see the actual output.' });
  };

  const currentSection = sections[activeSection];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Python Programming Fundamentals</h1>
        <p className="text-gray-600">Learn the building blocks of programming with interactive examples</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 sticky top-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Topics</h2>
            <nav className="space-y-2">
              {/* View Mode Selector */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Mode
                </h3>
                <button
                  onClick={() => setViewMode('learn')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 ${viewMode === 'learn'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-medium">Learn Topics</span>
                </button>
                <button
                  onClick={() => setViewMode('editor')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${viewMode === 'editor'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Code className="w-5 h-5" />
                  <span className="text-sm font-medium">Code Editor</span>
                </button>
              </div>

              {/* Topic Navigation - Only show when in Learn mode */}
              {viewMode === 'learn' && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Topics
                  </h3>
                  {Object.entries(sections).map(([key, section]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === key
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      {section.icon}
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Conditional rendering based on viewMode */}
          {viewMode === 'learn' ? (
            // Learn Mode - Show topics (your existing code)
            <>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    {currentSection.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {currentSection.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{currentSection.description}</p>
                  </div>
                </div>
              </div>

              {currentSection.concepts.map((concept) => {
                const conceptKey =
                  `${activeSection}-${concept.name.replace(/\s+/g, '-').toLowerCase()}`;
                return (
                  <div key={conceptKey} className="
                    bg-white
                    rounded-lg
                    shadow-lg
                    overflow-hidden
                    ">
                    <div className="bg-indigo-600 text-white px-6 py-4">
                      <h3 className="text-xl font-semibold">{concept.name}</h3>
                    </div>

                    <div className="p-6">
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{concept.code}</code>
                        </pre>
                      </div>

                      <div className="flex gap-3 mb-4">
                        <button
                          onClick={() => runCode(concept.code, conceptKey)}
                          className="
                            flex items-center
                            gap-2
                            px-4
                            py-2
                            bg-green-600
                            text-white
                            rounded-lg
                            hover:bg-green-700
                            transition"
                        >
                          <Play className="w-4 h-4" />
                          Run Example
                        </button>
                      </div>

                      {outputs[conceptKey] && (
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
                          <div className="text-sm font-semibold text-gray-700 mb-2">
                            Output:
                          </div>
                          <pre className="text-sm text-gray-800">{outputs[conceptKey]}
                          </pre>
                        </div>
                      )}

                      <div className="
                        bg-blue-50 border-l-4
                        border-blue-500
                        p-4 rounded">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700">{concept.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            // Editor Mode - Show code editor
            <CodeEditor />
          )}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Programming Logic Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Think Step-by-Step</h4>
            <p className="text-sm text-gray-700">Break problems into smaller pieces. Solve one part at a time.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Use Meaningful Names</h4>
            <p className="text-sm text-gray-700">Name variables clearly: 'user_age' is better than 'x'.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Comment Your Code</h4>
            <p className="text-sm text-gray-700">Explain why you're doing something, not just what you're doing.</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Practice Daily</h4>
            <p className="text-sm text-gray-700">Code every day, even for 15 minutes. Consistency builds skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonBasicsGuide;