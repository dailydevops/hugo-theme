---
## Page Settings - Do not change
slug: {{ .Name | urlize }}
translationKey: docs-{{ .Name | urlize }}
aliases:
  - {{ printf "/en/%s" (replace (.File.Path | strings.TrimRight .File.LogicalName) "\\" "/") }}
  - {{ printf "/%s" (replace (.File.Path | strings.TrimRight .File.LogicalName) "\\" "/") }}
## End Page Settings

order: 999
title: '{{ replace .Name "-" " " | title }}'
# Please comment out if the LinkTitle should be different from the Page `title`.
# linktitle: '{{ replace .Name "-" " " | title }}'
description: '{{ replace .Name "-" " " | title }}'
---
