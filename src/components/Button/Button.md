Basic button:

```jsx
<Button>Push Me</Button>
```

Big pink button:

```jsx
<Button size="large" color="deeppink">Lick Me</Button>
```

And you *can* **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `vue`, `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx
<Button>Push Me</Button>
```

You can also use the Single File Component Format

```vue
<template>
    <div class="wrapper">
        <icon class="icon-button" icon="clear-search" color="blue" size="22px"></icon>
        <Button @click.native="pushButton">Icon Test</Button>
        <hr />
        <p class="text-name">Next Dog Name: {{ dogName }}</p>
    </div>
</template>
<script>
const dogNames = require('dog-names').all;

// You can also use 'exports.default = {}' style module exports.
export default {
	data() {
		return { numClicks: 0, dogName: dogNames[0] };
	},
	methods: {
		pushButton() {
			this.numClicks += 1;
			this.dogName = dogNames[this.numClicks];
		}
	}
}
</script>
<style scoped>
    .wrapper {
      padding: 10px;
    }
    .text-name {
      color: red;
    }
</style>
```
