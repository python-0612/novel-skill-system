@echo off
echo.
echo ========================================
echo   小说创作技能系统 - 安装程序
echo ========================================
echo.

set NODE_EXE=D:\New Folder\node.exe
set INSTALL_JS=%~dp0install.js

echo 正在安装...
"%NODE_EXE%" "%INSTALL_JS%"

echo.
echo ========================================
echo   安装完成！
echo ========================================
echo.
pause
