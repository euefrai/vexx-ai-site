@echo off
echo Initializing Git...
git init
git add .
git commit -m "Initial commit: Vexx-AI Premium Website"
git branch -M main
set /p repo_url="Enter your GitHub Repository URL (e.g., https://github.com/user/repo.git): "
git remote add origin %repo_url%
echo Pushing to GitHub...
git push -u origin main
echo Done!
pause
