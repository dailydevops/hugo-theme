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
publishDate: {{ dateFormat "2006-01-02T15:00:00Z07:00" (time (int (mul (div (sub (add now.Local.Unix 900) 1) 900) 900))) }}
# Draft `false`, must be set for publish
# draft: false

# Please add as many categories and tags as you want.
# Categories and tags are by default unpublished. If you want to pre-populate a tag before you publish it, this is also possible with this.
categories:
- ''
tags:
- ''

# Additional links, listed in the sidebar
# links:
#  - name:
#    url:

# Hero Banner path. Required
# SVG images are not allowed!
# For images from the central library please use the following syntax
# hero: images/image.png
# For images directly from the article directory please use the following syntax
# hero: image.png
hero:

# VG Wort trademark
# Identifies the article to the Verwertungsgesellschaft Wort
vgwort:
---
