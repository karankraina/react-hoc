# raina-react-hoc

raina-react-hoc is a collection of most in-use react HOCs that make the development easy.
# Installation
```sh
npm i raina-react-hoc
```

# First HOC - ErrorBoundary!

```javascript
import {ErrorBoundary} from 'raina-react-hoc'

// This can be any component
const Component = ({ title, text }) => (
    <div className="article">
        <h1>{title.text}</h1>
        <p>{text}</p>
    </div>
);

export default ErrorBoundary(Component, 'Your Error Message Here...');
```

