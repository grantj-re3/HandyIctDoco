Convert Dublin Core Spreadsheet to XML
======================================

## Purpose

To convert Dublin Core metadata in a spreadsheet into XML
by using cell formulae and macros.

This is a proof of concept using LibreOffice Calc 4.1.3.2
under Linux but the same principle should apply using
Microsoft Excel under Windows.

(These instructions are also likely to work for a similar
version of OpenOffice Calc.)

## Method 1 - Single valued cells

- In worksheet 1 (named "dc") create a header row (ie. row 1) with cell names: 
```
identifier	date	creator	title	subject
```
- Create a few rows with values for the above metadata columns

- Create a second worksheet called "xmlp1".
- If you don't have mutiple values in a single cell in the "dc"
  sheet, you can use a formula in the corresponding cell of the "xmlp1"
  sheet.
  * The first 3 arguments to the CONCATENATE function create an
    opening tag by referencing the cell in the header.
  * The fourth argument to the CONCATENATE function inserts the
    value of the cell.
  * The last 3 arguments to the CONCATENATE function create an
    closing tag by referencing the cell in the header.

  Eg. In cell A2 of "xmlp1", enter:
```
=CONCATENATE("<",$dc.A$1,">",  $dc.A2,  "</",$dc.A$1,">")
```
  this should give a result something like:
```
<identifier>a1000</identifier>
```

- For dates (which are stored internally as numbers) you will need
  to modify this slightly.
  * The first 3 arguments and last 3 arguments to the CONCATENATE
    function create opening and closing tags as described above.
  * The fourth argument to the CONCATENATE function inserts the
    numeric value of the cell *after* converting it to a date
    representation.

  Eg. In cell B2 of "xmlp1", enter:
```
=CONCATENATE("<",B$1,">",  TEXT(B2,"yyyy-mm-dd"),  "</",B$1,">")
```
  this should give a result something like:
```
<date>2016-01-10</date>
```


## Method 2 - Multiple valued cells (without Macros)

- In worksheet 1 (named "dc"), in some cells (eg. subject) enter multiple
  values in the same cell by separating values with the delimiter "||"
  (ie. 2 pipe characters).

- If you have mutiple values in a single cell in the "dc" sheet, you
  can use a (more complicated) formula in the corresponding cell of
  the "xmlp1" sheet. Eg. In cell E2 of "xmlp1", enter:
```
=CONCATENATE("<",$dc.E$1,">",  SUBSTITUTE($dc.E2,"||",  CONCATENATE("</",$dc.E$1,">","<",$dc.E$1,">")),  "</",$dc.E$1,">")
```
  this should give a result something like:
```
<subject>metadata</subject><subject>crosswalk</subject><subject>dublin core</subject>
```


## Method 3 - Multiple valued cells (with Macros)

- In worksheet 1 (named "dc"), in some cells (eg. subject) enter multiple
  values in the same cell by separating values with the delimiter "||"
  (ie. 2 pipe characters).

- To process these cells you will probably need to write and invoke a
  (Basic language) macro.
  * Navigate to Tools > Macros > Organise Macros > LibreOffice Basic
  * Navigate to Macro From > LibreOffice Macros > Your spreadsheet (eg.
    dc2xml_demo1.ods) > Standard
  * Click New
  * Type name for new module. Eg. ToXml
  * Type or paste the Basic program below:

```
Sub Main

End Sub

rem ename = XML element name (cell from the spreadsheet title row)
rem evalue = XML element value (cell from a spreadsheet value row)
Function mv_text2xml(ename, evalue)
  sep = "||"
  tag1 = "<" + ename + ">"
  tag2 = "</" + ename + ">"
  tag21 = tag2 + tag1

  dim values()
  values = split(evalue, sep)
  mv_text2xml = tag1 + join(values, tag21) + tag2
End Function

rem ename = XML element name (cell from the spreadsheet title row)
rem evalue = XML element value (cell from a spreadsheet value row)
Function mv_date2xml(ename, evalue)
  rem https://help.libreoffice.org/Basic/Split_Function_Runtime
  rem https://help.libreoffice.org/Basic/Format_Function_Runtime
  sep = "||"
  tag1 = "<" + ename + ">"
  tag2 = "</" + ename + ">"
  tag21 = tag2 + tag1

  dim values()
  values = split(evalue, sep)

  v_min = LBound(values)
  v_max = UBound(values)
  dim date_text(v_max)
  for i = v_min To v_max
    date_text(i) = format(values(i),"yyyy-mm-dd")
  next i
  mv_date2xml = tag1 + join(date_text, tag21) + tag2
End Function
```

 - To save the the spreadsheet including the above macro
   you must save in the LibreOffice/OpenOffice Calc
   format (with a .ods file extension).

- Now you should be able to invoke these methods from your
  spreadsheet. Eg. In cell E2 of "xmlp1", enter:
```
=MV_TEXT2XML(dc.E$1,dc.E2)
```
  this should give a result something like:
```
<subject>metadata</subject><subject>crosswalk</subject><subject>dublin core</subject>
```

