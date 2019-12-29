# raina-react-hoc

raina-react-hoc is a collection of most in-use react HOCs that make the development easy.
# Installation
```sh
npm i raina-react-hoc
```

# First HOC - ErrorBoundary!

```javascript
import {ErrorBoundary} from 'raina-react-hoc'

// This is the component you want your component to fallback to
// in case of an error
const ErrorComp = () => <p>Error Here</p>

// This can be any component
const Component = ({ title, text }) => (
    <div className="article">
        <h1>{title.text}</h1>
        <p>{text}</p>
    </div>
);

// Second argument is optional. If not provided, the component
// will display an error message
export default ErrorBoundary(Component,ErrorComp);
```

