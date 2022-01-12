@echo off
xcopy D:\liz-gitee\lz-webpack\* D:\liz-github\lz-webpack\ /s /e /y /EXCLUDE:uncopy.txt
cd \liz-github\lz-webpack\
:: echo %CD%
:: echo %DATE%
set d=%DATE%
git add .
git commit -m "%d%"
git push origin main
echo "push successful"
pause
