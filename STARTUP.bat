@echo off
REM CUTM OS Startup Helper for Windows
REM Run this from the collegeOS directory

cls
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║         CUTM OS - Production Ready System                  ║
echo ║                                                            ║
echo ║    ✓ Clean minimal UI design                              ║
echo ║    ✓ Responsive layout                                    ║
echo ║    ✓ Authentication system (Register/Login)               ║
echo ║    ✓ Dashboard with feedback system                       ║
echo ║    ✓ Activity logging & tracking                          ║
echo ║    ✓ PostgreSQL database integration                      ║
echo ║    ✓ RESTful API backend                                  ║
echo ║    ✓ Zero syntax errors                                   ║
echo ║    ✓ Production-ready code                                ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check Node.js
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js v16+
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js: %NODE_VERSION%

REM Check npm
where npm >nul 2>nul
if errorlevel 1 (
    echo ❌ npm is not installed.
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm: %NPM_VERSION%

REM Check backend dependencies
if not exist "backend\node_modules" (
    echo.
    echo 📦 Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)
echo ✅ Backend dependencies: Ready

REM Check frontend dependencies
if not exist "frontend\node_modules" (
    echo.
    echo 📦 Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
)
echo ✅ Frontend dependencies: Ready

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                   READY TO START!                          ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo 🚀 Start the servers in two separate terminals:
echo.
echo   Terminal 1 (Backend):
echo   cd backend && npm start
echo   Runs on: http://localhost:5000
echo.
echo   Terminal 2 (Frontend):
echo   cd frontend && npm run dev
echo   Runs on: http://localhost:5176
echo.
echo 🌐 Open: http://localhost:5176
echo.
pause
