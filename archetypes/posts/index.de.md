---
## Page Settings - Do not change
slug: {{ .Name | urlize }}
translationKey: post-{{ .Name | urlize }}
aliases:
  - {{ printf "/%s" (replace (.File.Path | strings.TrimRight .File.LogicalName) "\\" "/") }}
## End Page Settings

title: '{{ replace .Name "-" " " | title }}'
# Please comment out if the LinkTitle should be different from the Page `title`.
# linktitle: '{{ replace .Name "-" " " | title }}'
description: '{{ replace .Name "-" " " | title }}'
# Please comment out, to use the correct author.
# author: ''
# Publish Date, must be set
publishDate: {{ .Date }}
# Draft `false`, must be set for publish
# draft: false

categories:
- ''
tags:
- ''
---
