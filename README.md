# Minimal Tips for jQuery

Minimal Tooltips plugin for jQuery

## How to use?
- In `$(document).ready(function(){});` section;
- Put `$.minimalTips();` code;
- Stylize the CSS with your preferences;
- Done!

## Features:
- Very easy to use! Too light to load (only 6 KB, this plugin and your style together)
- Supports keyboard navigation (using the "tab" and then "enter" on the desired tab)
 
## Install:
```html
		<link rel="stylesheet" type="text/css" href="jquery.minimalTips.css" />
		<script src="http://code.jquery.com/jquery-latest.js"></script>
		<script src="jquery.minimalTips.js"></script>
```
## The code:
```html
		<script type="text/javascript">
			$(document).ready(function() {
				$.minimalTips();
			});
		</script>
```
## The html:
```html
			<a href="#" title="Primeiro link">This is a link</a>
			<span class="mintip" title="Outro elemento">Another element</span>
```
## Links:
- Plugin page <http://vinicius-stutz.github.io/jquery.minimalTips>
- Official website <http://www.vinicius-stutz.com/>

## MIT License
The MIT License (MIT)

Copyright (c) 2013 Vinícius Stutz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Enjoy!
