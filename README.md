# 11ty-renderTemplate

Reduced test case repo for `renderTemplate` issue.

Upon `npm run build` the template `src/index.njk`

```Nunjucks
{% extends "base.njk" %}

{% set content %}
<section id="book-title">
{% renderTemplate "md" %}
# Title of Book

by Author

{% endrenderTemplate %}
</section>
{% endset %}
```
results in the following markup `dist/index.html`:

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="page">
      
<section id="book-title">
    </div>
  </body>
</html>
```

i.e the template fails to render past the point of the `renderTemplate "md"`. 

Platform: 

```Shell
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.3 LTS
Release:	20.04
Codename:	focal

$ node -v
v16.13.0

$ npm -v
8.1.0
$ 
```
