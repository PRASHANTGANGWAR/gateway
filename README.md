1. Clone the project using url- "https://rahul-orange-bicycle@bitbucket.org/orange-bicycle/gateway-lifestyle-front-end-app.git"
2. run command npm install
3. run command ng serve

 To push on server follow the steps below:
 4. ng build 
5. push it on any branch you want by command
git push branch_name
6. ssh -i ~/path to gateway.pem ubuntu@52.65.142.81
7. sudo chmod 400 ~/path to gateway.pem(for provide access rights)
8. code path:/home/ubuntu/gatewaylifestyle
take pull of that branch where you pushed the code in step 5 by running below commands:
9. git checkout branch_name
10. git pull