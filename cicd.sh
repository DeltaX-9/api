#bash ./api/cicd.sh
# Pulling the latest code from the repository
git pull
# Installing the dependencies
cd ./platform && npm i && cd ../
exit 0

