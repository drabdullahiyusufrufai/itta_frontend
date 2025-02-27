export const cheatSheets = [
    {
      title: "Git Commands",
      description: "Common Git commands for version control.",
      commands: [
        { command: "git status", description: "Check the status of your repository" },
        { command: "git add .", description: "Stage all changes" },
        { command: "git commit -m 'message'", description: "Commit changes with a message" },
        { command: "git push origin main", description: "Push changes to the main branch" },
        { command: "git pull origin main", description: "Pull the latest changes from the main branch" },
        { command: "git branch", description: "List all branches in the repository" },
        { command: "git checkout -b new-branch", description: "Create and switch to a new branch" },
        { command: "git merge branch-name", description: "Merge a branch into the current one" },
        { command: "git log", description: "Show the commit history" },
        { command: "git reset --hard", description: "Reset the repository to the last commit" },
        { command: "git stash", description: "Stash changes without committing them" },
        { command: "git stash pop", description: "Apply stashed changes" },
        { command: "git remote -v", description: "View all remotes connected to your repository" },
        { command: "git clone url", description: "Clone a repository from a remote source" },
        { command: "git rebase branch-name", description: "Rebase a branch onto the current branch" },
        { command: "git diff", description: "Show changes not yet staged" },
        { command: "git commit --amend", description: "Amend the last commit message" },
        { command: "git cherry-pick commit-id", description: "Apply changes from a specific commit" },
        { command: "git revert commit-id", description: "Revert a specific commit" },
        { command: "git fetch", description: "Fetch changes from the remote without merging" },
        { command: "git mv old-name new-name", description: "Rename a file" },
        { command: "git rm file", description: "Remove a file from the repository" },
        { command: "git tag tag-name", description: "Create a new tag" },
        { command: "git push origin --tags", description: "Push tags to the remote repository" },
        { command: "git log --oneline", description: "View a simplified commit history" },
        { command: "git checkout commit-id", description: "Check out a specific commit" },
        { command: "git stash save 'message'", description: "Save a stash with a message" },
        { command: "git config --global user.name 'name'", description: "Set the global username" },
        { command: "git config --global user.email 'email'", description: "Set the global email" },
        { command: "git reflog", description: "View the history of all commits and changes" },
      ],
    },
    {
      title: "Python Basics",
      description: "Essential Python commands and tips.",
      commands: [
        { command: "print('Hello, World!')", description: "Print a message to the console" },
        { command: "len(str)", description: "Get the length of a string" },
        { command: "str.lower()", description: "Convert a string to lowercase" },
        { command: "str.upper()", description: "Convert a string to uppercase" },
        { command: "list.append(item)", description: "Add an item to the end of a list" },
        { command: "list.remove(item)", description: "Remove an item from a list" },
        { command: "list.sort()", description: "Sort a list" },
        { command: "list.pop()", description: "Remove and return the last item from a list" },
        { command: "dict.get(key)", description: "Get a value from a dictionary" },
        { command: "range(5)", description: "Generate a range of numbers" },
        { command: "for i in range(5):", description: "Loop over a range of numbers" },
        { command: "if condition:", description: "Start an if statement" },
        { command: "def function_name(params):", description: "Define a function" },
        { command: "class ClassName:", description: "Define a class" },
        { command: "try: except:", description: "Handle exceptions" },
        { command: "import module_name", description: "Import a module" },
        { command: "open('file.txt')", description: "Open a file" },
        { command: "file.read()", description: "Read from a file" },
        { command: "file.write(data)", description: "Write to a file" },
        { command: "lambda x: x * 2", description: "Define a lambda function" },
        { command: "[x for x in iterable]", description: "List comprehension" },
        { command: "enumerate(iterable)", description: "Get index and value from an iterable" },
        { command: "zip(list1, list2)", description: "Combine two lists into tuples" },
        { command: "map(function, iterable)", description: "Apply a function to all items in an iterable" },
        { command: "filter(function, iterable)", description: "Filter items in an iterable" },
        { command: "from datetime import datetime", description: "Import the datetime module" },
        { command: "datetime.now()", description: "Get the current date and time" },
        { command: "random.randint(1, 10)", description: "Generate a random integer" },
        { command: "os.listdir()", description: "List files in a directory" },
        { command: "json.loads(data)", description: "Parse JSON data" },
      ],
    },
    {
      title: "JavaScript Essentials",
      description: "Key JavaScript functions and tips.",
      commands: [
        { command: "console.log('Hello, World!')", description: "Log a message to the console" },
        { command: "const x = 5;", description: "Declare a constant variable" },
        { command: "let y = 10;", description: "Declare a block-scoped variable" },
        { command: "document.getElementById('id')", description: "Select an element by ID" },
        { command: "document.querySelector('.class')", description: "Select an element by class" },
        { command: "array.push(item)", description: "Add an item to an array" },
        { command: "array.pop()", description: "Remove the last item from an array" },
        { command: "array.map(callback)", description: "Map over an array" },
        { command: "array.filter(callback)", description: "Filter items in an array" },
        { command: "array.reduce(callback, initialValue)", description: "Reduce an array to a single value" },
        { command: "function myFunction() {}", description: "Define a function" },
        { command: "const arrowFunc = () => {}", description: "Define an arrow function" },
        { command: "if (condition) {}", description: "Write an if statement" },
        { command: "for (let i = 0; i < 10; i++) {}", description: "Write a for loop" },
        { command: "array.forEach(callback)", description: "Loop over an array" },
        { command: "Math.random()", description: "Generate a random number" },
        { command: "Date.now()", description: "Get the current timestamp" },
        { command: "JSON.parse(str)", description: "Parse a JSON string" },
        { command: "JSON.stringify(obj)", description: "Convert an object to a JSON string" },
        { command: "localStorage.setItem('key', value)", description: "Set a local storage item" },
        { command: "localStorage.getItem('key')", description: "Get a local storage item" },
        { command: "setTimeout(callback, time)", description: "Delay a function call" },
        { command: "setInterval(callback, time)", description: "Call a function at intervals" },
        { command: "fetch(url)", description: "Make a fetch API call" },
        { command: "Promise.resolve(value)", description: "Create a resolved promise" },
        { command: "async function asyncFunc() {}", description: "Define an async function" },
        { command: "await asyncFunc()", description: "Await a promise resolution" },
        { command: "try { ... } catch (error) {}", description: "Handle errors with try/catch" },
        { command: "switch (value) {}", description: "Switch statement for multiple cases" },
        { command: "class MyClass {}", description: "Define a class" },
      ],
    },
    {
      title: "React Basics",
      description: "Essential commands and tips for React.",
      commands: [
        { command: "import React from 'react'", description: "Import React" },
        { command: "const Component = () => {}", description: "Define a functional component" },
        { command: "useState(initialValue)", description: "Declare a state variable" },
        { command: "useEffect(() => {}, [])", description: "Use effect hook" },
        { command: "return (<div>Hello World</div>)", description: "Return JSX from a component" },
        { command: "props.children", description: "Access child components" },
        { command: "onClick={() => {}}", description: "Add a click event handler" },
        { command: "useContext(Context)", description: "Use a context" },
        { command: "React.memo(Component)", description: "Memoize a component" },
        { command: "useReducer(reducer, initialState)", description: "Use a reducer hook" },
        { command: "const ref = useRef(null)", description: "Create a reference" },
        { command: "<Route path='/page' component={PageComponent} />", description: "Define a route" },
        { command: "Link to='/page'", description: "Create a navigation link" },
        { command: "useHistory()", description: "Access history object for navigation" },
        { command: "useParams()", description: "Access route parameters" },
        { command: "useLayoutEffect(() => {}, [])", description: "Run an effect after layout" },
        { command: "useImperativeHandle(ref, () => {})", description: "Customize a ref's instance" },
        { command: "useCallback(callback, [deps])", description: "Memoize a function" },
        { command: "useMemo(() => value, [deps])", description: "Memoize a value" },
        { command: "React.StrictMode", description: "Wrap your app for strict mode" },
        { command: "useLocation()", description: "Access the current location object" },
        { command: "useRouteMatch()", description: "Match route properties" },
        { command: "componentDidMount()", description: "Lifecycle method in class components" },
        { command: "componentDidUpdate()", description: "Lifecycle method for updates" },
        { command: "componentWillUnmount()", description: "Lifecycle method before unmounting" },
        { command: "setState({ value: newValue })", description: "Update component state" },
        { command: "ReactDOM.render(<App />, document.getElementById('root'))", description: "Render the app" },
        { command: "styled.div`style`", description: "Use styled-components for styling" },
        { command: "import { BrowserRouter as Router }", description: "Import Router for navigation" },
      ],
    },
    {
      title: "Machine Learning with Python",
      description: "Common machine learning operations using Python.",
      commands: [
        { command: "import numpy as np", description: "Import numpy library" },
        { command: "import pandas as pd", description: "Import pandas library" },
        { command: "from sklearn.model_selection import train_test_split", description: "Split dataset into training and testing" },
        { command: "from sklearn.linear_model import LinearRegression", description: "Import Linear Regression model" },
        { command: "model.fit(X_train, y_train)", description: "Train the model" },
        { command: "model.predict(X_test)", description: "Make predictions with the model" },
        { command: "from sklearn.metrics import accuracy_score", description: "Import accuracy score metric" },
        { command: "accuracy_score(y_test, y_pred)", description: "Calculate model accuracy" },
        { command: "pd.read_csv('file.csv')", description: "Load a CSV file with pandas" },
        { command: "np.array([1, 2, 3])", description: "Create a numpy array" },
        { command: "df.head()", description: "View the first few rows of a dataframe" },
        { command: "df.describe()", description: "Get a summary of the dataframe" },
        { command: "from sklearn.preprocessing import StandardScaler", description: "Import scaler for normalization" },
        { command: "scaler.fit_transform(X)", description: "Scale features" },
        { command: "plt.plot(X, y)", description: "Plot data using matplotlib" },
        { command: "from tensorflow import keras", description: "Import TensorFlow Keras" },
        { command: "keras.Sequential([keras.layers.Dense(10)])", description: "Create a simple neural network" },
        { command: "from sklearn.datasets import load_iris", description: "Load sample iris dataset" },
        { command: "from sklearn.cluster import KMeans", description: "Import KMeans clustering model" },
        { command: "from sklearn.decomposition import PCA", description: "Import PCA for dimensionality reduction" },
        { command: "pca.fit_transform(X)", description: "Apply PCA transformation" },
        { command: "sns.heatmap(df.corr())", description: "Plot a heatmap of correlations" },
        { command: "df.isnull().sum()", description: "Check for missing values in the dataset" },
        { command: "from sklearn.impute import SimpleImputer", description: "Handle missing values with imputation" },
        { command: "from sklearn.tree import DecisionTreeClassifier", description: "Import Decision Tree Classifier" },
        { command: "model.score(X_test, y_test)", description: "Get model score (accuracy)" },
        { command: "df['column'].value_counts()", description: "Count unique values in a column" },
        { command: "np.random.seed(42)", description: "Set random seed for reproducibility" },
        { command: "from sklearn.svm import SVC", description: "Import Support Vector Classifier" },
        { command: "pd.concat([df1, df2], axis=1)", description: "Concatenate dataframes" },
      ],
    },

        {
          title: "HTML",
          description: "Common HTML tags and attributes.",
          commands: [
            { command: "<!DOCTYPE html>", description: "Declare the document type" },
            { command: "<html></html>", description: "Root element of an HTML page" },
            { command: "<head></head>", description: "Metadata about the document" },
            { command: "<body></body>", description: "Main content of the document" },
            { command: "<h1>Heading</h1>", description: "Define headings (h1 to h6)" },
            { command: "<p>Paragraph</p>", description: "Add a paragraph" },
            { command: "<a href='url'>Link</a>", description: "Create a hyperlink" },
            { command: "<img src='image.jpg' alt='Description' />", description: "Add an image" },
            { command: "<ul><li>Item</li></ul>", description: "Unordered list" },
            { command: "<ol><li>Item</li></ol>", description: "Ordered list" },
            { command: "<div></div>", description: "Define a division or section" },
            { command: "<span></span>", description: "Inline container for text" },
            { command: "<input type='text' />", description: "Input field for text" },
            { command: "<button>Click Me</button>", description: "Button element" },
            { command: "<form action='submit.php'></form>", description: "Define a form" },
            { command: "<table><tr><td>Cell</td></tr></table>", description: "Create a table" },
            { command: "<iframe src='page.html'></iframe>", description: "Embed another webpage" },
            { command: "<strong>Bold Text</strong>", description: "Bold text" },
            { command: "<em>Italic Text</em>", description: "Italicize text" },
            { command: "<meta charset='UTF-8'>", description: "Define character set" },
            { command: "<link rel='stylesheet' href='styles.css'>", description: "Link a CSS file" },
            { command: "<script src='script.js'></script>", description: "Include a JS file" },
            { command: "<nav><ul><li>Menu</li></ul></nav>", description: "Navigation bar" },
            { command: "<footer></footer>", description: "Footer section" },
            { command: "<header></header>", description: "Header section" },
            { command: "<section></section>", description: "Section of a document" },
            { command: "<article></article>", description: "Article element" },
            { command: "<aside></aside>", description: "Content aside from the main content" },
            { command: "<figure><img src='image.jpg' alt=''></figure>", description: "Image with caption" },
            { command: "<video controls><source src='video.mp4'></video>", description: "Embed a video" },
            { command: "<audio controls><source src='audio.mp3'></audio>", description: "Embed audio" },
            { command: "<br />", description: "Line break" },
            { command: "<hr />", description: "Horizontal line" },
            { command: "<label for='inputId'>Label</label>", description: "Label for input" },
          ],
        },
        {
          title: "CSS",
          description: "Common CSS properties and selectors.",
          commands: [
            { command: "body { margin: 0; padding: 0; }", description: "Reset body margin and padding" },
            { command: "h1, h2 { color: blue; }", description: "Style multiple elements" },
            { command: ".className { font-size: 16px; }", description: "Style by class name" },
            { command: "#idName { background-color: yellow; }", description: "Style by ID" },
            { command: "p:hover { color: red; }", description: "Style on hover" },
            { command: "a { text-decoration: none; }", description: "Remove underline from links" },
            { command: ".container { width: 100%; max-width: 1200px; margin: 0 auto; }", description: "Center a container" },
            { command: ".flex { display: flex; justify-content: center; align-items: center; }", description: "Center elements using flexbox" },
            { command: ".grid { display: grid; grid-template-columns: 1fr 1fr; }", description: "Set up a CSS grid" },
            { command: "img { max-width: 100%; height: auto; }", description: "Make images responsive" },
            { command: "ul { list-style-type: none; }", description: "Remove list bullets" },
            { command: "button { cursor: pointer; }", description: "Add pointer cursor to buttons" },
            { command: "input[type='text'] { border: 1px solid #ccc; }", description: "Style input fields" },
            { command: ".text-center { text-align: center; }", description: "Center-align text" },
            { command: "@media (max-width: 600px) { body { font-size: 14px; } }", description: "Media query for responsiveness" },
            { command: ".hidden { display: none; }", description: "Hide an element" },
            { command: ".absolute { position: absolute; top: 50px; left: 20px; }", description: "Absolute positioning" },
            { command: ".relative { position: relative; top: 10px; }", description: "Relative positioning" },
            { command: ".fixed { position: fixed; bottom: 0; width: 100%; }", description: "Fixed positioning" },
            { command: ".z-index { z-index: 10; }", description: "Set stacking order" },
            { command: ".rounded { border-radius: 8px; }", description: "Make corners rounded" },
            { command: "background-image: url('image.jpg');", description: "Set background image" },
            { command: "opacity: 0.5;", description: "Set transparency level" },
            { command: ".transform { transform: scale(1.2); }", description: "Scale element" },
            { command: ".animation { animation: slide 2s infinite; }", description: "Add animation" },
            { command: "@keyframes slide { 0% { opacity: 0; } 100% { opacity: 1; } }", description: "Define keyframes for animation" },
            { command: "border: 1px solid black;", description: "Add border" },
            { command: "padding: 10px;", description: "Add padding inside an element" },
            { command: "margin: 20px;", description: "Add margin outside an element" },
            { command: "font-family: 'Arial', sans-serif;", description: "Set font family" },
            { command: "color: #333;", description: "Set text color" },
            { command: "text-shadow: 2px 2px #ccc;", description: "Add text shadow" },
            { command: "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);", description: "Add box shadow" },
            { command: "overflow: hidden;", description: "Hide overflow content" },
            { command: "line-height: 1.5;", description: "Set line height for text" },
            { command: "letter-spacing: 2px;", description: "Adjust space between letters" },
          ],
        },

      
  ];
  