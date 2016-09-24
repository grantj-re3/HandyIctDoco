REM  *****  BASIC  *****

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

