@@ -6,16 +6,7 @@ root = true
end_of_line = lf
insert_final_newline = true

# Tab indentation (no size specified)
[*.js]
indent_style = tab

# 2 space indentation
[{.,}*.y{a,}ml]
[{.,}*.{js,yml,yaml}]
indent_style = space
indent_size = 2

# Indentation override for Gruntfile
[Gruntfile.js]
indent_style = space
indent_size = 4
