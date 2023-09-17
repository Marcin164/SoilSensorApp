cd frontend
Start-Process "cmd"  -ArgumentList "/c npm run start
Start-Sleep -Seconds 2

Start-Process powershell -ArgumentList {
	-NoExit,
	cd backend,
	-Command "npm run start"
}