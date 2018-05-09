1. Clone the project using url- "https://rahul-orange-bicycle@bitbucket.org/orange-bicycle/gateway-lifestyle-front-end-app.git"
2. run command npm install
3. run command ng serve
4. write http://localhost:4200/ in your browser url bar

 To push on server follow the steps below:
5. ng build 
6. push it on any branch you want by command
git push branch_name
7. ssh -i ~/path to gateway.pem ubuntu@52.65.142.81
8. sudo chmod 400 ~/path to gateway.pem(for provide access rights)
9. code path:/home/ubuntu/gatewaylifestyle
take pull of that branch where you pushed the code in step 5 by running below commands:
10. git checkout branch_name
11. git pull

- To tunnel localhost code to a url to check on mobile browser run the following command(assuming you've install ngrok):

1. on new terminal window run: "ngrok http 4200"

2. Go back to working directory and run "ng serve --port 4200 --host 0.0.0.0 --disableHostCheck true"