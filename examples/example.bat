@echo off
REM Simple comment
:: Another way to comment

setlocal enabledelayedexpansion

set PREFIX=LOG
set MAX_COUNT=100
set VERSION=1.0

echo Starting Batch Script Version %VERSION%...

:MainLoop
if "%1"=="--help" (
    echo Usage: %0 [directory]
    goto :EOF
)

set TARGET_DIR=%~1
if "%TARGET_DIR%"=="" set TARGET_DIR=.

echo Scanning directory: %TARGET_DIR%

set /a count=0
for %%F in ("%TARGET_DIR%\*") do (
    set /a count+=1
    echo [%PREFIX%] Processing file: %%~nxF
    
    if !count! GEQ %MAX_COUNT% (
        echo Reached maximum count of %MAX_COUNT%.
        goto :EndLoop
    )
)

:EndLoop
echo Finished processing %count% files.

if %ERRORLEVEL% NEQ 0 (
    echo An error occurred during execution.
    exit /b %ERRORLEVEL%
)

endlocal
pause
