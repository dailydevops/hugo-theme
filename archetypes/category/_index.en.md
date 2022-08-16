---
## Page Settings - Do not change
slug: {{ .Name | urlize }}
translationKey: category-{{ .Name | urlize }}
aliases:
  - {{ printf "/%s" (replace (.File.Path | strings.TrimRight .File.LogicalName) "\\" "/") }}
## End Page Settings

title: '{{ replace .Name "-" " " | title }}'
# Please comment out if the LinkTitle should be different from the Page `title`.
# linktitle: '{{ replace .Name "-" " " | title }}'
description: '{{ replace .Name "-" " " | title }}'
---
