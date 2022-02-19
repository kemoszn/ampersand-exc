# Ampersand Exercise 
The solution of this exercise is a node/express application that uses the MVC pattern, has been deployed to heroku and is API-accessable. 
[Live Demo](https://amp-exe.herokuapp.com)  
* Available API-Endpoints _(1. /moto (GET, POST) 2. /battery (GET, POST) 3. /driver (GET, POST) )_   
   
### To run app locally:   
``` npm install ```   
Add enviroment vairable in a .env file as specified in the .env.example file    
``` npm start ```    
   
## 1. Architecture 
![Solution Arch.](https://github.com/kemoszn/ampersand-exc/blob/main/images/ampersand.jpg)

### Condiserations/Risks/Challenges: 
* Security (API, User Authenitcation..etc)
* Distributed Data Management 
* Scaling Websockets or choosing a different resource efficient mechanism.

## 2. Database Entity-Relationship (ER) Model
![Solution Arch.](https://github.com/kemoszn/ampersand-exc/blob/main/images/ERM.jpeg)


## 3. Questions' Answers
***2- How would you calculate the distance travelled by each driver? Total energy consumed by each driver. Total energy theoretically consumed by each driver.***  

a. We could calculate the overall distance traveled and the distance traveled per swap.
To calculate the overall distance we can use the GPS location provided by the telematics and accumulate the distance traveled in real-time. The distance traveled per swap can be calculated using the same way the total distance traveled is calculated except that it’s reset after each swap and logged in the database.   

b. To calculate the total energy consumed by each driver there are multiple options, I) To use info provided by telematics/battery/battery-charger (If provided) II) Use battery charging time.  

c. Theoretical energy consumption can be calculated using a mathematical relation between distance covered from a) and the theoretical energy performance/consumption obtained from the motor manual/schematics.   

***3- What's a good way to predict and optimize for how many batteries should be at a
given station?***   
(Pre-data) We could gather data about drivers registration and their distribution per operational geographic area to initially allocate batteries for stations. 

(Post-data) After gaining some historic data about recharge/swap frequency in a specific period of time, we could use a machine learning model to predict swaps for all stations or a specific station. The accuracy of the model will increase with time. This would allow us to optimize battery resource allocation.  

(Consideration) There should be a warning system when battery demand can potentially exceed the supply. 
