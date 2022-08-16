---
## Page Settings - Do not change
slug: tables
translationKey: docs-tables
aliases:
  - /en/docs/tables/
  - /docs/tables/
## End Page Settings

order: 3
title: 'Tabellen'
# Please comment out if the LinkTitle should be different from the Page `title`.
linktitle: 'Markdown: Tabellen'
description: 'Darstellungsvarianten von Tabellen'
---
## Markdown für Tabelle
Wie im folgenden Beispiel zu sehen, wird innerhalb des Themes der Markdown Standard für Tabellen verwendet.
{{< example/markdown >}}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1.1| Value 2.1| Value 3.1|
| Value 1.2| Value 2.2| Value 3.2|
| Value 1.3| Value 2.3| Value 3.3|
| Value 1.4| Value 2.4| Value 3.4|
{{< /example/markdown >}}

Dieser ist in allen Ausprägungen einsetzbar, wie im folgenden Beispiel zu sehen. Mit der Verwendung von `:`, kann die Positionierung innerhalb der Tabelle beeinflusst werden.

{{< example/markdown >}}
| Column 1 | Column 2 | Column 3 |
|---------:|:--------:|:---------|
| Value 1.1| Value 2.1| Value 3.1|
| Value 1.2| Value 2.2| Value 3.2|
| Value 1.3| Value 2.3| Value 3.3|
| Value 1.4| Value 2.4| Value 3.4|
{{< /example/markdown >}}
- `:----` Links gestellt - Standard, wenn keine `:` angegeben werden
- `:---:` Zentriert
- `----:` Rechts gestellt

### Tabellen Styling
Innerhalb des Themes stehen diverse `.css` Styles für Tabellen zur Verfügung. Damit diese eingesetzt werden können muss das Markdown für Tabellen erweitert werden. Hierfür wird in der Zeile direkt nach der Tabelle `{ .classname }` verwendet. Dies kann auch kombiniert werden, wie im letzten Beispiel dargestellt.

### Gestreifte Tabelle

Bei Verwendung von `.striped`, werden die Zeilen im Zebralook dargestellt.

{{< example/markdown >}}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1.1| Value 2.1| Value 3.1|
| Value 1.2| Value 2.2| Value 3.2|
| Value 1.3| Value 2.3| Value 3.3|
| Value 1.4| Value 2.4| Value 3.4|
| Value 1.5| Value 2.5| Value 3.5|
{ .striped }
{{< /example/markdown >}}

### Tabelle mit Ergebniszeile

Mit `.row` wird eine Ergebniszeile eingeblendet.

{{< example/markdown >}}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1.1| Value 2.1| Value 3.1|
| Value 1.2| Value 2.2| Value 3.2|
| Value 1.3| Value 2.3| Value 3.3|
| Value 1.4| Value 2.4| Value 3.4|
| Value 1.5| Value 2.5| Value 3.5|
{ .row }
{{< /example/markdown >}}

### Tabelle mit Kombinierten Styles

Wie bereits im ersten Absatz andeutet, können die unterschiedlichen Styles kombiniert werden.

{{< example/markdown >}}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1.1| Value 2.1| Value 3.1|
| Value 1.2| Value 2.2| Value 3.2|
| Value 1.3| Value 2.3| Value 3.3|
| Value 1.4| Value 2.4| Value 3.4|
| Value 1.5| Value 2.5| Value 3.5|
{ .striped .row }
{{< /example/markdown >}}